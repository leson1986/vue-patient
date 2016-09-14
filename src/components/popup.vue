<template>
	<div v-show="visible" class="mint-popup" :class="[position ? 'mint-popup-' + position : '']" :transition="popupTransition">
		<slot></slot>

	</div>
</template>

<script type="text/babel">

	export default {
		name: 'mt-popup',


		props: {
			visible: {
				default: false
			},

			modal: {
				default: false
			},

			closeOnClickModal: {
				default: true
			},

			popupTransition: {
				type: String,
				default: 'popup-slide'
			},

			position: {
				type: String,
				default: ''
			}
		},

		compiled() {
			if (this.popupTransition !== 'popup-fade') {
				this.popupTransition = `popup-slide-${ this.position }`;
			}
		}
	};
</script>