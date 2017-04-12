<template>
  <div class="page page-current">
      <!--<bar v-if="isIndex">
        <bar-item path="/home" label="首页" icon="home"></bar-item>
        <bar-item path="/tasks" label="任务" icon="tasks"></bar-item>
        <bar-item path="/list" label="列表" icon="mytask"></bar-item>
        <bar-item path="/user" label="我自己" icon="me"></bar-item>
        <bar-item path="/more" label="更多" icon="more"></bar-item>
      </bar>-->

      <router-view keep-alive></router-view>
  </div>
</template>

<script>
import $ from 'zepto'
import wx from 'wx'
import {pageConfig, getOpenID} from 'wxconfig'

export default {
  ready () {
    // 微信配置

  },
  data () {
    return {
	    mtitle: '咨询中心',
	    isShow: true,
	    isBack: false,
	    isUrl: ''
    }
  },
	events: {
		setIsHead (data) {
		}
	},
  components: {
  }
}
</script>

<style>
	@import './assets/css/common.css';

	[v-cloak] {
	  display: none;
	}
	.fade-transition {
	  transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
</style>
