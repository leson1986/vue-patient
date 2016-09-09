<template>
	<mt-header fixed isgrey title="转换中单据">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'turn'}, replace: true}" icon="back" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="transform-list-box">
			<mt-translate>
				<mt-translate-item v-for="n in 10">
					<div class="transform-list-img-box">
						<img src="../../assets/img/photo-img.png"/>
					</div>
					<div class="transform-list-text" style="display: none;">
						<p>图片过于模糊或无法识别</p>
						<p>点击重新上传</p>
					</div>
					<span class="fr">转换中</span>
				</mt-translate-item>
				<mt-translate-item v-for="n in 10" delbtn>
					<div class="transform-list-img-box">
						<img src="../../assets/img/photo-img.png"/>
						<span class="transform-img-ico">X</span>
					</div>
					<div class="transform-list-text" >
						<p>图片过于模糊或无法识别</p>
						<p>点击重新上传</p>
					</div>
					<span class="fr leh-c-red">转换失败</span>
				</mt-translate-item>
			</mt-translate>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	export default{
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtTranslate,
			MtTranslateItem
		}
	}
</script>

<style>
	.transform-list-img-box{width: 40px;height: 50px;background-color:#e5e5e5;float: left;text-align: center;position: relative;}
	.transform-list-img-box img{height: auto;width: auto;max-height: 100%;max-width: 100%;}
	.transform-list-text{float: left;padding-top: 10px;padding-left: 20px;}
	.transform-list-text p{font-size: 12px;color: #919191;}
	.transform-list-box span.fr{line-height: 50px;font-size: 14px;}
	.transform-img-ico{position: absolute;bottom: -10px;right: -4px;font-size: 20px;font-weight:bold;color: #ff6060;}


</style>