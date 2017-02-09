<template>
    <mt-header fixed isgrey title="公告列表">
        <mt-button v-link="{path: '/home', query: {}, replace: true}" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content>
        <div class="page-cell bill-notice-list">
            <a class="mint-cell" v-for="items in noticeList" v-link="{path: '/online/billNoticeContent', query: {id:items.id}, replace: true}">
                <label class="mint-cell-title" :class="{'leh-red-dot': items.unread}">
                    <span class="mint-cell-text" v-text="items.title"></span>
                    <span class="mint-cell-label" v-text="items.createTime"></span>
                </label>
                <div class="mint-cell-value"></div>
            </a>
        </div>
        <div class="page-infinite-loading document-index-load-tap" v-if="noticeNum*8 < noticeTotalQty">
            <mt-button size="large" type="transparent" icon="load" @click="moreNoticeList()" >点击加载更多</mt-button>
        </div>
    </mt-content>

</template>
<script>
    import MtContent from '../../components/content'
    import MtHeader from '../../components/header.vue'
    import MtButton from '../../components/button.vue'
    import {getJson} from 'util'


    export default{
        route: {
            data ({to, next}) {
                this.noticeNum = 1
                this.getNoticeList()

                next()
            }
        },
        data () {
            return{
                noticeTotalQty:0, //公告总数
                noticeList:[],
                noticeNum:1,
            }
        },
        methods: {
            getNoticeList(){
                let _self = this
                getJson('api/systemNotices/index?pageIndex=1&pageSize=8', '', (rsp)=>{
                    _self.noticeTotalQty = rsp.totalQty
                    _self.noticeList = rsp.items
                }, _self)
            },
            moreNoticeList () {
                let _self = this
                if(_self.noticeNum*8 >= _self.noticeTotalQty) {
                    return
                }
                _self.noticeNum = _self.noticeNum + 1
                getJson('api/systemNotices/index?pageIndex='+ _self.noticeNum +'&pageSize=8', '', (rsp)=>{

                    // 合并数组
                    _self.noticeList = _self.noticeList.concat(rsp.items)
            },_self)
            }
        },

        components: {
            MtContent,
            MtHeader,
            MtButton
        }
    }
</script>

<style>
    .bill-notice-list .mint-cell:after{border: 0;}
    .bill-notice-list .mint-cell:before{left: 0;}
    .bill-notice-list .mint-cell{margin-bottom: 8px;}
    .bill-notice-list .mint-cell-label{text-align: right;color: #363636;font-size: 12px;margin-top: 10px;}
    .bill-notice-list .mint-cell-text{line-height: 24px;font-size: 14px;max-width: 210px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;display: inline-block;}
    .bill-notice-list .mint-cell-title.leh-red-dot:after{right: 0px;top: 6px;}

    .document-index-load-tap .mint-button--transparent{text-align: center;}
    .document-index-load-tap .icon-wx-load{color: #e5e5e5;}
    .document-index-load-tap .mint-button-text{font-size: 14px;}
    .document-index-title .mint-cell-value .icon-wx-arr-right{margin-left: 5px}
</style>
