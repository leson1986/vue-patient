<template>
	<button
			class="mint-button"
			:class="['mint-button--' + type, 'mint-button--' + size, {
        'is-disabled': disabled,
        'is-plain': plain,
      }, otherClass]"
			@touchstart="handleClick">
    <span class="mint-button-icon" v-if="icon || _slotContents.icon">
      <slot name="icon">
        <i v-if="icon" class="iconfont" :class="'icon-wx-' + icon"></i>
      </slot>
    </span>
		<label class="mint-button-text" :class="{'leh-red-dot':reddot}" ><slot></slot></label>
	</button>
</template>

<script>
	/**
	 * mt-header
	 * @module components/button
	 * @desc 按钮
	 * @param {string} [type=default] - 显示类型，接受 default, transparent, primary, danger, green, blue, grey
	 * @param {boolean} [disabled=false] - 禁用
	 * @param {boolean} [plain=false] - 幽灵按钮
	 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
	 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
	 * @param {slot} - 显示文本
	 * @param {slot} [icon] 显示图标
	 *
	 * @example
	 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
	 */

	import cx from 'classnames'
	export default {
		name: 'mt-button',

		props: {
			icon: String,
			disabled: Boolean,
			plain: Boolean,
			className: String,
			reddot: Boolean,
			id: String,
			type: {
				type: String,
				default: 'default',
				validator(value) {
					return [
								'default',
								'transparent',
								'danger',
								'primary',
								'green',
								'blue',
								'grey'
							].indexOf(value) > -1;
				}
			},
			size: {
				type: String,
				default: 'normal',
				validator(value) {
					return [
								'small',
								'normal',
								'large'
							].indexOf(value) > -1;
				}
			}
		},

		computed: {
			otherClass () {
				return cx({
					[this.className]: !!this.className
				})
			}
		},

		methods: {
			handleClick($event) {
				if (this.disabled) {
					$event.preventDefault();
					$event.stopPropagation();
				}

				this.$dispatch('footer-button-event',$event)
			}
		}
	};
</script>

<style lang="css">

</style>
