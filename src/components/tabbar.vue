<template>
  <div class="mint-tabbar" :class="{
      'is-fixed': fixed
    }, classed">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mt-tabbar
 * @module components/tabbar
 * @desc 底部 tab，依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 id
 *
 * @example
 * <mt-tabbar :selected.sync="selected">
 *   <mt-tab-item id="订单">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-tabbar>
 *
 * <mt-tabbar :selected.sync="selected" fixed>
 *   <mt-tab-item :id="['传入数组', '也是可以的']">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-tabbar>
 */

import cx from 'classnames'
export default {
  name: 'mt-tabbar',

  props: {
    fixed: Boolean,
	  className: String,
    selected: {}
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
