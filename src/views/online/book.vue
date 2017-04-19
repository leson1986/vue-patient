<template>
    <mt-content>
        <div class="nav phone-index-head leh-bg-green">
            <div class="mint-header-button is-left" @click="lehBack">
                <i class="iconfont icon-wx-arr-left leh-c-white"></i>
            </div>
            <mt-button size="small" @click.prevent="active = 'book'" :class="{'leh-active' : active === 'book'}">预约列表</mt-button>
            <mt-button size="small" @click.prevent="active = 'apply'" :class="{'leh-active' : active === 'apply'}">申请列表</mt-button>
        </div>
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" :active.sync="active">
                <mt-tab-container-item id="book">
                    <div class="leh-null-data" v-if="!bookList.length">暂无数据</div>
                    <div class="page-cell phone-admin-content">
                        <a class="mint-cell" v-for="items in bookList" :class="{'leh-phone-red':items.status==4, 'leh-phone-blue':items.status==2}" v-link="{path: '/online/bookContent', query: {id :items.id ,isType:1}, replace: true}">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img :src="items.drPhoto"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span v-text="items.drName"></span>
                                        <span class="leh-fs-fourteen leh-c-grey" v-text="items.drTitle"></span>
                                        <span class="fr leh-fs-fourteen" :class="{'leh-red-dot':items.unread}">
                                            <span v-if="items.status==4">已结束</span>
								            <span v-else>待通话</span>
                                        </span>
                                    </span>
                                    <span class="mint-cell-label">
                                        <span class="iconfont icon-wx-time"></span>
                                        <span>预约时间&nbsp;</span>
                                        <span v-text="items.date"></span>
                                        <span v-text="items.time"></span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <div class="page-infinite-loading document-index-load-tap" v-if="bookNum*10 < bookQty">
                            <mt-button size="large" type="transparent" icon="load" @click="moreBook" >点击加载更多</mt-button>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="apply" :active.sync="active">
                    <div class="leh-null-data" v-if="!applyList.length">暂无数据</div>
                    <div class="page-cell phone-admin-content">
                        <a class="mint-cell" v-for="item in applyList" :class="{'leh-phone-red':item.status == 0,'leh-phone-blue':item.status == 1}" @click="goApplyContent(item.id)">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img :src="item.drPhoto"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span v-text="item.drName"></span>
                                        <span class="leh-fs-fourteen leh-c-grey" v-text="item.drTitle"></span>
                                        <span class="fr leh-fs-fourteen" :class="{'leh-red-dot':item.unread}">
                                            <span v-if="item.status == 0">待确认</span>
                                            <span v-if="item.status == 1">待付款</span>
                                            <span v-if="item.status == 3">已关闭</span>
                                        </span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <div class="page-infinite-loading document-index-load-tap" v-if="applyNum*10 < applyQty">
                            <mt-button size="large" type="transparent" icon="load" @click="moreApply" >点击加载更多</mt-button>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </mt-content>
</template>
<script>
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtTabContainer from '../../components/tab-container.vue'
    import MtTabContainerItem from '../../components/tab-container-item.vue'
    import MtCell from '../../components/cell.vue'
    import {getJson} from 'util'
    import $ from 'zepto'

    export default{
        route: {
            data ({to, next}) {
                let _self = this
                _self.active = ''
                //_self.selected = ''
                _self.active = to.query.active
               // _self.selected = to.query.active
                _self.bookNum = 1
                _self.applyNum = 1
                _self.getBookList()
                next()
            }
        },

        data () {
            return{
                active: '',
                //selected: '',
                bookList:[],
                applyList:[],
                bookQty:'',
                applyQty:'',
                bookNum:'',
                applyNum:''
            }
        },
        methods: {
            getBookList(){
                let _self = this
                getJson('api/telService/bookedIndex?pageIndex=1&pageSize=10', '', (rsp_book)=>{
                    _self.bookList = rsp_book.items
                    _self.bookQty = rsp_book.totalQty
                    getJson('api/telService/appliedIndex?pageIndex=1&pageSize=10', '', (rsp_apply)=>{
                        _self.applyList = rsp_apply.items
                        _self.applyQty = rsp_apply.totalQty
                    },_self)

                },_self)
            },
            moreBook(){
                let _self = this
                if(_self.bookNum*10 >= _self.bookQty) {
                    return
                }
                _self.bookNum = _self.bookNum + 1
                getJson('api/telService/bookedIndex?pageIndex='+ _self.bookNum +'&pageSize=10', '', (rsp)=>{
                    // 合并数组
                    _self.bookList = _self.bookList.concat(rsp.items)
                },_self)
            },
            moreApply(){
                let _self = this
                if(_self.applyNum*10 >= _self.applyQty) {
                    return
                }
                _self.applyNum = _self.applyNum + 1
                getJson('api/telService/appliedIndex?pageIndex='+ _self.applyNum +'&pageSize=10', '', (rsp)=>{
                    // 合并数组
                    _self.applyList = _self.applyList.concat(rsp.items)
                },_self)
            },
            lehBack () {
                $(".leh-active").removeClass('leh-active')
                this.$route.router.go({path: '/home'})
            },
            goApplyContent(id){
                //跳转申请详情页
                //$(".leh-active").removeClass('leh-active')
                window.location.href='http://wx.jk7.com/html/pay/vue_apply_v.html?id=' + id + '&isType=1';
            }
        },

        events: {
            'footer-button-event' (e) {
                $(e.target).siblings(".leh-active").removeClass('leh-active')
                $(e.target).addClass('leh-active')
            }
        },

        components: {
            MtContent,
            MtButton,
            MtTabContainer,
            MtTabContainerItem,
            MtCell
        }
    }
</script>

<style>
    .phone-index-head{height: 40px;width: 100%;overflow: hidden;position: absolute;top: 0;left: 0;z-index: 10;}
    .phone-index-head~.page-tab-container{position:absolute;top:40px;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y: auto;}
    .phone-index-head .mint-header-button{width: 10%;float: left;line-height: 40px;margin-left: 10px;margin-right: 8%}
    .phone-index-head .mint-button--default{float: left;width:31%;padding:0;margin-top:5px;height:30px;border:1px solid #fff;background-color: transparent;border-radius: 0;box-shadow: 0 0 0 transparent;}
    .phone-index-head .mint-button--default:nth-of-type(1){border-right: 0;}
    .phone-index-head .mint-button--default:nth-of-type(2){border-left: 0;margin-left: -0.5px}
    .phone-index-head .mint-button--default.leh-active{background-color: #fff;color: #1faa2b;}
    .phone-index-head .mint-button--default.leh-active .mint-button-text{color: #1faa2b;}
    .phone-index-head .mint-button--default .mint-button-text{display: block;height: 30px;line-height: 30px}
    .phone-index-head .mint-button--default:nth-of-type(1){border-bottom-left-radius: 5px;border-top-left-radius: 5px;overflow: hidden;}
    .phone-index-head .mint-button--default:nth-of-type(2){border-bottom-right-radius: 5px;border-top-right-radius: 5px;overflow: hidden;}
    .phone-index-head .mint-button--default .mint-button-text{color: #fff;}
    .phone-admin-content .mint-cell:before{left: 10px;}
    .phone-admin-content .mint-cell-text{display: block;}
    .phone-admin-content .mint-cell-text span.fr{line-height: 18px;color: #707070;}
    .phone-admin-content .leh-phone-red .mint-cell-text span.fr{color: #f02a2a;}
    .phone-admin-content .leh-phone-blue .mint-cell-text span.fr{color: #00afff;}
    .phone-admin-content .mint-cell-text span.leh-red-dot:after{right: -5px;top: -5px;}
    .phone-admin-content .mint-cell-label{color: #363636;text-align: right;}
    .phone-admin-content .mint-cell-label span.icon-wx-time,
    .phone-admin-content .mint-cell-label span:nth-of-type(2){font-size: 14px;color: #f88876;}
    .phone-admin-img{width: 49px;height: 49px;border-radius: 50%;overflow: hidden;margin-right: 10px;text-align: center;}
    .phone-admin-img img{width: 100%;min-height: 100%;height: auto}
    .document-index-load-tap .mint-button--transparent{text-align: center;}
    .document-index-load-tap .icon-wx-load{color: #e5e5e5;}
    .document-index-load-tap .mint-button-text{font-size: 14px;}
</style>
