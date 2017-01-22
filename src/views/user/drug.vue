<template>
    <mt-header fixed isgrey title="吸毒">
        <mt-button @click="msgBox" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" @click="saveDrugList()">保存</mt-button>
    </div>
    <mt-content>
        <div class="page-part drug-box">
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">开始时间</span>
                    </label>
                    <div class="mint-cell-value">
                        <input class="mint-field-core leh-ipt-tap" type="date" v-model="drug_time">
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
                        <span class="mint-cell-text">吸毒方式</span>
                    </label>
                    <div class="mint-cell-value">
                        <p class="leh-text-ellipsis"  @click="show_drug = !show_drug" v-text="drugName"></p>
                        <span class="iconfont icon-wx-arr-down"></span>
                    </div>
                    <ul class="leh-select-drag-box" v-if="show_drug">
                        <li v-for="items in drugList" @click="getName(items)">{{items}}</li>
                    </ul>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">共用注射器</span>
                    </label>
                    <div class="mint-cell-value">
                        <span class="drug-if-box" :class="{'leh-active': together}" @click="together = true">是</span>
                        <span class="drug-if-box" :class="{'leh-active': !together}" @click="together = false">否</span>
                    </div>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">吸毒频率</span>
                    </label>
                    <div class="mint-cell-value">
                        <input class="mint-field-core" placeholder="请输入数字" type="text" maxlength="5" v-model="drug_num" onkeyup="this.value=this.value.replace(/\D/g,'')">
                        <div class="mint-field-clear" style="display: none;">
                            <i class="mintui mintui-field-error"></i>
                        </div>
							<span class="mint-field-state is-default">
								<i class="mintui mintui-field-default"></i>
							</span>
                        <span class="leh-fs-twelve leh-c-grey">次/月</span>
                    </div>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">已戒毒</span>
                    </label>
                    <div class="mint-cell-value">
                        <span class="drug-if-box" :class="{'leh-active': exhort}" @click="exhort = true">是</span>
                        <span class="drug-if-box" :class="{'leh-active': !exhort}" @click="exhort = false">否</span>
                    </div>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">备注</span>
                    </label>
                    <div class="mint-cell-value">
                        <textarea class="msg-val" placeholder="请输入备注信息" maxlength="45" v-model="msg_val"></textarea>
                    </div>
                </a>
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
    import MtPopup from '../../components/popup.vue'
    import MessageBox from 'vue-msgbox'
    import {optionData ,getJson, postJson} from 'util'
    import $ from 'zepto'
    export default{
        route: {
            data ({ next}) {
                //初始化
                this.getDrugList()
                next()
            }
        },
        data(){
            return{
                drugList: optionData().drugTypes,
                show_drug: 0,
                drugName:'',
                exhort:false,
                together:false,
                tips:'',
                show_popup: false,
                notKeep:true,
                msg_val:'',
                drugItems:'',
                id:'',
                drug_time:'',
                drug_num:'',
                firDrug_time:'',
                firDrugName:'',
                firExhort:false,
                firDrug_num:'',
                firTogether:false,
                firMsg_val:'',
                keepBtn:false
            }
        },
        methods:{
            getName(name){
                let _self = this
                _self.drugName = name
                _self.show_drug = 0
            },
            saveDrugList(){
                let _self = this
                let drug = {
                    "startTime" : _self.drug_time || '',  //吸毒开始时间
                    "drugType" : _self.drugName,  //吸毒方式
                    "shared" : _self.together,      //共用注射器
                    "drugFrequencyUnit" :  _self.drug_num || '',     //吸毒频率
                    "isNoDrug" : _self.exhort,      //是否戒毒
                    "remark" : _self.msg_val || ''    //备注
                }
                if(drug.startTime == ''){
                    _self.show_popup = true
                    _self.tips = '开始时间尚未填写完整，请填写完全后再保存！'
                    return
                }else if(drug.drugType == ''){
                    _self.show_popup = true
                    _self.tips = '吸毒方式尚未填写完整，请填写完全后再保存！'
                    return
                }else if(drug.drugFrequencyUnit == ''){
                    _self.show_popup = true
                    _self.tips = '吸毒频率尚未填写完整，请填写完全后再保存！'
                    return
                }

                postJson('api/DrugHis',drug, (rsp, recode, msg)=>{
                    if(recode == "1"){
                        alert(msg)
                        return
                    }
                    _self.tips = '保存成功'
                    _self.show_popup = true
                    _self.notKeep = true
                    _self.keepBtn = true
                },_self)
            },
            getDrugList(){
                let _self = this
                getJson('api/drugHis/index', '', (rsp)=>{

	                  if(rsp == null) return
                    _self.drug_time = rsp.startTime
                    _self.firDrug_time = rsp.startTime
                    _self.drugName = rsp.drugType
                    _self.firDrugName = rsp.drugType
                    _self.together = rsp.shared
                    _self.firTogether = rsp.shared
                    _self.drug_num = rsp.drugFrequencyUnit
                    _self.firDrug_num = rsp.drugFrequencyUnit
                    _self.exhort = rsp.isNoDrug
                    _self.firExhort = rsp.isNoDrug
                    _self.msg_val = rsp.remark
                    _self.firMsg_val = rsp.remark
                    _self.id = rsp.id
                 },_self)
            },
            msgBox () {
                let _self = this
                if(_self.keepBtn == false){
                    if((_self.drug_time == _self.firDrug_time)&&(_self.drugName==_self.firDrugName)&&(_self.together==_self.firTogether)&&(_self.drug_num==_self.firDrug_num)&&(_self.exhort==_self.firExhort)&&(_self.msg_val==_self.firMsg_val)){
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
	                        _self.drug_time = ''
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
                    msgTest.height(25)
                }
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
            MtPopup
        }
    }

</script>

<style>
    .drug-box{overflow: hidden;}
    .drug-box .mint-cell{padding: 15px 10px;overflow: visible;}
    .drug-box .mint-cell:after{border: 0;}
    .drug-box input,.drug-box textarea{border:0;background-color: transparent;font-size: 14px;}
    .drug-box p{width: 100%;height: 24px;line-height: 28px;font-size: 14px;}
    .drug-box .icon-wx-arr-down{color: #aaa;position: absolute;right:10px;top:20px;}
    .drug-box textarea{min-height: 25px;height: 25px;line-height: 22px;width: 100%;overflow-y: hidden;border: 1px solid transparent}
    .drug-if-box{padding: 5px 10px;font-size: 12px;border: 1px solid #e5e5e5;color: #919191;float: left;position: relative;}
    .drug-if-box.leh-active{background-color: #1faa2b;color: #fff;}
    .drug-if-box:nth-of-type(1){border-bottom-left-radius: 5px;border-top-left-radius: 5px;}
    .drug-if-box:nth-of-type(2){border-bottom-right-radius: 5px;border-top-right-radius: 5px;border-left: 0;}
    .drug-box .mint-cell-value input,.drug-box .mint-cell-value textarea{display: block}
    .drug-box .mint-cell-value  span.leh-fs-twelve {margin-left: 10px}
</style>
