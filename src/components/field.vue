<template>
  <div class="mint-field">
    <x-cell
      class="mint-field-cell"
      :title="label"
      :istitle="istitle"
      :class="[{ 'is-nolabel': !label }, {
        'is-textarea': type === 'textarea'
      }]">
      <textarea
        v-el:textarea
        class="mint-field-core"
        :placeholder="placeholder"
        v-if="type === 'textarea'"
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly"
        v-model="value">
      </textarea>
      <input
        v-el:input
        :id="ids"
        class="mint-field-core"
        :placeholder="placeholder"
        :number="type === 'number'"
        v-else
        :type="type"
        @focus="active = true"
        :disabled="disabled"
        :readonly="readonly"
        v-model="value"
        value="">
      <div
        @click="value = ''"
        class="mint-field-clear"
        v-show="value && type !== 'textarea' && active">
        <i class="mintui mintui-field-error"></i>
      </div>
      <span class="mint-field-state" v-if="state" :class="['is-' + state]">
        <i class="mintui" :class="['mintui-field-' + state]"></i>
      </span>
    </x-cell>
    <slot></slot>
  </div>
</template>

<script>
/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, number, email, url, tel, date, datetime, password, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <mt-field label="用户名"></mt-field>
 * <mt-field label="密码" placeholder="请输入密码"></mt-field>
 * <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
 * <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
 */
import XCell from './cell.vue'

export default {
  name: 'mt-field',

  data() {
    return {
      active: false
    };
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
	  istitle: Boolean,
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    state: {
      type: String,
      default: 'default'
    },
	  ids: String,
    value: {},
    attr: Object
  },

  components: {
    XCell
  },
  watch: {
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$els.input, this.$els.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>

</style>
