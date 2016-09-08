<template>
<div class="leh-wrap" :class="classes">
  <slot></slot>
</div>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    className: ''
  },
  computed: {
    classes () {
      return cx({
        [this.className]: !!this.className,
        [`content-${this.type}`]: !!this.type
      })
    }
  }}
</script>