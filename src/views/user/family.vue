<template>
    <mt-header fixed isgrey title="家族病史">
        <mt-button v-link="'/user/sick'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" v-link="{path:'/user/familyAdd',replace:true}">新增家族病史</mt-button>
    </div>
    <mt-content class="leh-bg-grey-body">
        <!--无列表-->
        <div class="leh-not-apply" v-if="">暂无家族病史</div>
        <!--有列表-->
        <div class="family-box">
            <mt-translate>
                <mt-translate-item class="family-list" delbtn :name="items.id" v-for="items in familyList">
                    <a class="mint-cell">
                        <label class="mint-cell-title">
                                <span class="mint-cell-text">
                                    <span class="fl">{{items.relation}}</span>
                                    <span class="fr">{{items.disease}}</span>
                                </span>
                            <span class="mint-cell-label">{{items.remark}}</span>
                        </label>
                        <div class="mint-cell-value"></div>
                    </a>
                </mt-translate-item>
            </mt-translate>
            <div class="page-infinite-loading document-index-load-tap" v-if="familyNum*8 < familyTotal">
                <mt-button size="large" type="transparent" icon="load" @click="moreBloodList()" >点击加载更多</mt-button>
            </div>
        </div>
    </mt-content>
</template>
<script>
    import MtContent from '../../components/content'
    import MtHeader from '../../components/header.vue'
    import MtButton from '../../components/button.vue'
    import MtTranslate from '../../components/translate.vue'
    import MtTranslateItem from '../../components/translateItem.vue'
    import MessageBox from 'vue-msgbox'
    import {getJson, delJson} from 'util'
    export default{
        route: {
            data ({ to, next}) {
                this.familyNum = 1
                this.getFamilyList()
                next()
            }
        },
        data(){
            return{
                msg:'hello vue',
                ids:'',
                familyNum:1,
                familyTotal:0,
                familyList:[]
            }
        },
        methods:{
            msgBox (ids) {
                let _self = this
                MessageBox({
                    title: '提示',
                    message: '是否删除此数据?',
                    showCancelButton: true
                }).then(action => {
                    if(action === 'confirm'){
                        // 删除
                        delJson('api/familyHis/'+ ids, '', (rsp)=>{
                            _self.getFamilyList()
                        },_self)
                    }
                });
            },
            getFamilyList (){
                let _self = this
                getJson('api/familyHis/index?pageIndex=1&pageSize=8', '', (rsp, recode, msg)=>{
                    _self.familyList = rsp.items
                    _self.familyTotal = rsp.totalQty
                },_self)
            },
            moreBloodList(){
                let _self = this

                if(_self.familyNum*8 >= _self.familyTotal) {
                    return
                }
                _self.familyNum = _self.familyNum + 1
                getJson('api/familyHis/index?pageIndex='+ _self.familyNum +'&pageSize=8', '', (rsp)=>{
                    // 合并数组
                    _self.familyList = _self.familyList.concat(rsp.items)
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
            MtTranslateItem
        }
    }
</script>

<style>
    .family-list{margin-bottom: 8px;}
    .family-list.sl-li .sl-content{padding: 0;}
    .family-list.sl-li .sl-content:after,
    .family-list .mint-cell:after,
    .family-list .mint-cell:before{border: 0;}
    .family-list .mint-cell-text{display: block;overflow: hidden;color: #363636}
    .family-list .mint-cell-label{line-height: 20px;color: #919191;}
    .family-list .mint-cell-text span.fr{font-size: 14px}
    .document-index-load-tap .mint-button--transparent{text-align: center;}
    .document-index-load-tap .icon-wx-load{color: #e5e5e5;}
    .document-index-load-tap .mint-button-text{font-size: 14px;}
</style>
