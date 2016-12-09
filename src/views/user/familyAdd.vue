<template>
    <mt-header fixed isgrey title="新增家族病史">
        <mt-button @click="msgBox" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" @click="saveList()">保存</mt-button>
    </div>
    <mt-content>
        <div class="family-add-list">
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">亲属关系</span>
                    <div class="family-add-name" @click="(show_reltions = !show_reltions) && (show_sick = 0)" v-text="reltionsName"></div>
                    <ul class="leh-select-drag-box" v-if="show_reltions">
                        <li v-for="items in relatives" @click="getName(items,1)">{{items}}</li>
                    </ul>
                </label>
                <div class="mint-cell-value">
                    <span class="iconfont icon-wx-arr-down"></span>
                </div>
            </a>
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">所患疾病</span>
                    <div class="family-add-name" @click="(show_sick = !show_sick) && (show_reltions = 0)" v-text="diseasesName"></div>
                    <ul class="leh-select-drag-box" v-if="show_sick">
                        <li v-for="items in diseases" @click="getName(items,2)">{{items}}</li>
                    </ul>
                </label>
                <div class="mint-cell-value">
                    <span class="iconfont icon-wx-arr-down"></span>
                </div>
            </a>
            <a class="mint-cell">
                <label class="mint-cell-title">
                    <span class="mint-cell-text leh-c-green">备注</span>
                    <textarea class="msg-val" placeholder="请输入你需要备注的内容" v-model="msg_val"></textarea>
                </label>
                <div class="mint-cell-value"></div>
            </a>
        </div>
    </mt-content>
    <div class="page-popup">
        <mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
            <p v-text="tips"></p>
        </mt-popup>
    </div>
</template>
<script>
    import MtContent from '../../components/content'
    import MtHeader from '../../components/header.vue'
    import MtButton from '../../components/button.vue'
    import MtPopup from '../../components/popup.vue'
    import MessageBox from 'vue-msgbox'
    import {optionData, postJson} from 'util'
    export default{
        route: {
            data ({ to, next}) {
                //初始化
                this.reltionsName = ''
                this.diseasesName = ''
                this.msg_val = null
                next()
            }
        },
        data(){
            return{
                relatives: optionData().familyReltions, //亲戚关系列表
                diseases:optionData().familyDisease,    //所患疾病列表
                show_reltions: 0,
                show_sick: 0,
                reltionsName:'',                        //亲戚关系
                diseasesName:'',                        //所患疾病
                tips:'',
                show_popup: false,
                msg_val:''
            }
        },
        methods:{
            getName(name,type){
                let _self = this
                if(type === 1){
                    _self.reltionsName = name
                    _self.show_reltions = 0
                }else if(type === 2){
                    _self.diseasesName = name
                    _self.show_sick = 0
                }
            },
            saveList(){
                let _self = this
                let params = {
                    "relation": _self.reltionsName,
                    "disease": _self.diseasesName,
                    "remark": _self.msg_val
                }
                if(params.relation == ''){
                    _self.tips = '请选择亲属关系'
                    _self.show_popup = true
                    return
                }else if(params.disease == ''){
                    _self.tips = '请选择所患疾病'
                    _self.show_popup = true
                    return
                }


                postJson('api/FamilyHis',params, (rsp, recode, msg)=>{
                    _self.tips = '保存成功'
                    _self.show_popup = true
                    setTimeout(() => {
                        this.$route.router.go({path: '/user/family',replace:true})
                    },2000)
                },_self)


                console.log(params.relation)
                console.log(params.disease)
                console.log(params.remark)
            },
            msgBox () {
                MessageBox({
                    title: '提示',
                    message: '编辑内容未保存，是否退出?',
                    showCancelButton: true
                }).then(action => {
                    if(action === 'confirm'){
                        this.$route.router.go({path: '/user/family',replace:true})
                    }
                });
            }
        },
        watch:{
            'msg_val' (newVal){
                let msgTest = $('.msg-val')
                let scrollH = msgTest[0].scrollHeight
                msgTest.height(scrollH)
                if(!newVal){
                    msgTest.height(28)
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
            MtPopup
        }
    }
</script>

<style>
    .family-add-list .mint-cell{padding-bottom: 10px;overflow: visible;}
    .family-add-list .mint-cell:after,.online-msg-ipt-box .mint-cell:nth-last-of-type(1):before{border: 0;}
    .family-add-list .mint-cell:before{left: 10px;transform: scaleY(1);}
    .family-add-name,.family-add-list textarea{width: 100%;margin-top: 15px;font-size: 14px;height: 18px;}
    .family-add-list textarea{border: 1px solid transparent;overflow-y: hidden;line-height: 20px;height: 28px}
    .family-add-list .mint-cell .mint-cell-value span{margin-top: 35px;color: #aaa;position: absolute;top: 15px;right: 10px}
</style>
