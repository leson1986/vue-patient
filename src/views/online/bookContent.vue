<template>
    <mt-header fixed title="预约详情" isgrey>
            <mt-button v-link="{path: from_path ,query:{active:'book'}, replace: true}" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="grey"><span class="book-phone-btn" :class="{'leh-c-red':doctorContent.status == 4,'leh-c-black':doctorContent.status == 2}"><span class="iconfont icon-wx-take" v-if="doctorContent.status == 2"></span>{{bookTip}}</span></mt-button>
    </div>
    <mt-content>
        <div class="apply-tip-box">
            <p v-if="doctorContent.status == 4">本次通话已结束，结束时间为：<br>{{doctorContent.serviceDate}} {{doctorContent.serviceTime}}</p>
            <p v-if="doctorContent.status == 2">预约成功，时间为：<br>{{doctorContent.serviceDate}} {{doctorContent.serviceTime}}</p>
        </div>
        <div class="page-cell apply-title-box">
            <a class="mint-cell">
					<span class="mint-cell-mask">
						<div class="apply-img">
							<img :src="doctorContent.drPhoto"/>
						</div>
					</span>
                <div class="mint-cell-title">
						<span class="mint-cell-text">
							<span class="leh-fs-sixteen" v-text="doctorContent.drName"></span>
							<span class="leh-fs-fourteen leh-c-grey" v-text="doctorContent.drTitle"></span>
							<span class="leh-fs-fourteen fr"><span class="leh-c-blue-strong"  v-text="doctorContent.price"></span> 元/次</span>
						</span>
						<span class="mint-cell-label leh-c-black">
							<span class="leh-c-grey" v-text="doctorContent.hosipital"></span>
							<span class="fr">通话{{doctorContent.duration}}分钟</span>
						</span>
                </div>
                <div class="mint-cell-value"></div>
            </a>
        </div>
        <div class="page-cell apply-call-ipt-box">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">接听人电话<span class="leh-c-red"> *</span></span>
                    <span class="mint-cell-label leh-c-black" v-text="doctorContent.tel"></span>
                </label>
                <div class="mint-cell-value"></div>
            </a>
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">病情描述<span class="leh-c-red"> *</span></span>
                    <span class="mint-cell-label leh-c-black" v-text="doctorContent.diseaseDecription"></span>
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
        <div class="book-not-pic" v-if="doctorContent.photos.length == 0">暂无图片</div>
        <div class="apply-call-tap-box" v-else>
            <div class="apply-call-tap">
                <mt-picture>
                    <mt-pic-list v-for="items in doctorContent.photos" @click="showPic()">
                        <img :src="items"/>
                    </mt-pic-list>
                </mt-picture>
            </div>
        </div>
        <div class="page-cell apply-call-ipt-box">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">温馨提示</span>
                    <div class="mint-cell-label">
                        <p>1. 预约确认通过后，用户需在距预约时间的30分钟前进行付款，否则付款将会关闭。</p>
                        <p>2. 付款成功后，用户需在预约时间前后保持电话通畅，以免联系不到。</p>
                        <p>3. 通话开始前，您将接到400-966-8838或02126125797，此号码将是接通您和医生的第三方号码，请勿拒接。</p>
                    </div>
                </label>
                <div class="mint-cell-value"></div>
            </a>
        </div>
    </mt-content>
    <!-- 用于展示插件的容器 -->
    <div class="overlay" id="overlay"></div>
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
            data ({from, to, next}) {
                let _self = this
                _self.drId = to.query.id
                _self.from_path = from.path
                _self.getBookContent(_self.drId)
                next()
            }
        },

        data () {
            return{
                bookTip:'',
                drId:'',
                from_path:'',
                bookStaue:'',
                doctorContent:'',
                bookTime:''
            }
        },

        methods: {
            getBookContent(id){
                let _self = this
                getJson('/api/telService/info?id=' + id, '', (rsp)=>{
                    _self.doctorContent = rsp
                    if(_self.doctorContent.status == 4){
                        _self.bookTip = '通话已结束'
                    }else if(_self.doctorContent.status == 2){
                        _self.bookTip = '预约已付款'
                    }
                },_self)
            },
            showPic (){
                let _self = this
                wrapPic(_self.doctorContent.photos, '预约详情') // 查看图片
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
    @import '../../assets/css/normalize.css';
    @import '../../assets/css/MPreview.mobile.css';
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
    .apply-call-ipt-box .mint-cell-label.leh-c-black{line-height: 22px;overflow: hidden;width: 100%;word-wrap: break-word;word-break: break-all;}
    .apply-tip-box{padding: 10px 0;background-color: #fffad4;text-align: center;margin: 0 auto;}
    .apply-tip-box p{max-width: 80%;display: inline-block;line-height: 22px;font-size: 14px;color: #f77a66;}
    .book-not-pic{border-bottom:1px solid #e5e5e5;margin-left:10px;padding-bottom:10px}

    .book-phone-btn{position: relative;}
    .book-phone-btn .icon-wx-take{position: absolute;left: -30px;top:50%;margin-top:-10px;background-color:#39b042;height: 20px;width: 20px;line-height: 20px;text-align: center;font-size: 12px;color: #bababa;border-radius: 50px;}

</style>
