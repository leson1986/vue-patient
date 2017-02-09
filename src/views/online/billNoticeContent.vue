<template>
    <mt-header fixed isgrey title="公告详情">
        <mt-button v-link="{path: '/online/billNotice', query: {}, replace: true}" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content>
        <div class="bill-notice-content">
            <div class="bill-notice-content-title" v-text="noticeContent.title"></div>
            <p v-text="noticeContent.content "></p>
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
                this.id = to.query.id
                this.getList(this.id)

                next()
            }
        },
        data () {
            return{
                id:'',
                noticeContent:[]
            }
        },
        methods: {
            getList(id){
                let _self = this
                getJson('api/systemNotices/info/' + id, '', (rsp)=>{
                    _self.noticeContent = rsp
                }, _self)
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
    .bill-notice-content{overflow: hidden;color: #363636;padding: 0 10px;}
    .bill-notice-content-title{font-size: 16px;max-width:260px;text-align: center;margin: 0 auto;padding:20px 0;line-height: 24px;font-weight: 700;}
    .bill-notice-content p{text-indent: 2em;font-size: 14px;line-height: 30px;}

</style>
