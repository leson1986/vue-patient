<template>
	<header
			class="mint-header leh-bg-grey-head"
			:class="[{ 'is-fixed': fixed }, classed]">
		<div class="mint-header-button is-left">
			<slot name="left"></slot>
		</div>
		<h1 class="mint-header-title" :class="[{ 'leh-c-black': isgrey },]" v-text="title"></h1>
		<div class="mint-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script>
	/**
	 * mt-header
	 * @module components/header
	 * @desc 顶部导航
	 * @param {boolean} [fixed=false] - 固定顶部
	 * @param {string} [title] - 标题
	 * @param {slot} [left] - 显示在左侧区域
	 * @param {slot} [right] - 显示在右侧区域
	 *
	 * @example
	 * <mt-header title="我是标题" fixed>
	 *   <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
	 *   <mt-button slot="right" icon="more"></mt-button>
	 * </mt-header>
	 */
	import cx from 'classnames'
	export default {
		props: {
			fixed: Boolean,
			isgrey: Boolean,
			title: String,
			className: String
		},

		computed: {
			classed () {
				return cx({
					[this.className]: !!this.className
				})
			}
		}
	};
</script>

<style lang="css">

</style>
