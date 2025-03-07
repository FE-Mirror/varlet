<template>
  <div :class="classes(n(), 'var--box', [disabled, n('--disabled')])" @click="handleClick">
    <div
      :class="
        classes(
          n('controller'),
          [isFocus, n('--focus')],
          [errorMessage, n('--error')],
          [formDisabled || disabled, n('--disabled')]
        )
      "
      :style="{
        color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
        <slot name="prepend-icon" />
      </div>

      <div :class="classes(n('wrap'), [!hint, n('--non-hint')])">
        <input :class="n('autocomplete')" v-if="type === 'password'" />
        <textarea
          :class="
            classes(
              n('input'),
              n('--textarea'),
              [formDisabled || disabled, n('--disabled')],
              [errorMessage, n('--caret-error')]
            )
          "
          ref="el"
          autocomplete="new-password"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="modelValue"
          :maxlength="maxlength"
          :rows="rows"
          :style="{
            color: textColor,
            caretColor: !errorMessage ? focusColor : undefined,
            resize: resize ? 'vertical' : 'none',
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          v-if="textarea"
        >
        </textarea>
        <input
          :class="classes(n('input'), [formDisabled || disabled, n('--disabled')], [errorMessage, n('--caret-error')])"
          ref="el"
          autocomplete="new-password"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="modelValue"
          :maxlength="maxlength"
          :style="{
            color: textColor,
            caretColor: !errorMessage ? focusColor : undefined,
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          v-else
        />
        <label
          :class="
            classes(
              'var--ellipsis',
              [isFocus, n('--focus')],
              [errorMessage, n('--error')],
              [textarea, n('textarea-placeholder'), n('placeholder')],
              computePlaceholderState(),
              [!hint, n('--placeholder-non-hint')]
            )
          "
          :style="{
            color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
          }"
          :for="id"
        >
          {{ placeholder }}
        </label>
      </div>

      <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
        <slot name="append-icon">
          <var-icon
            :class="n('clear-icon')"
            var-input-cover
            name="close-circle"
            size="14px"
            v-if="clearable && !isEmpty(modelValue)"
            @click="handleClear"
          />
        </slot>
      </div>
    </div>

    <div
      :class="classes(n('line'), [formDisabled || disabled, n('--line-disabled')], [errorMessage, n('--line-error')])"
      :style="{ background: !errorMessage ? blurColor : undefined }"
      v-if="line"
    >
      <div
        :class="
          classes(
            n('dot'),
            [isFocus, n('--spread')],
            [formDisabled || disabled, n('--line-disabled')],
            [errorMessage, n('--line-error')]
          )
        "
        :style="{ background: !errorMessage ? focusColor : undefined }"
      ></div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import VarIcon from '../icon'
import { defineComponent, getCurrentInstance, ref, computed, nextTick } from 'vue'
import { props } from './props'
import { isEmpty } from '../utils/shared'
import { useValidation, createNamespace, call } from '../utils/components'
import { useForm } from '../form/provide'
import type { Ref, ComputedRef } from 'vue'
import type { ValidateTriggers } from './props'
import type { InputProvider } from './provide'

const { n, classes } = createNamespace('input')
export default defineComponent({
  name: 'VarInput',
  components: {
    VarIcon,
    VarFormDetails,
  },
  props,
  setup(props) {
    const id: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const el: Ref<HTMLInputElement | null> = ref(null)
    const isFocus: Ref<boolean> = ref(false)
    const maxlengthText: ComputedRef<string> = computed(() => {
      const { maxlength, modelValue } = props

      if (!maxlength) {
        return ''
      }

      if (isEmpty(modelValue)) {
        return `0 / ${maxlength}`
      }

      return `${String(modelValue).length}/${maxlength}`
    })
    const { bindForm, form } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const computePlaceholderState = () => {
      const { hint, modelValue } = props
      if (!hint && !isEmpty(modelValue)) {
        return n('--placeholder-hidden')
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        return n('--placeholder-hint')
      }
    }

    const handleFocus = (e: FocusEvent) => {
      isFocus.value = true

      call(props.onFocus, e)
      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: FocusEvent) => {
      isFocus.value = false

      call(props.onBlur, e)
      validateWithTrigger('onBlur')
    }

    const handleInput = (e: Event) => {
      let { value } = e.target as HTMLInputElement

      value = withTrim(value)

      call(props['onUpdate:modelValue'], value)
      call(props.onInput, value, e)
      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      const { value } = e.target as HTMLInputElement

      call(props.onChange, withTrim(value), e)
      validateWithTrigger('onChange')
    }

    const handleClear = () => {
      const { disabled, readonly, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      call(props['onUpdate:modelValue'], '')
      call(onClear, '')
      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)
      validateWithTrigger('onClick')
    }

    const withTrim = (value: string) => (props.modelModifiers.trim ? value.trim() : value)

    // expose
    const reset = () => {
      call(props['onUpdate:modelValue'], '')
      resetValidation()
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const focus = () => {
      ;(el.value as HTMLInputElement).focus()
    }

    // expose
    const blur = () => {
      ;(el.value as HTMLInputElement).blur()
    }

    const inputProvider: InputProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, inputProvider)

    return {
      el,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      n,
      classes,
      isEmpty,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      validate,
      resetValidation,
      reset,
      focus,
      blur,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../form-details/formDetails';
@import './input';
</style>
