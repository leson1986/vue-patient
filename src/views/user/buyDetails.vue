<template>
    <mt-header fixed isgrey :title="docName">
        <mt-button v-link="'/user/buy'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content class="leh-bg-grey-body">
        <div class="page-cell buy-details-title">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text">剩余条数</span>
                </label>
                <div class="mint-cell-value">
                    <span v-text="residueNum"></span>
                </div>
            </a>
        </div>
        <div class="mint-navbar buy-details-tap-bar">
            <a class="mint-tab-item" @click.prevent="selected = 'used'" :class="{'is-selected' : selected === 'used'}">
                <div class="mint-tab-item-icon"></div>
                <div class="mint-tab-item-label">已使用</div>
            </a>
            <a class="mint-tab-item" @click.prevent="selected = 'buy'" :class="{'is-selected' : selected === 'buy'}">
                <div class="mint-tab-item-icon"></div>
                <div class="mint-tab-item-label">已购买</div>
            </a>
        </div>
        <div class="mint-tab-container buy-details-tap-content">
            <mt-tab-container class="mint-tab-container-wrap" :active.sync="selected">
                <mt-tab-container-item id="used">
                    <p class="leh-null-data" v-if="usedList.length == 0">暂无数据</p>
                    <a class="mint-cell" v-for="items in usedList">
                        <div class="mint-cell-left"></div>
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text" v-text="items.year + '年'"></span>
                                <div class="mimt-cell-label">
                                    <ul>
                                        <li class="buy-details-tap-list" v-for="item in items.items">
                                            <span class="fl" v-text="item.month_day"></span>
                                            <span class="fr" v-text="item.qty"></span>
                                    </ul>
                                </div>
                            </div>
                            <div class="mint-cell-value"><span></span></div>
                        </div>
                        <div class="mint-cell-right"></div>
                    </a>
                    <!--加载-->
                    <div class="page-infinite-loading document-index-load-tap" v-if="usedNum*10 < usedQty">
                        <mt-button size="large" type="transparent" icon="load" @click="moreUseList()" >点击加载更多</mt-button>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="buy">
                    <p class="leh-null-data" v-if="buyList.length == 0">暂无数据</p>
                    <a class="mint-cell" v-for="items in buyList">
                        <div class="mint-cell-left"></div>
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <span class="mint-cell-text" v-text="items.year + '年'"></span>
                                <div class="mimt-cell-label">
                                    <ul>
                                        <li class="buy-details-tap-list" v-for="item in items.items">
                                            <span class="fl" v-text="item.month_day"></span>
                                            <span class="fr" v-text="item.qty"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mint-cell-value"><span></span></div>
                        </div>
                        <div class="mint-cell-right"></div>
                    </a>
                    <!--加载-->
                    <div class="page-infinite-loading document-index-load-tap" v-if="buyNum*10 < buyQty">
                        <mt-button size="large" type="transparent" icon="load" @click="moreBuyList()" >点击加载更多</mt-button>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </mt-content>
</template>
<script>
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'
    import MtTabContainer from '../../components/tab-container.vue'
    import MtTabContainerItem from '../../components/tab-container-item.vue'
    import MtTabItem from "../../components/tab-item.vue"
    import MtTabbar from '../../components/tabbar.vue'
    import $ from 'zepto'
    import {getJson} from 'util'
    export default{
        route: {
            data ({ to,next}) {
                this.docName = to.query.docName
                this.drid = to.query.id
                this.usedNum = 1
                this.buyNum = 1
                this.getList(this.drid)
                next()
            }
        },
        data () {
            return{
                selected: 'used',
                residueNum:'',  //剩余条数
                docName:'',     //医生名称
                drid:'',         //医生id
                usedList:[],     //已使用列表
                usedQty:'',     //已使用总条数
                usedNum:1,
                buyList:[],     //已购买列表
                buyQty:'',     //已购买总条数
                buyNum:1
            }
        },
        ready(){
            let bdH = $(window).height() - "148"
            $('.mint-tab-container-wrap').height(bdH)
        },
        methods:{
            getList(id){
                let _self = this
                //剩余条数
                getJson('api/msgOrderService/residualQty?drid=' + id,'',(rsp_title)=>{
                    _self.residueNum = rsp_title
                    //已使用
                    getJson('api/msgOrderService/msgServiceToUse?drid=' + id + '&pageindex=1&pagesize=10','',(rsp_use)=>{
                        _self.usedList = rsp_use.items
                        _self.usedQty = rsp_use.totalQty
                        //已购买
                        getJson('api/msgOrderService/msgServiceToBuy?drid=' + id + '&pageindex=1&pagesize=10','',(rsp_buy)=>{
                            _self.buyList = rsp_buy.items
                            _self.buyQty = rsp_buy.totalQty
                        },_self)
                    },_self)
                },_self)
            },
            moreUseList(){
                let _self = this
                if(_self.usedNum*10 >= _self.usedQty) {
                    return
                }
                _self.usedNum = _self.usedNum + 1
                getJson('api/msgOrderService/msgServiceToUse?drid=' + _self.drid + '&pageindex=' + _self.usedNum + '&pagesize=10','',(rsp_use)=>{
                    // 合并数组
                    _self.usedList = _self.usedList.concat(rsp_use.items)
                },_self)
            },
            moreBuyList(){
                let _self = this
                if(_self.buyNum*10 >= _self.buyQty) {
                    return
                }
                _self.buyNum = _self.buyNum + 1
                getJson('api/msgOrderService/msgServiceToBuy?drid=' + _self.drid + '&pageindex=' + _self.buyNum + '&pagesize=10','',(rsp_buy)=>{
                    // 合并数组
                    _self.buyList = _self.buyList.concat(rsp_buy.items)
                },_self)
            }
        },
        components: {
            MtHeader,
            MtContent,
            MtButton,
            MtTabContainer,
            MtTabContainerItem,
            MtTabItem,
            MtCell
        }
    }
</script>

<style>
    .buy-details-title .mint-cell:after,
    .buy-details-title .mint-cell:before,
    .buy-details-tap-content .mint-cell:after,
    .buy-details-tap-content .mint-cell:before{border: 0;}
    .buy-details-title{margin-bottom: 10px;}
    .buy-details-title .mint-cell span{color: #1faa2b;}
    .buy-details-tap-bar .mint-tab-item.is-selected{position: relative;z-index: 2;border-bottom-color: #1faa2b;}
    .buy-details-tap-bar .mint-tab-item.is-selected .mint-tab-item-label{color: #1faa2b;}
    .buy-details-tap-bar{border-bottom: 1px solid #e5e5e5;}
    .buy-details-tap-content .mint-tab-container-wrap{top:0px;bottom: 0;overflow-x: hidden;overflow-y: auto;width: 100%;}
    .buy-details-tap-content .mint-cell{padding-right: 0;margin-bottom: 10px;line-height: 1.5}
    .buy-details-tap-content .mint-cell:nth-last-of-type(1){margin-bottom: 0;}
    .buy-details-tap-content .mint-cell-text{color: #1dadfe;padding: 10px 0 15px}
    .buy-details-tap-content .mint-cell-wrapper{width: 100%;}
    .buy-details-tap-content .buy-details-tap-list{overflow: hidden;padding: 12px 0;border-bottom: 1px solid #e5e5e5;padding-right: 10px;}
    .buy-details-tap-content .buy-details-tap-list:nth-last-of-type(1){padding-bottom: 0;border-bottom: 0;}
    .buy-details-tap-bar .mint-tab-item-label{font-size: 14px}
</style>
