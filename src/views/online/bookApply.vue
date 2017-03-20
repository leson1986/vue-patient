<template>
    <mt-header fixed title="申请详情" isgrey>
        <mt-button v-link="{path: '/online/book', query: {}, replace: true}" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="grey" v-if>预约待确认</mt-button>
        <button class="mint-button mint-button--blue mint-button--large">
            <div class="will-pay-tip">
                <span class="iconfont icon-wx-will-pay"></span>
                <span>待支付：50.00元</span>
            </div>
            <label class="mint-button-text">付款</label>
        </button>
    </div>
    <mt-content>
        <div class="apply-tip-box">
            <p style="display: none;">本次通话已结束，结束时间为：2017-03-15 10:00</p>
            <p>预约成功，时间为：2017-03-10 09:00</p>
        </div>
        <div class="page-cell apply-title-box">
            <a class="mint-cell">
					<span class="mint-cell-mask">
						<div class="apply-img">
							<img src="../../assets/img/private.jpg"/>
						</div>
					</span>
                <div class="mint-cell-title">
						<span class="mint-cell-text">
							<span class="leh-fs-sixteen">高志良</span>
							<span class="leh-fs-twelve leh-c-grey">主任医师</span>
							<span class="leh-fs-fourteen fr"><span class="leh-c-blue-strong">50.00</span> 元/次</span>
						</span>
						<span class="mint-cell-label leh-c-black">
							<span class="leh-c-grey">南方医科大学南方医院</span>
							<span class="fr">通话10分钟</span>
						</span>
                </div>
                <div class="mint-cell-value"></div>
            </a>
        </div>
        <div class="page-cell apply-call-ipt-box">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">接听人电话<span class="leh-c-red"> *</span></span>
                    <span class="mint-cell-label leh-c-black">13500121212</span>
                </label>
                <div class="mint-cell-value"></div>
            </a>
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">病情描述<span class="leh-c-red"> *</span></span>
                    <span class="mint-cell-label leh-c-black">撒娇打开就爱看奥斯卡很大声卡哈萨克带回家看回到家卡上抠脚大汉看紧生得好快叫啊客户端看</span>
                </label>
                <div class="mint-cell-value"></div>
            </a>
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">相关图片</span>
                </label>
                <div class="mint-cell-value"></div>
            </a>
        </div>
        <div class="apply-call-tap-box">
            <div class="apply-call-tap">
                <mt-picture>
                    <mt-pic-list @click="showPic(items.url, items.id)">
                        <img src="../../assets/img/private.jpg"/>
                    </mt-pic-list>
                    <mt-pic-list @click="showPic(items.url, items.id)">
                        <img src="../../assets/img/private.jpg"/>
                    </mt-pic-list>
                    <mt-pic-list @click="showPic(items.url, items.id)">
                        <img src="../../assets/img/private.jpg"/>
                    </mt-pic-list>
                </mt-picture>
            </div>
        </div>
        <div class="page-cell apply-call-ipt-box">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">温馨提示</span>
                    <div class="mint-cell-label">
                        <p>1. 预约确认通过后，用户需在距预约时间10分钟前进行付款，否则付款将会关闭。</p>
                        <p>2. 付款成功后，用户需在预约时间前后保持电话通畅，以免联系不到。</p>
                        <p>3. 电话通话前，用户将接到400-966-8838。</p>
                    </div>
                </label>
                <div class="mint-cell-value"></div>
            </a>
        </div>
    </mt-content>
</template>
<script>
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'
    import MtPicture from '../../components/picture.vue'
    import MtPicList from '../../components/picList.vue'
    import {getJson,wrapPic} from 'util'
    import $ from 'zepto'

    export default{
        route: {
            data ({to, next}) {


                next()
            }
        },

        data () {
            return{
                bookTip:'预约已付款'
            }
        },

        methods: {
            showPic (urls, ids){
                let _self = this
                wrapPic(urls, '手写病历') // 查看图片

            },
        },


        components: {
            MtHeader,
            MtContent,
            MtButton,
            MtCell,
            MtPicture,
            MtPicList
        }
    }
</script>

<style>
    .apply-call-ipt-box {overflow: hidden;}
    .apply-call-ipt-box .mint-cell{padding-bottom: 10px;overflow: visible;}
    .apply-call-ipt-box .mint-cell:before{transform:scaleY(1)}
    .apply-call-ipt-box .mint-cell:after,.apply-call-ipt-box .mint-cell:nth-last-of-type(1):before{border: 0;}
    .apply-call-ipt-box .mint-cell:before,.apply-title-box .mint-cell:before{left: 10px;}
    .apply-call-ipt-box .mint-cell .mint-cell-value span{padding-left: 10px;color: #aaa;}
    .apply-call-ipt-box .mint-cell-label p{color: #363636;line-height: 22px;margin-bottom: 5px;}
    .apply-title-box .mint-cell:after{display: none;}
    .apply-img{width: 50px;height: 50px;border-radius: 50%;overflow:hidden;margin:0 10px;text-align: center;}
    .apply-img img{width: 100%;min-height: 100%;height: auto}
    .apply-title-box .mint-cell-label{font-size: 14px;}
    .apply-title-box .mint-cell-label span:nth-of-type(1){max-width: 65%;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;display: inline-block;}
    .apply-title-box .mint-cell-label span:nth-of-type(2){max-width: 35%;}
    .apply-title-box .mint-cell-text span.fr{line-height: 20px;}
    .apply-call-tap .weui_cell{padding-left: 0;}
    .apply-call-tap .weui_cells{margin-top: 0;}
    .apply-call-tap .weui_cells:before,.apply-call-tap .weui_cells:after{border: 0;}
    .apply-call-select-doc{margin-top:10px;font-size: 16px;height: 18px;line-height: 18px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap}
    .apply-call-tap-box{padding: 10px 10px 20px 0;border-bottom: 1px solid #e5e5e5;margin-left: 10px;}
    .apply-call-tap-box .weui_uploader_file{margin-right: 20px;margin-bottom: 0;}
    .apply-call-tap-box .weui_uploader_input_wrp{margin-top: 20px !important;margin-left: 20px;}
    .apply-call-tap-box .weui_uploader_input_wrp.leh-ex{margin: 0 auto !important;float: inherit;}
    .apply-call-ipt-box .mint-cell-label.leh-c-black{line-height: 22px;}
    .will-pay-tip{width: 65%;height:40px;line-height:35px;background-color: #fff;border: 2px solid #1e94f4;box-sizing: border-box;color: #1e94f4;}
    .will-pay-tip~.mint-button-text{width: 35%;position: absolute;right: 0;top: 0;font-size: 14px;}
    .will-pay-tip span.icon-wx-will-pay{font-size: 20px;position: relative;top: 3px;margin-right: 4px;}
    .will-pay-tip span{font-size: 14px;}
    .apply-tip-box{padding: 10px 0;background-color: #fffad4;text-align: center;margin: 0 auto;}
    .apply-tip-box p{max-width: 80%;display: inline-block;line-height: 22px;font-size: 14px;color: #f77a66;}

</style>
