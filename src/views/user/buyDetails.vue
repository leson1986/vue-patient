<template>
    <mt-header fixed isgrey :title="docName">
        <mt-button v-link="'/user/buy'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content class="leh-bg-grey-body">
        <div class="page-cell buy-details-title">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text">剩余条数</span>
                </label>
                <div class="mint-cell-value">
                    <span>9</span>
                </div>
            </a>
        </div>
        <div class="leh-null-data" v-if="0">暂无购买记录</div>
        <div v-if="1">
            <div class="mint-navbar buy-details-tap-bar">
                <a class="mint-tab-item" @click.prevent="selected = 'used'" :class="{'is-selected' : selected === 'used'}">
                    <div class="mint-tab-item-icon"></div>
                    <div class="mint-tab-item-label">已使用</div>
                </a>
                <a class="mint-tab-item" @click.prevent="selected = 'buy'" :class="{'is-selected' : selected === 'buy'}">
                    <div class="mint-tab-item-icon"></div>
                    <div class="mint-tab-item-label">已购买</div>
                </a>
            </div>
            <div class="mint-tab-container buy-details-tap-content">
                <mt-tab-container class="mint-tab-container-wrap" :active.sync="selected">
                    <mt-tab-container-item id="used">
                        <a class="mint-cell">
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">2017年</span>
                                    <div class="mimt-cell-label">
                                        <ul>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">02-10</span>
                                                <span class="fr">-10</span>
                                            </li>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">01-05</span>
                                                <span class="fr">-1</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mint-cell-value"><span></span></div>
                            </div>
                            <div class="mint-cell-right"></div>
                        </a>
                        <a class="mint-cell">
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">2016年</span>
                                    <div class="mimt-cell-label">
                                        <ul>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">02-10</span>
                                                <span class="fr">-10</span>
                                            </li>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">01-05</span>
                                                <span class="fr">-1</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mint-cell-value"><span></span></div>
                            </div>
                            <div class="mint-cell-right"></div>
                        </a>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="buy">
                        <a class="mint-cell">
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">2017年</span>
                                    <div class="mimt-cell-label">
                                        <ul>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">02-10</span>
                                                <span class="fr">+10</span>
                                            </li>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">01-05</span>
                                                <span class="fr">+1</span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="mint-cell-value"><span></span></div>
                            </div>
                            <div class="mint-cell-right"></div>
                        </a>
                        <a class="mint-cell">
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <span class="mint-cell-text">2016年</span>
                                    <div class="mimt-cell-label">
                                        <ul>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">02-10</span>
                                                <span class="fr">+10</span>
                                            </li>
                                            <li class="buy-details-tap-list">
                                                <span class="fl">01-05</span>
                                                <span class="fr">+1</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mint-cell-value"><span></span></div>
                            </div>
                            <div class="mint-cell-right"></div>
                        </a>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </mt-content>
</template>
<script>
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'
    import MtTabContainer from '../../components/tab-container.vue'
    import MtTabContainerItem from '../../components/tab-container-item.vue'
    import MtTabItem from "../../components/tab-item.vue"
    import MtTabbar from '../../components/tabbar.vue'
    import $ from 'zepto'
    export default{
        route: {
            data ({ to,next}) {
                this.docName = to.query.docName
                next()
            }
        },
        data () {
            return{
                selected: 'used',
                docName:''
            }
        },
        ready(){
            let bdH = $(window).height() - "148"
            $('.mint-tab-container-wrap').height(bdH)
        },
        components: {
            MtHeader,
            MtContent,
            MtButton,
            MtTabContainer,
            MtTabContainerItem,
            MtTabItem,
            MtCell
        }
    }
</script>

<style>
    .buy-details-title .mint-cell:after,
    .buy-details-title .mint-cell:before,
    .buy-details-tap-content .mint-cell:after,
    .buy-details-tap-content .mint-cell:before{border: 0;}
    .buy-details-title{margin-bottom: 10px;}
    .buy-details-title .mint-cell span{color: #1faa2b;}
    .buy-details-tap-bar .mint-tab-item.is-selected{position: relative;z-index: 2;border-bottom-color: #1faa2b;}
    .buy-details-tap-bar .mint-tab-item.is-selected .mint-tab-item-label{color: #1faa2b;}
    .buy-details-tap-bar{border-bottom: 1px solid #e5e5e5;}
    .buy-details-tap-content .mint-tab-container-wrap{top:0px;bottom: 0;overflow-x: hidden;overflow-y: auto;width: 100%;}
    .buy-details-tap-content .mint-cell{padding-right: 0;margin-bottom: 10px;line-height: 1.5}
    .buy-details-tap-content .mint-cell:nth-last-of-type(1){margin-bottom: 0;}
    .buy-details-tap-content .mint-cell-text{color: #1dadfe;padding: 10px 0 15px}
    .buy-details-tap-content .mint-cell-wrapper{width: 100%;}
    .buy-details-tap-content .buy-details-tap-list{overflow: hidden;padding: 12px 0;border-bottom: 1px solid #e5e5e5;padding-right: 10px;}
    .buy-details-tap-content .buy-details-tap-list:nth-last-of-type(1){padding-bottom: 0;border-bottom: 0;}
    .buy-details-tap-bar .mint-tab-item-label{font-size: 14px}
</style>
