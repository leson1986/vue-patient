<template>
    <mt-header fixed isgrey title="购买记录">
        <mt-button v-link="'/user/wallet'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content class="leh-bg-grey-body">
        <div class="leh-null-data" v-if="0">暂无购买记录</div>
        <div class="page-cell buy-list" v-if="1">
            <mt-cell :title="items" icons="arr-right" istitle is-icon v-link="{path: '/user/buyDetails', replace: true,query:{'docName':items}}" v-for="items in docName"></mt-cell>
        </div>
    </mt-content>
</template>
<script>
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'

    export default{
        data () {
            return{
                msg:'hello vue',
                docName:['罗医生','黄医生','陈医生']
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

</style>
