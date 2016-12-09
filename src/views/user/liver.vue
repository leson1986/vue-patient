<template>
    <mt-header fixed isgrey title="肝穿情况">
        <mt-button v-link="'/user/sick'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" v-link="{path:'/user/liverAdd',replace:true}">新增肝穿情况</mt-button>
    </div>
    <mt-content class="leh-bg-grey-body">
        <div class="liver-box">
            <mt-translate>
                <mt-translate-item class="liver-list" v-for="items in liverList" :name="items.id" :delbtn = "!!items.id">
                    <a class="mint-cell liver-list-title" @click="items.id =!items.id">
                        <span class="mint-cell-mask"></span>
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">
                                <span class="leh-c-grey leh-fs-fourteen fl">时间</span>
                                <span>{{items.happenTime}}</span>
                                <div class="fr">
                                    <span class="leh-c-grey leh-fs-fourteen fl">病理号</span>
                                    <span>{{items.diseaseNo}}</span>
                                </div>
                            </span>
                            <span class="mint-cell-label">
                                <span class="leh-c-grey leh-fs-fourteen fl">病理诊断</span>
                                <span class="leh-c-black">{{items.rcdResult}}</span>
                            </span>
                        </label>
                        <div class="mint-cell-value"></div>
                        <span class="iconfont" :class="{'icon-wx-arr-up':!items.id,'icon-wx-arr-down':items.id}"></span>
                    </a>
                    <div class="page-cell liver-main-list" v-if="!items.id">
                        <mt-cell title="炎症" :value="items.inflammation" istitle></mt-cell>
                        <mt-cell title="肝硬化" :value="items.fibrosis" istitle></mt-cell>
                        <mt-cell title="伴随症状" :value="items.followDisease" istitle></mt-cell>
                        <mt-cell title="备注" :value="items.remark" istitle></mt-cell>
                    </div>
                </mt-translate-item>
            </mt-translate>
            <div class="page-infinite-loading document-index-load-tap" v-if="liverNum*8 < liverTotal">
                <mt-button size="large" type="transparent" icon="load" @click="moreBloodList()" >点击加载更多</mt-button>
            </div>
        </div>
    </mt-content>
</template>
<script>
    import MtContent from '../../components/content'
    import MtHeader from '../../components/header.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'
    import MtTranslate from '../../components/translate.vue'
    import MtTranslateItem from '../../components/translateItem.vue'
    import MessageBox from 'vue-msgbox'
    import {getJson, delJson} from 'util'
    export default{
        route: {
            data ({ next}) {
                this.liverNum = 1
                this.getLiverList()
                next()
            }
        },
        data(){
            return{
                msg:'hello vue',
                ids:'',
                show_liver:false,
                liverList:[],
                liverNum:1,
                liverTotal:0
            }
        },
        methods:{
            getLiverList(){
                let _self = this
                getJson('api/liverHis/index?pageIndex=1&pageSize=8', '', (rsp, recode, msg)=>{
                    _self.liverList = rsp.items
                    _self.liverTotal = rsp.totalQty
                },_self)
            },
            msgBox (ids) {
                let _self = this
                MessageBox({
                    title: '提示',
                    message: '是否删除此数据?',
                    showCancelButton: true
                }).then(action => {

                    if(action === 'confirm'){
                        delJson('api/liverHis/'+ ids, '', (rsp)=>{
                            _self.getLiverList()
                        },_self)
                    }
                });
            },
            moreLiverList(){
                let _self = this
                if(_self.liverNum*8 >= _self.liverTotal) {
                    return
                }
                _self.liverNum = _self.liverNum + 1
                getJson('api/liverHis/index?pageIndex='+ _self.liverNum +'&pageSize=8', '', (rsp)=>{
                    // 合并数组
                    _self.liverList = _self.liverList.concat(rsp.items)
                },_self)
            }
        },
        events: {
            'handle-del' (e) {
                this.ids = $(e.target).attr('id')
                this.msgBox(this.ids)
            }
        },
        components:{
            MtContent,
            MtHeader,
            MtButton,
            MtTranslate,
            MtTranslateItem,
            MtCell
        }
    }
</script>

<style>
    .liver-list{margin-bottom: 8px;}
    .liver-list .sl-content{padding: 0;}
    .liver-list-title:after,
    .liver-list-title:before,
    .liver-list .sl-content:after{border: 0;}
    .liver-main-list .mint-cell:not(1):after{border: 0;}
    .liver-main-list .mint-cell:nth-last-of-type(1):before{border: 0;}
    .liver-main-list .mint-cell:after,.liver-main-list .mint-cell:before{left: 10px;}
    .liver-list .icon-wx-arr-up,.liver-list .icon-wx-arr-down{color: #aaa;margin-left: 15px;}
    .liver-list-title .mint-cell-text{display:block;overflow: hidden;border-bottom: 1px solid #e5e5e5;margin-bottom: 10px;padding-bottom:15px;}
    .liver-list-title span.fl{margin-right: 8px;}
    .liver-main-list .mint-cell{background-color: #f6f6f6;}
    .liver-main-list .mint-cell-text{font-size: 14px;color: #919191;display: inline-block;width: 60px}
    .liver-main-list .mint-cell-value{flex:5;font-size: 14px;color: #363636;padding-left: 8px;line-height: 20px}
    .document-index-load-tap .mint-button--transparent{text-align: center;}
    .document-index-load-tap .icon-wx-load{color: #e5e5e5;}
    .document-index-load-tap .mint-button-text{font-size: 14px;}
</style>
