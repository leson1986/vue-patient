<template>
    <mt-header fixed isgrey title="血制品">
        <mt-button v-link="'/user/sick'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" v-link="{path:'/user/bloodAdd',replace:true}">新增血制品</mt-button>
    </div>
    <mt-content>
	      <div class="leh-not-apply" v-if="liverTotal == 0">暂无血制品</div>
        <div class="blood-box">
            <mt-translate>
                <mt-translate-item class="blood-list" delbtn :name="items.id" v-for="items in bloodItems">
                    <a class="mint-cell">
                        <label class="mint-cell-title">
                           <span class="mint-cell-text">
                                <span class="fl">{{items.bloodType}}</span>
                                <span class="leh-c-grey leh-fs-fourteen">{{items.useCount}}ml</span>
                                <span class="fr leh-fs-fourteen">{{items.useDate}}</span>
                            </span>
                            <span class="mint-cell-label">{{items.remark}}</span>
                        </label>
                        <div class="mint-cell-value"></div>
                    </a>
                </mt-translate-item>

            </mt-translate>
            <div class="page-infinite-loading document-index-load-tap" v-if="bloodNum*8 < bloodTotal">
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
            data ({ next}) {
                this.bloodNum = 1
                this.getBloodList()
                next()
            }
        },
        data(){
            return{
                msg:'hello vue',
                ids:'',
                bloodNum: 1,
                bloodTotal:0,
                bloodItems: []
            }
        },
        methods:{

            getBloodList(){
                let _self = this
                getJson('api/bloodProduct/index?pageIndex=1&pageSize=8', '', (rsp)=>{
                    _self.bloodItems = rsp.items
                    _self.bloodTotal = rsp.totalQty
                },_self)
            },
            moreBloodList(){
                let _self = this
                if(_self.bloodNum*8 >= _self.bloodTotal) {
                    return
                }
                _self.bloodNum = _self.bloodNum + 1
                getJson('api/bloodProduct/index?pageIndex='+ _self.bloodNum +'&pageSize=8', '', (rsp)=>{
                    // 合并数组
                    _self.bloodItems = _self.bloodItems.concat(rsp.items)
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
                         // 删除
                        delJson('api/bloodProduct/'+ ids, '', (rsp)=>{
                            _self.bloodNum = 1
                            _self.getBloodList()
                        },_self)
                    }
                });
            },
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
    .blood-list.sl-li .sl-content{padding: 0;}
    .blood-list.sl-li .sl-content:after,.blood-list .mint-cell:after{border: 0;}
    .blood-list .mint-cell:before{left: 10px;}
    .blood-list .mint-cell-text{width: 100%;overflow: hidden;}
    .blood-list .mint-cell-text span:nth-of-type(1){margin-right: 10px}
    .blood-list .mint-cell-text span:nth-of-type(2){max-width: 50%;display: inline-block;word-wrap: break-word}
    .blood-list .mint-cell-label{line-height: 20px;color: #363636;}
    .document-index-load-tap .mint-button--transparent{text-align: center;}
    .document-index-load-tap .icon-wx-load{color: #e5e5e5;}
    .document-index-load-tap .mint-button-text{font-size: 14px;}
</style>
