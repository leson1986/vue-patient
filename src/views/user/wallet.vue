<template>
    <mt-header fixed isgrey title="我的钱包">
        <mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content class="leh-bg-grey-body">
        <div class="page-cell wallet-list">
            <mt-cell title="我的订单" icon="bill" icons="arr-right" istitle is-icon v-link="{path: '/user/order', replace: true}"></mt-cell>
            <!--<mt-cell title="我的优惠卷" icon="cheap" icons="arr-right" istitle is-icon v-link="{path:'',replaec:true}"></mt-cell>-->
            <mt-cell title="购买记录" icon="meal" icons="arr-right" istitle is-icon v-link="{path:'/user/buy',replaec:true}"></mt-cell>
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
                msg:'hello vue'
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
    .wallet-list .mint-cell:after,.wallet-list .mint-cell:nth-last-of-type(1):before{border: 0;}
    .wallet-list .mint-cell:before{left: 10px;}
    .wallet-list .icon-wx-bill,
    .wallet-list .icon-wx-cheap,
    .wallet-list .icon-wx-meal{font-size: 16px;float: left;margin-right: 8px;}
    .wallet-list .icon-wx-bill{color: #7ac9ff;}
    .wallet-list .icon-wx-cheap{color:#ff9992;}
    .wallet-list .icon-wx-meal{color:#ffb67f;}
</style>
