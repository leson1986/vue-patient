<template>
    <mt-content>
        <div class="nav phone-index-head leh-bg-green">
            <div class="mint-header-button is-left" v-link="{path: '/home', query: {}, replace: true}">
                <i class="iconfont icon-wx-arr-left leh-c-white"></i>
            </div>
            <mt-button size="small" @click.prevent="active = 'book'" :class="{'leh-active' : selected === 'book'}">预约列表</mt-button>
            <mt-button size="small" @click.prevent="active = 'apply'" :class="{'leh-active' : selected === 'apply'}">申请列表</mt-button>
        </div>
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" :active.sync="active">
                <mt-tab-container-item id="book">
                    <div class="page-cell phone-admin-content">
                        <a class="mint-cell leh-phone-blue" v-link="{path: '/online/bookContent', query: {}, replace: true}">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img src="../../assets/img/private.jpg"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span>赵医生</span>
                                        <span class="leh-fs-fourteen leh-c-grey">主任医师</span>
                                        <span class="fr leh-fs-fourteen leh-red-dot">待通话</span>
                                    </span>
                                    <span class="mint-cell-label">
                                        <span class="iconfont icon-wx-time"></span>
                                        <span>预约时间&nbsp;</span>
                                        <span>2017-12-12 12:00</span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <a class="mint-cell leh-phone-red">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img src="../../assets/img/private.jpg"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span>赵医生</span>
                                        <span class="leh-fs-fourteen leh-c-grey">主任医师</span>
                                        <span class="fr leh-fs-fourteen">已结束</span>
                                    </span>
                                    <span class="mint-cell-label">
                                        <span class="iconfont icon-wx-time"></span>
                                        <span>预约时间&nbsp;</span>
                                        <span>2017-12-12 12:00</span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="apply" :active.sync="active">
                    <div class="page-cell phone-admin-content">
                        <a class="mint-cell leh-phone-red" v-link="{path: '/online/bookApply', query: {}, replace: true}">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img src="../../assets/img/private.jpg"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span>赵医生</span>
                                        <span class="leh-fs-fourteen leh-c-grey">主任医师</span>
                                        <span class="fr leh-fs-fourteen leh-red-dot">待通话</span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <a class="mint-cell leh-phone-blue">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img src="../../assets/img/private.jpg"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span>赵医生</span>
                                        <span class="leh-fs-fourteen leh-c-grey">主任医师</span>
                                        <span class="fr leh-fs-fourteen">待付款</span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                        <a class="mint-cell">
                            <span class="mint-cell-mask">
                                <div class="phone-admin-img">
                                    <img src="../../assets/img/private.jpg"/>
                                </div>
                            </span>
                            <label class="mint-cell-title">
                                    <span class="mint-cell-text">
                                        <span>赵医生</span>
                                        <span class="leh-fs-fourteen leh-c-grey">主任医师</span>
                                        <span class="fr leh-fs-fourteen">已关闭</span>
                                    </span>
                            </label>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </mt-content>
</template>
<script>
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtField from '../../components/field.vue'
    import MtTabContainer from '../../components/tab-container.vue'
    import MtTabContainerItem from '../../components/tab-container-item.vue'
    import MtCell from '../../components/cell.vue'
    import {getJson} from 'util'
    import $ from 'zepto'

    export default{
        route: {
            data ({to, next}) {



                next()
            }
        },

        data () {
            return{
                active: 'book',
                selected: 'book',
            }
        },

        methods: {

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
            MtField,
            MtTabContainer,
            MtTabContainerItem,
            MtCell
        }
    }
</script>

<style>
    .phone-index-head{height: 40px;width: 100%;overflow: hidden;position: absolute;top: 0;left: 0;z-index: 10;}
    .phone-index-head~.page-tab-container{position:absolute;top:40px;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y: auto;}
    .phone-index-head .mint-header-button{width: 18%;float: left;line-height: 40px;margin-left: 10px;}
    .phone-index-head .mint-button--default{float: left;width:31%;padding:0;margin-top:5px;height:30px;border:1px solid #fff;background-color: transparent;border-radius: 0;box-shadow: 0 0 0 transparent;}
    .phone-index-head .mint-button--default:nth-of-type(1){border-right: 0;}
    .phone-index-head .mint-button--default:nth-of-type(2){border-left: 0;margin-left: -0.5px}
    .phone-index-head .mint-button--default.leh-active{background-color: #fff;color: #1faa2b;}
    .phone-index-head .mint-button--default.leh-active .mint-button-text{color: #1faa2b;}
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
</style>
