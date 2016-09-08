<template>
	<m-header :isindex="true">
		<m-nav path="/patient/details" label="生活行为习惯"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<div class="liftbehave-box">
			<ul>
				<li class="personalbehavior-liftbehave-list js-personalbehavior-tap">
					<div class="personalbehavior-liftbehave-list-hd" @click="show_wine">
						<span>是否饮酒</span>
						<div class="fr">
							<span>是</span>
							<sapn class="mui-icon mui-icon-arrowright personalbehavior-farward js-personalbehavior-left"></sapn>
						</div>
					</div>
					<div class="personalbehavior-liftbehave-list-bd" v-show="showWine">
						<ul>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>品种</span>
								<p class="personalbehavior-lb-bdr">
									白酒、红酒、洋酒白酒、红酒、洋酒、白酒红酒、洋酒白酒、红酒、
								</p>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>年限</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">10<em>年</em></span>
								</div>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>平均次数</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">10<em>支/周</em></span>
								</div>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>平均数量</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">3<em>两/次</em></span>
								</div>
							</li>
						</ul>
					</div>
				</li>
				<!--抽烟-->
				<li class="personalbehavior-liftbehave-list js-personalbehavior-tap">
					<div class="personalbehavior-liftbehave-list-hd" @click="show_smoke">
						<span>是否吸烟</span>
						<div class="fr">
							<span>是</span>
							<sapn class="mui-icon mui-icon-arrowright personalbehavior-farward js-personalbehavior-left"></sapn>
						</div>
					</div>
					<div class="personalbehavior-liftbehave-list-bd" v-show="showSmoke">
						<ul>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>年限</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">30<em>年</em></span>
								</div>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>平均次数</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">10<em>支/周</em></span>
								</div>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>是否戒烟</span>
								<span class="fr">
											是
										</span>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>备注</span>
								<p class="personalbehavior-lb-bdr">
									抽烟有害健康，还是尽早戒烟为好啊！
								</p>
							</li>
						</ul>
					</div>
				</li>

				<!--鱼生-->
				<li class="personalbehavior-liftbehave-list js-personalbehavior-tap">
					<div class="personalbehavior-liftbehave-list-hd" @click="show_food">
						<span>是否吃鱼生</span>
						<div class="fr">
							<span>是</span>
							<sapn class="mui-icon mui-icon-arrowright personalbehavior-farward js-personalbehavior-left"></sapn>
						</div>
						</a>
					</div>
					<div class="personalbehavior-liftbehave-list-bd" v-show="showFood">
						<ul>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>种类</span>
								<p class="personalbehavior-lb-bdr">
									金枪鱼、三文鱼
								</p>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>最近时间</span>
								<span class="fr">
											2015-10
										</span>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>开始时间</span>
								<span class="fr">
											2005-02
										</span>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>平均时间</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">3<em>次/周</em></span>
								</div>
							</li>
							<li class="personalbehavior-liftbehave-list-bdli">
								<span>每次数量</span>
								<div class="fr">
									<span class="personalbehavior-lb-bdtxt">2<em>两/次</em></span>
								</div>
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

	export default{
		data () {
			return{
				showWine: false,
				showSmoke: false,
				showFood: false
			}
		},
		methods: {
			show_wine () {
				if(this.showWine){
					this.showWine = false
					return
				}
				this.showWine = true
			},
			show_smoke () {
				if(this.showSmoke){
					this.showSmoke = false
					return
				}
				this.showSmoke = true
			},
			show_food () {
				if(this.showFood){
					this.showFood = false
					return
				}
				this.showFood = true
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
	.personalbehavior-liftbehave-list{overflow: hidden;}
	.personalbehavior-liftbehave-list-hd{padding:0 0.8rem;height: 3.84rem;line-height: 3.84rem;font-size: 1.04rem;border-bottom: 1px solid #e5e5e5;overflow: hidden;}
	.personalbehavior-liftbehave-list-hd span{font-size: 1.04rem;}
	.personalbehavior-liftbehave-list-hd div.fr{color: #1dadfe;}
	.personalbehavior-liftbehave-list-bd{padding-left: 1.6rem;background-color: #f6f6f6;}
	.personalbehavior-liftbehave-list-bdli{overflow:hidden;padding-right: 0.8rem;border-bottom: 1px solid #e5e5e5;font-size: 0.94rem;padding: 0.96rem 0.8rem 0.96rem 0;}
	.personalbehavior-liftbehave-list-bdli p.personalbehavior-lb-bdr{max-width: 70%;float: right;}
	.personalbehavior-lb-bdtxt{float: right;font-size: 0.96rem;color: #363636;}
	.personalbehavior-lb-bdtxt em{font-size: 0.8rem;color: #919191;margin-left: 0.48rem;}
	.personalbehavior-liftbehave-list-bdli span{color: #363636;}
	.personalbehavior-liftbehave-list-bdli .fr{max-width: 75%;}
	.personalbehavior-farward{font-size: 1.4rem;color: #aaa;font-weight: bold;}
</style>