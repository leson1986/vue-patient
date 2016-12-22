<template>
    <mt-header fixed isgrey title="生活行为习惯">
        <mt-button  @click="msgBox" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" @click="saveBehavior()">保存</mt-button>
    </div>
    <mt-content>
        <div class="page-cell behavior-box">
            <a class="mint-cell" @click="isDrink = !isDrink">
                <span class="mint-cell-mask"></span>
                <label class="mint-cell-title">
                    <span class="mint-cell-text">是否饮酒</span>
                </label>
                <div class="mint-cell-value">
                    <span class="leh-fs-fourteen leh-c-green" v-if="isDrink">是</span>
                    <span class="leh-fs-fourteen leh-c-green" v-else>否</span>
                </div>
                <span class="iconfont" :class="{'icon-wx-arr-up':isDrink,'icon-wx-arr-down':!isDrink}"></span>
            </a>
            <div class="page-part behavior-main-box" v-show="isDrink">
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell" v-link="{path:'/user/variety', query:{'drink' : true,'fishType':fishText,'drinkType':wineText} ,replace:true}">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">品种</span>
                        </label>
                        <div class="mint-cell-value">
                            <p class="leh-text-ellipsis" v-text="wineText"></p>
                            <span class="iconfont icon-wx-arr-right"></span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">年限</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入饮酒年限" type="text" maxlength="5" v-model='drinkAge' onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">年</span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">平均次数</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入每周饮酒次数" type="text" maxlength="9" v-model="drinkAvgTime" onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">次/周</span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">平均数量</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入每周饮酒数量" type="text" maxlength="10" v-model="drinkPer" onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">两/次</span>
                        </div>
                    </a>
                </div>
            </div>
            <a class="mint-cell" @click="isSmoke = !isSmoke">
                <span class="mint-cell-mask"></span>
                <label class="mint-cell-title">
                    <span class="mint-cell-text">是否抽烟</span>
                </label>
                <div class="mint-cell-value">
                    <span class="leh-fs-fourteen leh-c-green" v-if="isSmoke">是</span>
                    <span class="leh-fs-fourteen leh-c-green" v-else>否</span>
                </div>
                <span class="iconfont" :class="{'icon-wx-arr-up':isSmoke,'icon-wx-arr-down':!isSmoke}"></span>
            </a>
            <div class="page-part behavior-main-box" v-show="isSmoke">
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">年限</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入抽烟年限" type="text" maxlength="5" v-model="smokeAge" onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">年</span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">平均数量</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入每周抽烟数量" type="text" maxlength="5" v-model="smokeAvg" onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">两/次</span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell leh-ex">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">是否已戒烟</span>
                        </label>
                        <div class="mint-cell-value">
                            <p class="leh-text-ellipsis" @click="show_if = !show_if" v-text="ifName"></p>
                            <ul class="leh-select-drag-box" v-if="show_if">
                                <li @click="getName('是',true)">是</li>
                                <li @click="getName('否',false)">否</li>
                            </ul>
                            <span class="iconfont icon-wx-arr-down"></span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">备注</span>
                        </label>
                        <div class="mint-cell-value">
                            <textarea class="msg-val" placeholder="请输入其他备忘内容" maxlength="100" v-model="msg_val"></textarea>
                        </div>
                    </a>
                </div>
            </div>
            <a class="mint-cell" @click="isFish = !isFish">
                <span class="mint-cell-mask"></span>
                <label class="mint-cell-title">
                    <span class="mint-cell-text">是否吃鱼生</span>
                </label>
                <div class="mint-cell-value">
                    <span class="leh-fs-fourteen leh-c-green" v-if="isFish">是</span>
                    <span class="leh-fs-fourteen leh-c-green" v-else>否</span>
                </div>
                <span class="iconfont" :class="{'icon-wx-arr-up':isFish,'icon-wx-arr-down':!isFish}"></span>
            </a>
            <div class="page-part behavior-main-box" v-show="isFish">
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell" v-link="{path:'/user/variety', query:{'fish':true,'fishType':fishText,'drinkType':wineText} ,replace:true}">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">种类</span>
                        </label>
                        <div class="mint-cell-value">
                            <p class="leh-text-ellipsis" v-text="fishText"></p>
                            <span class="iconfont icon-wx-arr-right"></span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">最近时间</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core leh-ipt-tap" type="month" v-model="fishLastEat">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="iconfont icon-wx-arr-down"></span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">开始时间</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core leh-ipt-tap" type="month" v-model="fishStartEat">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="iconfont icon-wx-arr-down"></span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">平均时间</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入每周吃鱼生的次数" type="text" maxlength="10" v-model="fishAvgEat" onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">次/周</span>
                        </div>
                    </a>
                </div>
                <div class="mint-field">
                    <a class="mint-cell mint-field-cell">
                        <label class="mint-cell-title">
                            <span class="mint-cell-text">每次数量</span>
                        </label>
                        <div class="mint-cell-value">
                            <input class="mint-field-core" placeholder="请输入每次吃鱼生的重量" type="text" maxlength="10" v-model="fishPerEat" onkeyup="this.value=this.value.replace(/\D/g,'')">
                            <div class="mint-field-clear" style="display: none;">
                                <i class="mintui mintui-field-error"></i>
                            </div>
								<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
                            <span class="leh-fs-twelve leh-c-grey">两/次</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </mt-content>
    <div class="page-popup">
        <mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
            <p v-text="tips"></p>
        </mt-popup>
        <div v-show="show_popup" class="maskbox"></div>
    </div>
</template>
<script>
    import MtContent from '../../components/content'
    import MtHeader from '../../components/header.vue'
    import MtButton from '../../components/button.vue'
    import MtField from '../../components/field.vue'
    import MtCell from '../../components/cell.vue'
    import MtPopup from '../../components/popup.vue'
    import MessageBox from 'vue-msgbox'
    import {getJson, postJson} from 'util'
    import $ from 'zepto'
    export default{
        route: {
            data ({to, next}) {
                let _self = this
                _self.path_item = to.query.path_item
                _self.isVariety = to.query.isVariety
                if(_self.isVariety){
                    if(_self.path_item == 1){
                        //酒类
                        _self.wineText = to.query.itemText
                    }else if(_self.path_item == 2){
                        //鱼类
                        _self.fishText = to.query.itemText
                    }
                }else{
                    _self.getBehaviorList()
                }

                next()
            }
        },
        data(){
            return{
                isDrink: false,       //是否饮酒开关
                isSmoke:false,        //是否吸烟开关
                isFish:false,         //是否吃鱼生开关
                show_if:false,      //是否戒烟开关
                ifName:'',
                wineText:'',    //酒类品种
                fishText:'',    //鱼类品种
                path_item:'',   //判断variety传过来的是鱼类还是酒类
                tips:'',
                show_popup: false,
                notKeep:true,
                id:'',
                isVariety:false,
                drinkAge:'',        //饮酒年限
                drinkAvgTime:'',    //饮酒平均次数
                drinkPer:'',    //饮酒平均数量
                smokeAge:'',    //抽烟年限
                smokeAvg:'',    //抽烟平均数量
                isNosmoke:false,
                msg_val:'', //抽烟备注
                fishLastEat:'', //最近吃鱼生时间
                fishStartEat:'',    //开始吃鱼生时间
                fishAvgEat:'',  //鱼生平均时间
                fishPerEat:'',   //鱼生每次数量
                keepBtn:false,
                firIsDrink:false,
                firIsSmoke:false,
                firIsFish:false,
                firIsNosmoke:false,
                firWineText:'',
                firFishText:'',
                firDrinkAge:'',        //饮酒年限
                firDrinkAvgTime:'',    //饮酒平均次数
                firDrinkPer:'',    //饮酒平均数量
                firSmokeAge:'',    //抽烟年限
                firSmokeAvg:'',    //抽烟平均数量
                firMsg_val:'', //抽烟备注
                firFishLastEat:'', //最近吃鱼生时间
                firFishStartEat:'',    //开始吃鱼生时间
                firFishAvgEat:'',  //鱼生平均时间
                firFishPerEat:'',   //鱼生每次数量
            }
        },
        methods:{
            getBehaviorList(){
                let _self = this
                getJson('api/lifeHabits/index', '', (rsp)=>{
	                    _self.id = rsp.id
	                    _self.isDrink = rsp.isDrink
                        _self.firIsDrink = rsp.isDrink
	                    _self.wineText = rsp.drinkType
                        _self.firWineText = rsp.drinkType
	                    _self.drinkAge = rsp.drinkAge
                        _self.firDrinkAge = rsp.drinkAge
	                    _self.drinkAvgTime = rsp.drinkAvgTime
                        _self.firDrinkAvgTime = rsp.drinkAvgTime
	                    _self.drinkPer = rsp.drinkPer
                        _self.firDrinkPer = rsp.drinkPer
	                    _self.isSmoke = rsp.isSmoke
                        _self.firIsSmoke = rsp.isSmoke
	                    _self.smokeAge = rsp.smokeAge
                        _self.firSmokeAge = rsp.smokeAge
	                    _self.smokeAvg = rsp.smokeAvg
                        _self.firSmokeAvg = rsp.smokeAvg
	                    if(rsp.isNosmoke == true){
	                        _self.ifName = '是'
                            _self.isNosmoke = true
                            _self.firIsNosmoke = true
	                    }else{
	                        _self.ifName = '否'
                            _self.isNosmoke = false
                            _self.firIsNosmoke = false
	                    }
                        _self.msg_val = rsp.smokeRemark
                        _self.firMsg_val = rsp.smokeRemark
	                    _self.isFish = rsp.isFish
                        _self.firIsFish = rsp.isFish
                        _self.fishText = rsp.fishType
                        _self.firFishText = rsp.fishType
	                    _self.fishLastEat = rsp.fishLastEat
                        _self.firFishLastEat = rsp.fishLastEat
	                    _self.fishStartEat = rsp.fishStartEat
                        _self.firFishStartEat = rsp.fishStartEat
	                    _self.fishAvgEat = rsp.fishAvgEat
                        _self.firFishAvgEat = rsp.fishAvgEat
	                    _self.fishPerEat = rsp.fishPerEat
                        _self.firFishPerEat = rsp.fishPerEat
	              },_self)
            },
            getName(name,ifNo){
                let _self = this
                _self.ifName = name
                _self.isNosmoke = ifNo
                _self.show_if = false
            },
            saveBehavior(){
                let _self = this
                let behavior = {
                    "isDrink": _self.isDrink,
                    "drinkType": _self.wineText,
                    "drinkAge": _self.drinkAge,
                    "drinkAvgTime": _self.drinkAvgTime || 0,
                    "drinkPer": _self.drinkPer || 0,
                    "isSmoke": _self.isSmoke,
                    "smokeAge": _self.smokeAge,
                    "smokeAvg": _self.smokeAvg,
                    "isNosmoke": _self.isNosmoke,
                    "smokeRemark": _self.msg_val,
                    "isFish": _self.isFish,
                    "fishType": _self.fishText,
                    "fishLastEat": _self.fishLastEat,
                    "fishStartEat": _self.fishStartEat,
                    "fishAvgEat": _self.fishAvgEat || 0,
                    "fishPerEat": _self.fishPerEat || 0
                }

                //必填项
                if((_self.isDrink != false) && (behavior.drinkType == '')){
                    _self.popupShow(true,'酒类品种尚未填写完整，请填写完全后再保存！')
                    return
                }else if((_self.isDrink != false) && (behavior.drinkAge == '')){
                    _self.popupShow(true,'饮酒年限尚未填写完整，请填写完全后再保存！')
                    return
                }else if((_self.isSmoke != false) && (behavior.smokeAge == '')){
                    _self.popupShow(true, '吸烟年限尚未填写完整，请填写完全后再保存！')
                    return
                }else if((_self.isSmoke != false) && (behavior.smokeAvg == '')){
                    _self.popupShow(true, '吸烟平均数量尚未填写完整，请填写完全后再保存！')
                    return
                }else if((_self.isFish != false) && (behavior.fishType == '')){
                    _self.popupShow(true, '鱼类品种尚未填写完整，请填写完全后再保存！')
                    return
                }else if((_self.isFish != false) && (behavior.fishLastEat == '')){
                    _self.popupShow(true, '最近时间尚未填写完整，请填写完全后再保存！')
                    return
                }else if((_self.isFish != false) && (behavior.fishStartEat == '')){
                    _self.popupShow(true,'开始时间尚未填写完整，请填写完全后再保存！')
                    return
                }

                postJson('api/LifeHabits',behavior, (rsp, recode, msg)=>{
                    if(recode == "1"){
                        alert(msg)
                        return
                    }
                    _self.popupShow(true, '保存成功')
                    _self.notKeep = true
                    _self.keepBtn = true
                },_self)

            },
            popupShow(type,text){
                this.show_popup = type
                this.tips = text
            },
            msgBox () {
                let _self = this
                if(_self.keepBtn == false){
                    if((_self.firIsDrink == _self.isDrink)&&(_self.wineText == _self.firWineText)&&(_self.drinkAge == _self.firDrinkAge)&&(_self.drinkAvgTime == _self.firDrinkAvgTime)&&(_self.drinkPer==_self.firDrinkPer)&&(_self.isSmoke == _self.firIsSmoke)&&(_self.smokeAge == _self.firSmokeAge)&&(_self.isNosmoke == _self.firIsNosmoke)&&(_self.msg_val == _self.firMsg_val)&&(_self.isFish== _self.firIsFish)&&(_self.fishText==_self.firFishText)&&(_self.fishLastEat==_self.firFishLastEat)&&(_self.fishStartEat==_self.firFishStartEat)&&(_self.fishAvgEat==_self.firFishAvgEat)&&(_self.fishPerEat==_self.firFishPerEat)){
                        _self.$route.router.go({path: '/user/sick',replace:true})
                        return
                    }else{
                        _self.notKeep = false
                    }
                }else if(_self.keepBtn == true){
                    _self.keepBtn = false
                    _self.$route.router.go({path: '/user/sick',replace:true})
                }
                if(_self.notKeep == false){
                    MessageBox({
                        title: '提示',
                        message: '编辑内容未保存，是否退出?',
                        showCancelButton: true
                    }).then(action => {
                        if(action === 'confirm'){
                            _self.$route.router.go({path: '/user/sick',replace:true})
                        }
                    });
                }
            }
        },
        watch:{
            'msg_val' (newVal){
                let msgTest = $('.msg-val')
                let scrollH = msgTest[0].scrollHeight
                msgTest.height(scrollH)
                if(!newVal){
                    msgTest.height(24)
                }
                this.notKeep = false
            },
            show_popup(val) {
                if (val) {
                    setTimeout(() => {
                        this.show_popup = false;
                }, 2000);
                }
            }
        },
        components:{
            MtContent,
            MtHeader,
            MtButton,
            MtField,
            MtCell,
            MtPopup
        }
    }
</script>

<style>
    .behavior-box{overflow: hidden;min-height:100%;}
    .behavior-box .mint-cell:after{border: 0;}
    .behavior-box .mint-cell:before{left: 10px;}
    .behavior-box .icon-wx-arr-up,
    .behavior-box .icon-wx-arr-down{margin-left: 8px;color: #aaa;}
    .leh-ex.mint-cell{overflow: visible;}
    .behavior-main-box .leh-ex .mint-cell-title{width: 105px}
    .behavior-main-box{background-color: #f6f6f6;padding-left: 20px;margin: 0;}
    .behavior-main-box .mint-cell,
    .behavior-main-box input,.behavior-main-box textarea{border:0;background-color: transparent;font-size: 14px;}
    .behavior-main-box p{width:100%;height: 24px;line-height: 28px;font-size: 14px;}
    .behavior-main-box .mint-cell-text{font-size: 14px;}
    .behavior-main-box .icon-wx-arr-right,
    .behavior-main-box .icon-wx-arr-down{font-size: 12px;color: #aaa;}
    .behavior-main-box textarea{min-height: 24px;height: 24px;line-height: 20px;width: 100%;border: 1px solid transparent;overflow-y: hidden;}
    .behavior-main-box .mint-cell-value input, .behavior-main-box .mint-cell-value textarea{display: block}
    .behavior-main-box .mint-cell-value .icon-wx-arr-down, .behavior-main-box .mint-cell-value .icon-wx-arr-right{margin: 0;position: absolute;right:10px;top:15px;}
    .behavior-main-box .mint-cell-value span.leh-fs-twelve {margin-left: 10px}
</style>
