<template>
    <mt-header fixed isgrey title="高危因素">
        <mt-button v-link="'/user/sick'" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" @click="saveDanger()">保存</mt-button>
    </div>
    <mt-content>
        <div class="page-cell variety-list">
            <a class="mint-cell" v-for="items in lists" @click="active($event)">
                <label class="mint-cell-title">
                    <span class="mint-cell-text">{{items}}</span>
                </label>
                <div class="mint-cell-value">
                    <span class="iconfont icon-wx-take"></span>
                </div>
            </a>
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
    import MtHeader from '../../components/header.vue'
    import MtContent from '../../components/content.vue'
    import MtButton from '../../components/button.vue'
    import MtCell from '../../components/cell.vue'
    import MtPopup from '../../components/popup.vue'
    import MessageBox from 'vue-msgbox'
    import {optionData, getJson, postJson} from 'util'
    import $ from 'zepto'
    export default{
        route: {
            data ({ next}) {
                this.getDanger()
                next()
            }
        },
        data () {
            return{
                lists: optionData().riskFactors,
                dangerList:[],
                show_popup: false,
                tips:'',
                takeList:[],
                num:''
            }
        },
        methods:{

            getDanger(){
                let _self = this
                getJson('api/highRisk/index', '', (rsp)=>{
                    _self.takeList = rsp
                    //初始化
                    $(".mint-cell").removeClass('leh-active')
                    for(let i=0;i<_self.lists.length;i++){
                        for(let j=0;j<_self.takeList.length;j++){
                            if(_self.takeList[j].riskItem == _self.lists[i]){
                                $(".mint-cell").eq(i).addClass('leh-active')
                            }
                        }
                    }
                 },_self)
            },

            active(obj){
                if(obj.target.tagName === 'A'){
                    if($(obj.target).hasClass('leh-active')){
                        $(obj.target).removeClass('leh-active')
                    }else{
                        $(obj.target).addClass('leh-active')
                    }
                }else {
                    if( $(obj.target).parent().hasClass('leh-active')){
                        $(obj.target).parent().removeClass('leh-active')
                    }else{
                        $(obj.target).parent().addClass('leh-active')
                    }
                }
            },
            saveDanger(){
                let _self = this
                let text = $('.leh-active').find('.mint-cell-text')
                let params = []
                for(let i=0; i<text.length; i++) {
                    _self.dangerList[i] = $(text[i]).text()
                    params.push ({
                        "riskItem" : _self.dangerList[i]
                    })
                }
                postJson('api/HighRisk',JSON.stringify(params), (rsp, recode, msg)=>{
                    if(recode == '1'){
                        alert(msg)
                        return
                    }else{
                        this.show_popup = true
                        this.tips = '保存成功'
                    }
                },_self)
            }
        },
        watch: {
            show_popup(val) {
                if (val) {
                    setTimeout(() => {
                        this.show_popup = false;
                }, 2000);
                }
            }
        },
        components: {
            MtHeader,
            MtContent,
            MtButton,
            MtCell,
            MtPopup
        }
    }
</script>

<style>
    .variety-list .mint-cell{line-height: 25px;}
    .variety-list .mint-cell:after{border-top: 0;}
    .variety-list .icon-wx-take{color: #fff;}
    .variety-list .mint-cell.leh-active{background-color: #f2f2f2;}
    .variety-list .mint-cell.leh-active .icon-wx-take{color: #1faa2b;}
</style>
