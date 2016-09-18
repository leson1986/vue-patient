<template>
	<mt-header fixed isgrey title="医生公告">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class="page-infinite">
		<div class="page-cell disease-list page-infinite-wrapper" v-el:wrapper :style="{ height: wrapperHeight + 'px' }">
			<div class="page-infinite-list" v-infinite-scroll="loadMore()" infinite-scroll-disabled="loading" infinite-scroll-distance="50">

				<mt-cell v-for="item in list" title="林医生公告更新" value="2013-10-25" istitle v-link="{path: '/user/noticeDetail', replace: true}"></mt-cell>
			</div>
			<p v-show="loading" class="page-infinite-loading">
				<mt-spinner type="fading-circle"></mt-spinner>
				加载中...
			</p>
		</div>
	</mt-content>
</template>
<script>
	import MtHeader from '../../components/header.vue'
	import MtContent from '../../components/content.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import MtSpinner from '../../components/spinner.vue'

	export default{
		data () {
			return{
				list: [],
				loading: false,
				allLoaded: false,
				wrapperHeight: 0
			}
		},

		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for (let i = 1; i <= 10; i++) {
						this.list.push(last + i);
					}
					this.loading = false;
				}, 2500);
			}
		},

		compiled() {
			for (let i = 1; i <= 20; i++) {
				this.list.push(i);
			}
		},

		ready() {
			this.wrapperHeight = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top;
		},

		components: {
			MtHeader,
			MtContent,
			MtButton,
			MtCell,
			MtSpinner
		}
	}
</script>

<style>
	.notice-list .mint-cell:after{border: 0;}
	.notice-list .mint-cell:before{left: 0;}
</style>