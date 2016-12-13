<template>
    <mt-header fixed isgrey title="新增肝穿情况">
        <mt-button @click="msgBox" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" @click="saveLiverAdd()">保存</mt-button>
    </div>
    <mt-content>
        <div class="page-part liver-add-box">
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">肝穿时间</span>
                    </label>
                    <div class="mint-cell-value">
                        <input class="mint-field-core leh-ipt-tap" type="date" v-model="liver_time">
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
                        <span class="mint-cell-text">病理号</span>
                    </label>
                    <div class="mint-cell-value">
                        <input class="mint-field-core" placeholder="请输入病理号" type="text" maxlength="10" v-model="liver_num" onkeyup="this.value=this.value.replace(/\D/g,'')">
                        <div class="mint-field-clear" style="display: none;">
                            <i class="mintui mintui-field-error"></i>
                        </div>
							<span class="mint-field-state is-default">
								<i class="mintui mintui-field-default"></i>
							</span>
                    </div>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">病理诊断</span>
                    </label>
                    <div class="mint-cell-value">
                        <textarea class="word-val" placeholder="请输入病理诊断" maxlength="100" v-model="liver_word"></textarea>
                    </div>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">炎症</span>
                    </label>
                    <div class="mint-cell-value">
                        <p class="leh-text-ellipsis" @click="(show_inflammation = !show_inflammation) && (show_fibrosis = 0)" v-text="inflammationName"></p>
                        <span class="iconfont icon-wx-arr-down"></span>
                    </div>
                    <ul class="leh-select-drag-box" v-if="show_inflammation">
                        <li v-for="items in inflammation" @click="getName(items,1)">{{items}}</li>
                    </ul>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">纤维化</span>
                    </label>
                    <div class="mint-cell-value">
                        <p class="leh-text-ellipsis" @click="(show_fibrosis = !show_fibrosis) && (show_inflammation = 0)" v-text="fibrosisName"></p>
                        <span class="iconfont icon-wx-arr-down"></span>
                    </div>
                    <ul class="leh-select-drag-box" v-if="show_fibrosis">
                        <li v-for="items in fibrosis" @click="getName(items,2)">{{items}}</li>
                    </ul>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">伴随症状</span>
                    </label>
                    <div class="mint-cell-value">
                        <textarea class="with-val" placeholder="请输入伴随症状" maxlength="100" v-model="liver_with"></textarea>
                    </div>
                </a>
            </div>
            <div class="mint-field">
                <a class="mint-cell mint-field-cell">
                    <label class="mint-cell-title">
                        <span class="mint-cell-text">备注</span>
                    </label>
                    <div class="mint-cell-value">
                        <textarea class="msg-val" placeholder="请输入备注信息" maxlength="100" v-model="msg_val"></textarea>
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
    import {optionData, postJson} from 'util'
    export default{
        route: {
            data ({ next}) {
                //初始化
                this.liverInit()
                next()
            }
        },
        data(){
            return{
                inflammation: optionData().inflammationTypes,
                fibrosis:optionData().fibrosisTypes,
                show_inflammation: 0,
                show_fibrosis: 0,
                inflammationName:'',
                fibrosisName:'',
                tips:'',
                show_popup: false,
                msg_val:'',
                liver_with:'',
                liver_word:'',
                liver_num:'',
                liver_time:''
            }
        },
        methods:{
            getName(name,type){
                let _self = this
                if(type === 1){
                    _self.inflammationName = name
                    _self.show_inflammation = 0
                }else if(type === 2){
                    _self.fibrosisName = name
                    _self.show_fibrosis = 0
                }
            },
            saveLiverAdd(){
                let _self = this
                let liver ={
                    "happenTime" : _self.liver_time || '',    //肝穿时间
                    "diseaseNo" : _self.liver_num || '',    //病理号
                    "rcdResult" :_self.liver_word || '',    //病理诊断
                    "inflammation" : _self.inflammationName,    //炎症
                    "fibrosis" : _self.fibrosisName,    //纤维化
                    "followDisease" : _self.liver_with || '',    //伴随症状
                    "remark" : _self.msg_val || ''    //备注
                }
                if(liver.happenTime == ''){
                    _self.show_popup = true
                    _self.tips = '肝穿时间尚未填写完整，请填写完全后再保存！'
                    return
                }else if(liver.rcdResult == ''){
                    _self.show_popup = true
                    _self.tips = '病理诊断尚未填写完整，请填写完全后再保存！'
                    return
                }

                postJson('api/LiverHis',liver, (rsp, recode, msg)=>{
                    if(recode == "1"){
                        alert(msg)
                        return
                     }
                    _self.tips = '保存成功'
                    _self.show_popup = true
                    setTimeout(() => {
                        _self.$route.router.go({path: '/user/liver', replace: true})
                    },2000)
                },_self)

            },
            liverInit(){
                let _self = this
                _self.liver_time = ''
                _self.liver_num = ''
                _self.liver_word = ''
                _self.inflammationName = ''
                _self.fibrosisName = ''
                _self.liver_with = ''
                _self.msg_val = ''
            },
            msgBox () {
                let _self = this
                if((_self.liver_time != '')||(_self.liver_num != '')||(_self.liver_word != '')||(_self.inflammationName != '')||(_self.fibrosisName != '')||(_self.liver_with != '')||(_self.msg_val != '')){
                    MessageBox({
                        title: '提示',
                        message: '编辑内容未保存，是否退出?',
                        showCancelButton: true
                    }).then(action => {
                        if(action === 'confirm'){
                        this.$route.router.go({path: '/user/liver',replace:true})
                        }
                    });
                }else {
                    this.$route.router.go({path: '/user/liver',replace:true})
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
            'liver_with' (newVal){
                let msgTest = $('.with-val')
                let scrollH = msgTest[0].scrollHeight
                msgTest.height(scrollH)
                if(!newVal){
                    msgTest.height(25)
                }
            },
            'liver_word' (newVal){
                let msgTest = $('.word-val')
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
    .liver-add-box{overflow: hidden;min-height: 100%}
    .liver-add-box .mint-cell{padding: 15px 10px;overflow: visible;}
    .liver-add-box .mint-cell:after{border: 0;}
    .liver-add-box input,.liver-add-box textarea{border:0;background-color: transparent;font-size: 14px;}
    .liver-add-box p{width: 100%;height: 24px;line-height: 28px;font-size: 14px;}
    .liver-add-box .icon-wx-arr-down{color: #aaa;position: absolute;right:10px;top:20px;}
    .liver-add-box textarea{min-height: 25px;height: 25px;line-height: 22px;font-size:14px;width: 100%;border: 1px solid transparent;overflow-y: hidden;padding: 0}
    .liver-add-box .mint-cell-value input,.liver-add-box .mint-cell-value textarea{display: block}
</style>
