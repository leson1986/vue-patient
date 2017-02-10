<template>
    <mt-header fixed isgrey title="病程记录">
        <mt-button v-link="{path: '/online/billCaseList', query: {id: medicalId}, replace: true}" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <mt-content id="bodyBox">
        <div class="sick-manage-box">
            <div class="sick-manage-box-scroolbar"></div>
            <div class="sick-manage-content page-cell">
                <a class="mint-cell" :class="{'leh-active':(index == activeNum)}" v-for="(index,items) in medicalRecords" @click="itemActive(index,items.moreDates.length)">
                    <label class="mint-cell-title">
                        <span v-text="items.rcdResult"></span>
                        <p>{{ items.date }}</p>
                        <span class="sick-manage-content-arr" v-if="items.moreDates.length !== 0"></span>
                        <!--隐藏列表-->
                        <ul>
                            <li class="sick-manage-list" v-for="item in items.moreDates">
                                <div v-text="item"></div>
                            </li>
                        </ul>
                    </label>
                    <div class="mint-cell-value"></div>
                </a>
            </div>
        </div>

    </mt-content>

    <!-- 用于展示插件的容器 -->
    <div class="overlay" id="overlay"></div>
</template>
<script>
    import MtContent from '../../components/content'
    import MtHeader from '../../components/header.vue'
    import MtButton from '../../components/button.vue'
    import {getJson} from 'util'
    import $ from 'zepto'


    export default{
        route: {
            data ({to, next}) {

                let _self = this
                _self.medicalId = to.query.medicalId
                _self.medicalDate = to.query.date
                _self.getList(_self.medicalDate)

                next()
            }
        },
        data () {
            return{
                medicalId:'',
                medicalRecords:[],
                activeNum:'',
                medicalDate:'',
                medicalQy:''
            }
        },
        methods: {
            getList(date){
                let _self = this
                getJson('api/medical/medicalRecords', '', (rsp)=>{
                    _self.medicalRecords = rsp
                    _self.medicalQy = _self.medicalRecords.length
                    setTimeout(function(){
                        _self.goDate( _self.medicalQy,date)
                    },100)
                },_self)
            },
            goDate(index,date){
                for(let i=0;i<index;i++){
                   if($('.mint-cell-title p').eq(i).text() === date){
                       let pOffset = $('.mint-cell-title p').eq(i).offset()
                       $("#bodyBox")[0].scrollTop = pOffset.top - 80
                       return
                   }
                }
            },
            itemActive(index,active){
                let _self = this
                //没有更多数据的不可以使用展开收起功能
                if(active == 0){
                    return
                }
                //收起
                if( _self.activeNum == index){
                    _self.activeNum = ''
                    return
                }
                _self.activeNum = index
            }
        },

        components: {
            MtContent,
            MtHeader,
            MtButton
        }
    }
</script>

<style>
    .sick-manage-box{padding: 20px 12px 0 15px;position: relative;overflow: hidden;margin-bottom: 40px;}
    .sick-manage-box-scroolbar{position: absolute;width: 2px;height: 100%;background-color: #21b717;left: 29px;top: 40px;}
    .sick-manage-content{padding-left: 55px;}
    .sick-manage-content .mint-cell{padding: 0;overflow: visible;position: relative;min-height: 38px;margin-top: 30px;}
    .sick-manage-content .mint-cell:nth-of-type(1){margin-top: 0;}
    .sick-manage-content .mint-cell .mint-cell-title{min-height: 38px;}
    .sick-manage-content .mint-cell:after,.sick-manage-content .mint-cell:before{border: 0;}
    .sick-manage-content .mint-cell:before{position: absolute;width: 38px;height: 38px;background:#fff url(../../assets/img/sick-manage-title-ico.png) no-repeat;left: -59px;background-size: 100%;-webkit-transform: scaleY(1);transform: scaleY(1);top: 0;}
    .sick-manage-content .mint-cell .mint-cell-title p{font-size: 14px;color: #21b717 !important;margin-top: 3px;}
    .sick-manage-content .mint-cell .mint-cell-title span{color: #1dadfe;max-width: 160px;line-height: 18px;display: inline-block;text-overflow:ellipsis; overflow:hidden; white-space:nowrap}
    .sick-manage-content .mint-cell .mint-cell-title ul{display: none;}
    .sick-manage-content-arr{position: absolute;right: 0;top: 8px;border-bottom:8px solid #1dadfe;border-left: 8px solid transparent;transform: rotate(45deg);-webkit-transform: rotate(45deg);}
    .sick-manage-content .mint-cell.leh-active .mint-cell-title ul{display: block;}
    .sick-manage-content .mint-cell.leh-active .sick-manage-content-arr{transform: rotate(-135deg);-webkit-transform: rotate(-135deg);top: 10px;}
    .sick-manage-list{margin-top: 20px;font-size: 14px;position: relative;left: -15px;}
    .sick-manage-list:nth-of-type(1){margin-top: 30px;}
    .sick-manage-list:after{content: '';width: 10px;height: 10px;background: #fff url(../../assets/img/sick-manage-dot-ico.png) no-repeat;background-size:100%;position: absolute;bottom: 0;left: -30px;}
    .sick-manage-list div{position: relative;bottom: -2px;}

</style>
