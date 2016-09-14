<template>
	<mt-header fixed isgrey title="随访家园介绍">
		<mt-button v-link="'/user/about'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="introduce-text">
			<p>“随访家园”应用目标为规范病毒性肝炎管理治疗质量，按照最新标化规范化质控方案设计，致力为肝病医生提供病毒性肝炎标化规范化质控工具；“随访家园”应用可便捷管理患者病历、应用随访方案、客服过滤患者提问、数据批量导出用于统计处理科研随访数据，对医生和患者均方便易用；上传病历采用匿名分割条目识别、加密云存储以确保数据安全。</p>
			<p>“随访家园”应用包括医生端和患者端，医生端具备在线交流和患者管理两大核心功能，在线交流有两种形式：一是在线与患者进行实时图文或语音交流，二是提供留言服务；患者管理功能体现在医生可利用随访家园应用了解患者动态信息、患者图表化数据并进行科研项目管理。患者端具备线上咨询，病历管理，用药提醒，随访提醒四大主要功能。</p>
			<p>“随访家园”应用致力成为病毒性肝炎领域“医生的秘书、患者的管家”,全心全意为医生和患者提供以大数据为基础的安全、高效云随访服务。</p>
			<p>“随访家园”应用由广州乐而活健康管理咨询有限公司开发，广州乐而活健康管理咨询有限公司致力专注于提供慢病全程管理，将与广大医生、患者一起努力，为患者的早日康复提供更多更优质的专业服务。</p>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'

	export default{
	  data () {
	    return{
	      msg:'hello vue'
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

	.introduce-text{padding: 10px;}
	.introduce-text p{font-size: 14px;line-height: 25px;margin-bottom: 8px;text-indent: 2em;}
</style>