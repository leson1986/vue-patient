<template>
  <div>
	  <div id="container" style="min-width:320px;height:400px">123</div>
  </div>
</template>
<script>
	import $ from 'zepto'
	import Highcharts from 'highcharts'

	export default{
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },
		ready () {

			$(function () {

				new Highcharts.Chart({
					chart: {
						renderTo: 'container'
					},
					credits: {
						enabled: false
					},
					title: {
						text: null
					},
					xAxis: {
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
							'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
					},
					yAxis: {
						title: {
							text: ''
						}
					},
					plotOptions :
					{
						series:
						{
							connectNulls : true
						}
					},
					series: [{
						name: 'Tokyo',
						data: [7.0, 6.9, 9.5, null, '', 21.5, 25.2, 26.5, 24443.3, 18.3, 13.9, 9.6]
					}, {
						name: 'New York',
						data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, null, null, 2.5]
					}/*, {
					 name: 'Berlin',
					 data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
					 }, {
					 name: 'London',
					 data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
					 }*/]
				});
			});
		},
		components: {
		}
	}
</script>

<style>

</style>