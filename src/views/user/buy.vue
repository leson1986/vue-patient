<template>
    <mt-header fixed isgrey title="购买记录">
        <mt-button v-link="'/user/wallet'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content class="leh-bg-grey-body">
        <div class="leh-null-data" v-if="docNameList.length == 0">暂无购买记录</div>
        <div class="page-cell buy-list" v-if="docNameList.length != 0">
            <mt-cell :title="items.name" icons="arr-right" istitle is-icon v-link="{path: '/user/buyDetails', replace: true,query:{'docName':items.name,'id':items.id}}" v-for="items in docNameList"></mt-cell>
        </div>
        <div class="page-infinite-loading document-index-load-tap" v-if="docNum*10 < docQty">
            <mt-button size="large" type="transparent" icon="load" @click="moreDocNameList()" >点击加载更多</mt-button>
        </div>
    </mt-content>
</template>
<script>
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'
    import {getJson} from 'util'

    export default{
        route: {
            data ({to, next}) {
               this.getDocNameList()
                next()
            }
        },
        data () {
            return{
                docNameList:[],
                docQty:'',
                docNum:1
            }
        },
        methods:{
            getDocNameList(){
                let _self = this
                getJson('api/msgOrderService/purchaseIndex?pageindex=1&pagesize=10','',(rsp)=>{
                    //列表
                    _self.docNameList = rsp.items
                    _self.docQty = rsp.totalQty
                },_self)
            },
            moreDocNameList(){
                let _self = this
                if(_self.docNum*10 >= _self.docQty) {
                    return
                }
                _self.docNum = _self.docNum + 1
                getJson('api/msgOrderService/purchaseIndex?pageindex=' +_self.docNum +'&pagesize=10','',(rsp)=>{
                    // 合并数组
                    _self.docNameList = _self.docNameList.concat(rsp.items)
                },_self)
            }
        },
        components: {
            MtHeader,
            MtContent,
            MtButton,
            MtCell
        }
    }
</script>

<style>
    .buy-list .mint-cell:after,.buy-list .mint-cell:nth-last-of-type(1):before{border: 0;}
    .buy-list .mint-cell{font-size: 14px;}
    .buy-list .mint-cell .icon-wx-arr-right{color: #bfbfbf;font-size: 12px;}

    .document-index-load-tap .mint-button--transparent{text-align: center;}
    .document-index-load-tap .icon-wx-load{color: #e5e5e5;}
    .document-index-load-tap .mint-button-text{font-size: 14px;}
</style>
