<template>
    <mt-header fixed isgrey title="我的订单">
        <mt-button v-link="'/user/wallet'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content :class="{'leh-bg-grey-body':!orderIf}">
        <div class="bill-title">
            <ul>
                <li class="bill-title-list">
                    <p>¥ {{payNum}}</p>
                    <span>支出</span>
                </li>
                <li class="bill-title-list">
                    <p>¥ {{takeNum}}</p>
                    <span>收入</span>
                </li>
            </ul>
        </div>
        <div class="bill-content">
            <div class="leh-null-data" v-if="orderIf">暂无订单数据</div>
            <ul v-if="!orderIf">
                <li class="bill-content-list">
                    <div class="page-cell">
                        <a class="mint-cell">
                            <label class="mint-cell-title">
                                <span class="mint-cell-text leh-fs-fourteen">在线问诊</span>
                            </label>
                            <div class="mint-cell-value">
                                <span class="leh-c-orange-tint leh-fs-fourteen">支付成功</span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <label class="mint-cell-title">
									<span class="mint-cell-text">
										<span>高志良</span>
										<span class="leh-c-black fr">¥145.5</span>
									</span>
									<span class="mint-cell-label" style="display: none;">
										<span class="fr">优惠券：¥10</span>
										<span class="fr iconfont icon-wx-pack"></span>
									</span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <label class="mint-cell-title">
									<span class="mint-cell-text">
										<p>创建时间：2015-12-05 09:00</p>
										<p v-if="true">支付时间：2015-12-07 12:30</p>
									</span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="bill-content-list">
                    <div class="page-cell">
                        <a class="mint-cell">
                            <label class="mint-cell-title">
                                <span class="mint-cell-text leh-fs-fourteen">在线问诊</span>
                            </label>
                            <div class="mint-cell-value">
                                <span class="leh-c-orange-tint leh-fs-fourteen">待支付</span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <label class="mint-cell-title">
									<span class="mint-cell-text">
										<span>高志良</span>
										<span class="leh-c-black fr">¥145.5</span>
									</span>
									<span class="mint-cell-label" v-if="">
										<span class="fr">优惠券：¥10</span>
										<span class="fr iconfont icon-wx-pack"></span>
									</span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <label class="mint-cell-title">
									<span class="mint-cell-text">
										<p>创建时间：2015-12-05 09:00</p>
                                        <p v-if=""></p>
									</span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="bill-content-list">
                    <div class="page-cell">
                        <a class="mint-cell">
                            <label class="mint-cell-title">
                                <span class="mint-cell-text leh-fs-fourteen">在线问诊</span>
                            </label>
                            <div class="mint-cell-value">
                                <span class="leh-c-orange-tint leh-fs-fourteen">已关闭</span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <label class="mint-cell-title">
									<span class="mint-cell-text">
										<span>高志良</span>
										<span class="leh-c-black fr">¥145.5</span>
									</span>
									<span class="mint-cell-label" v-if="">
										<span class="fr">优惠券：¥10</span>
										<span class="fr iconfont icon-wx-pack"></span>
									</span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <label class="mint-cell-title">
									<span class="mint-cell-text">
										<p>创建时间：2015-12-05 09:00</p>
                                        <p v-if=""></p>
									</span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </li>

            </ul>
        </div>
    </mt-content>
</template>
<script>
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'

    export default{
        route: {
            data ({to, next}) {
                if(!this.orderIf){
                    this.payNum = '100.00'
                    this.takeNum = '50.00'
                }

                next()
            }
        },
        data () {
            return{
                msg:'hello vue',
                orderIf:false,
                payNum:"0.00",
                takeNum:"0.00",
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
    .bill-content-list .mint-cell:after,
    .bill-content-list .mint-cell:nth-last-of-type(1):before,
    .bill-title-list:nth-of-type(1){border: 0;}
    .bill-content-list .mint-cell:before{left: 0;}
    .bill-title{padding: 12px 0;overflow: hidden;background-color: #f0f0f0}
    .bill-title-list{float: left;width: 50%;border-left: 1px solid #aaa;text-align: center;}
    .bill-title-list p{font-size: 16px;}
    .bill-title-list span{font-size: 12px;color: #a9a9a9;}
    .bill-content-list{margin-bottom: 10px;}
    .bill-content-list:nth-last-of-type(1){margin-bottom: 0;}
    .bill-content-list .mint-cell-text p{font-size: 12px;}
    .bill-content-list .mint-cell-text p:nth-of-type(even){margin-top: 10px;}
    .bill-content-list .mint-cell-label{margin-top: 8px;color: #363636;}
    .bill-content-list .mint-cell-label .icon-wx-pack{font-size: 20px;line-height: 14px;margin-right: 8px;color: #ffc040;}

</style>
