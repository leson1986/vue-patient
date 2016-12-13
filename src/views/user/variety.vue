<template>
    <mt-header fixed isgrey title="品种">
        <mt-button v-link="{path: '/user/behavior', query: {'isVariety':true},replace:true}" icon="arr-left" slot="left"></mt-button>
    </mt-header>
    <div class="leh-float-box">
        <mt-button type="green" @click="saveVariety()">保存</mt-button>
    </div>
    <mt-content>
        <div class="page-cell variety-list">
            <a class="mint-cell" :class="{'drink-cell': drink}" v-for="items in drinkLists" @click="active($event)" v-show="drink">
                <label class="mint-cell-title">
                    <span class="mint-cell-text">{{items}}</span>
                </label>
                <div class="mint-cell-value">
                    <span class="iconfont icon-wx-take"></span>
                </div>
            </a>
            <a class="mint-cell" :class="{'fish-cell': fish}" v-for="items in fishLists" @click="active($event)" v-show="fish">
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
    import {optionData} from 'util'
    import $ from 'zepto'
    export default{
        route: {
            data ({to, next}) {
                let _self = this

                _self.drink = to.query.drink
                _self.fish = to.query.fish
                _self.drinkType = to.query.drinkType.split("、")
                _self.fishType = to.query.fishType.split("、")

                if(_self.drink){

                    _self.path_item = 1


                }
                if(_self.fish){

                    _self.path_item = 2
                //    _self.lists = _self.fishLists
                }

                next()

            }
        },
        ready(){
            this.loadDrinkTake()
            this.loadFishTake()
        },
        created () {

            this.drinkLists = optionData().drinkTypes
            this.fishLists = optionData().fishTypes
            this.drinkLen = this.drinkLists.length
        },
        data () {
            return{
                lists:[],
                drink:false,
                fish:false,
                show_popup: false,
                tips:'',
                path_item:'',
                from_path:'',
                drinkType:[],
                fishType:[],
                drinkLists: [],
                fishLists: [],
                drinkLen: 0
            }
        },
        methods:{
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
            saveVariety(){
                let _self = this
                let  itemText = ''
                let lehActive = $('.leh-active')//$('.leh-active').find('.mint-cell-text')

                //判断有没有选中品种
                if(this.fish){
                    if($('.fish-cell').hasClass('leh-active')){
                        this.show_popup = true
                        this.tips = '保存成功'
                    }else{
                        this.show_popup = true
                        this.tips = '请选择品种'
                        return
                    }
                }
                if(this.drink){
                    if($('.drink-cell').hasClass('leh-active')){
                        this.show_popup = true
                        this.tips = '保存成功'
                    }else{
                        this.show_popup = true
                        this.tips = '请选择品种'
                        return
                    }
                }
                for(let i=0; i<lehActive.length; i++){
                    let items = lehActive[i]
                    if($(items).css('display')=='flex'){
                        itemText += i>0 ? '、' + $(items).find('.mint-cell-text').text() : $(items).find('.mint-cell-text').text()
                    }
                }
                setTimeout(() => {
                    if(this.fish){
                        itemText = itemText.substring(1);
                    }
                    this.$route.router.go({path: '/user/behavior', query: {'itemText': itemText,'path_item': _self.path_item,'isVariety':true},replace:true})
                },2000)

            },
            loadDrinkTake(){
                let _self = this
                for(let i=0;i<_self.drinkLists.length;i++){
                    for(let j=0;j<_self.drinkType.length;j++){
                        if(_self.drinkType[j] == _self.drinkLists[i]){
                            $('.variety-list').find(".mint-cell").eq(i).addClass('leh-active')
                        }
                    }
                }
            },
            loadFishTake(){
                let _self = this
                let len = this.drinkLen
                for(let i=0;i<_self.fishLists.length;i++){
                    for(let j=0;j<_self.fishType.length;j++){
                        if(_self.fishType[j] == _self.fishLists[i]){
                            $('.variety-list').find(".mint-cell").eq(len + i).addClass('leh-active')
                        }
                    }
                }
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
