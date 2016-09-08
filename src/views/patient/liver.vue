<template>
	<m-header :isindex="true">
		<m-nav path="/patient/sick" label="肝穿情况"></m-nav>
	</m-header>
	<m-content>
		<div class="personallivercase-box">
			<ul>
				<li class="personalliver-list js-personalliver-list">
					<div class="personalliver-list-hd" @click="show_liver($event)">
						<div class="personalliver-list-hdline">
							<div class="personalliver-list-hd-l">
								<div class="personalliver-list-hd-l-up">
									<div class="personalliver-flex">时间
										<span>2016-10-11</span>
									</div>
									<div class="personalliver-flex">病理号
										<span>16546465</span>
									</div>
								</div>
								<div class="personalliver-list-hd-l-down">
										<span>病理诊断
											<em>乙肝大三阳</em>
										</span>
								</div>
							</div>
							<div class="personalliver-list-hd-rshou">
								<span class="mui-icon" :class="arrows"></span>
							</div>
						</div>
					</div>
					<div class="personalliver-list-bd" :style="{display: 'none'}">
						<ul>
							<li class="personalliver-list-bdlist">
								炎<em class="personal-font1">症</em>
								<p>sds</p>
							</li>
							<li class="personalliver-list-bdlist">
								纤<em class="personal-font2">维</em>化
								<p>asd</p>
							</li>
							<li class="personalliver-list-bdlist">
								伴随症状
								<p>asdsa</p>
							</li>
							<li class="personalliver-list-bdlist">
								备<em class="personal-font1">注</em>
								<p>萨达是萨达是萨达是萨</p>
							</li>
						</ul>
					</div>
				</li>

				<li class="personalliver-list js-personalliver-list">
					<div class="personalliver-list-hd" @click="show_liver($event)">
						<div class="personalliver-list-hdline">
							<div class="personalliver-list-hd-l">
								<div class="personalliver-list-hd-l-up">
									<div class="personalliver-flex">时间
										<span>2016-10-11</span>
									</div>
									<div class="personalliver-flex">病理号
										<span>16546465</span>
									</div>
								</div>
								<div class="personalliver-list-hd-l-down">
										<span>病理诊断
											<em>乙肝大三阳</em>
										</span>
								</div>
							</div>
							<div class="personalliver-list-hd-rshou">
								<span class="mui-icon" :class="arrows"></span>
							</div>
						</div>
					</div>
					<div class="personalliver-list-bd" :style="{display: 'none'}">
						<ul>
							<li class="personalliver-list-bdlist">
								炎<em class="personal-font1">症</em>
								<p>sds</p>
							</li>
							<li class="personalliver-list-bdlist">
								纤<em class="personal-font2">维</em>化
								<p>asd</p>
							</li>
							<li class="personalliver-list-bdlist">
								伴随症状
								<p>asdsa</p>
							</li>
							<li class="personalliver-list-bdlist">
								备<em class="personal-font1">注</em>
								<p>萨达是萨达是萨达是萨</p>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</m-content>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import $ from 'zepto'

	export default{
		data () {
			return{
				showLiver: false,
				arrows: 'mui-icon-arrowdown'
			}
		},
		methods: {
			show_liver (e) {
				let $els = $(e.target).parents('.personalliver-list');
				if($els.find('.personalliver-list-bd').css('display') === 'none'){
					$els.find('.personalliver-list-bd').show();
					$els.find('.mui-icon').removeClass('mui-icon-arrowdown').addClass('mui-icon-arrowup')
				}else {
					$els.find('.personalliver-list-bd').hide();
					$els.find('.mui-icon').removeClass('mui-icon-arrowup').addClass('mui-icon-arrowdown')
				}

			}
		},
		components: {
			MHeader,
			MNav,
			MContent
		}
	}
</script>

<style>
	.personalliver-list{margin-bottom: 0.64rem;background-color:#fff ;}
	.personalliver-list-hd{background-color: #fff;overflow: hidden;padding-left: 0.8rem;}
	.personalliver-list-hdline{border-bottom: 1px solid #e5e5e5;overflow: hidden;}
	.personalliver-list-hd-l{float: left;width: 88%;}
	.personalliver-list-hd-rshou{float: right;width: 12%;text-align: center;line-height: 6.8rem;}
	.personalliver-list-hd-rshou .mui-icon{font-size: 1.6rem;color: #bebebe;font-weight: 600;}
	.personalliver-list-hd-l-up{height: 3.4rem;line-height: 3.4rem;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.personalliver-flex{width: 50%;float: left;font-size: 0.96rem;color: #919191;}
	.personalliver-flex span{font-size: 1.04rem;color: #363636;margin-left: 0.64rem;}
	.personalliver-list-hd-l-down{height: 3.4rem;line-height: 3.4rem;overflow: hidden;color: #919191;font-size: 0.96rem;}
	.personalliver-list-hd-l-down em{font-size: 1.04rem;color: #363636;margin-left: 0.64rem;}
	.personalliver-list-bd{background-color: #f6f6f6;padding-left: 0.8rem;}
	.personalliver-list-bdlist{border-bottom: 1px solid #e5e5e5;font-size: 0.96rem;color: #919191;padding:1.2rem 0.8rem 1.2rem 0;overflow: hidden;}
	.personalliver-list-bdlist:nth-last-child(1){border-bottom: 0;}
	.personalliver-list-bdlist p{color: #363636;font-size: 1.04rem;float: right;max-width: 70%;}
	.personalliver-list-bdlist em.personal-font1{margin-left: 1.88rem;}
	.personalliver-list-bdlist em.personal-font2{margin:0 0.48rem;}
</style>