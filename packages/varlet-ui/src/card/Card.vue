<template>
  <div ref="card" :class="classes(n(), [isRow, n('--layout-row')])" @click="onClick">
    <div
      ref="cardFloater"
      :class="classes(n('floater'), [elevation, `var-elevation--${elevation}`, 'var-elevation--1'])"
      :style="{
        width: floaterWidth,
        height: floaterHeight,
        top: floaterTop,
        left: floaterLeft,
        overflow: floaterOverflow,
        position: floaterPosition,
        borderRadius: floating ? '0px' : undefined,
        zIndex: floated ? zIndex : undefined,
        transition: floated
          ? `background-color ${floatingDuration}ms, border-radius ${floatingDuration}ms, width ${floatingDuration}ms, height ${floatingDuration}ms, top ${floatingDuration}ms, left ${floatingDuration}ms`
          : undefined,
      }"
      v-ripple="{ disabled: !ripple || floater }"
    >
      <slot name="image">
        <img
          :class="n('image')"
          :style="{
            objectFit: fit,
            height: toSizeUnit(height),
            width: toSizeUnit(width),
          }"
          :src="src"
          :alt="alt"
          v-if="src"
        />
      </slot>

      <div :class="n('container')">
        <slot name="title">
          <div :class="n('title')" v-if="title">{{ title }}</div>
        </slot>
        <slot name="subtitle">
          <div :class="n('subtitle')" v-if="subtitle">{{ subtitle }}</div>
        </slot>
        <slot name="description">
          <div :class="n('description')" v-if="description">{{ description }}</div>
        </slot>
        <div :class="n('footer')" v-if="$slots.extra">
          <slot name="extra" />
        </div>
        <div
          :class="n('content')"
          :style="{
            height: contentHeight,
            opacity,
            transition: `opacity ${floatingDuration * 2}ms`,
          }"
          v-if="$slots.content && !isRow"
        >
          <slot name="content" />
        </div>
      </div>

      <div
        :class="classes(n('toolbar'), 'var--box')"
        :style="{
          zIndex,
          opacity,
          transition: `opacity ${floatingDuration * 2}ms`,
        }"
        v-if="showToolBar"
      >
        <slot name="toolbar-close">
          <var-button size="large" round :class="classes(n('toolbar-close'), 'var-elevation--6')" @click.stop="close">
            <var-icon name="window-close" size="24px" />
          </var-button>
        </slot>
        <slot name="toolbar-extra" />
      </div>
    </div>

    <div
      :class="n('holder')"
      :style="{
        width: holderWidth,
        height: holderHeight,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarIcon from '../icon'
import VarButton from '../button'
import { ref, defineComponent, watch, computed, nextTick } from 'vue'
import { props } from './props'
import { doubleRaf, toSizeUnit } from '../utils/elements'
import { call, createNamespace } from '../utils/components'
import { useZIndex } from '../context/zIndex'
import { useLock } from '../context/lock'
import type { Ref } from 'vue'

const { n, classes } = createNamespace('card')

const RIPPLE_DELAY = 500

export default defineComponent({
  name: 'VarCard',
  directives: { Ripple },
  components: {
    VarIcon,
    VarButton,
  },
  props,
  setup(props) {
    const card: Ref<null | HTMLElement> = ref(null)
    const cardFloater: Ref<null | HTMLElement> = ref(null)
    const holderWidth: Ref<string> = ref('auto')
    const holderHeight: Ref<string> = ref('auto')
    const floaterWidth: Ref<string> = ref('100%')
    const floaterHeight: Ref<string> = ref('100%')
    const floaterTop: Ref<string> = ref('auto')
    const floaterLeft: Ref<string> = ref('auto')
    const floaterPosition: Ref<string> = ref('static')
    const floaterOverflow: Ref<string> = ref('hidden')
    const contentHeight: Ref<string> = ref('0px')
    const opacity: Ref<string> = ref('0')
    const { zIndex } = useZIndex(() => props.floating, 1)
    const isRow = computed(() => props.layout === 'row')
    const showToolBar: Ref<boolean> = ref(false)
    const floated: Ref<boolean> = ref(false)

    useLock(
      () => props.floating,
      () => isRow
    )

    let dropdownFloaterTop = 'auto'
    let dropdownFloaterLeft = 'auto'
    let dropper: any = null
    const floater: any = ref(null)

    const floating = async () => {
      clearTimeout(floater.value)
      clearTimeout(dropper)

      floater.value = null

      floater.value = setTimeout(
        async () => {
          const { width, height, left, top } = card.value!.getBoundingClientRect()
          holderWidth.value = <string>toSizeUnit(width)
          holderHeight.value = <string>toSizeUnit(height)
          floaterWidth.value = holderWidth.value
          floaterHeight.value = holderHeight.value
          floaterTop.value = <string>toSizeUnit(top)
          floaterLeft.value = <string>toSizeUnit(left)
          floaterPosition.value = 'fixed'
          dropdownFloaterTop = floaterTop.value
          dropdownFloaterLeft = floaterLeft.value
          showToolBar.value = true

          await doubleRaf()

          floaterTop.value = '0'
          floaterLeft.value = '0'
          floaterWidth.value = '100vw'
          floaterHeight.value = '100vh'
          contentHeight.value = 'auto'
          opacity.value = '1'
          floaterOverflow.value = 'auto'
          floated.value = true
        },
        props.ripple ? RIPPLE_DELAY : 0
      )
    }

    const dropdown = () => {
      clearTimeout(dropper)
      clearTimeout(floater.value)
      floater.value = null

      floaterWidth.value = holderWidth.value
      floaterHeight.value = holderHeight.value
      floaterTop.value = dropdownFloaterTop
      floaterLeft.value = dropdownFloaterLeft
      contentHeight.value = '0px'
      opacity.value = '0'
      showToolBar.value = false

      dropper = setTimeout(() => {
        holderWidth.value = 'auto'
        holderHeight.value = 'auto'
        floaterWidth.value = '100%'
        floaterHeight.value = '100%'
        floaterTop.value = 'auto'
        floaterLeft.value = 'auto'
        dropdownFloaterTop = 'auto'
        dropdownFloaterLeft = 'auto'
        floaterOverflow.value = 'hidden'
        floaterPosition.value = 'static'
        floated.value = false
      }, props.floatingDuration)
    }

    const close = () => {
      call(props['onUpdate:floating'], false)
    }

    watch(
      () => props.floating,
      (value) => {
        if (isRow.value) return

        nextTick(() => {
          value ? floating() : dropdown()
        })
      },
      { immediate: true }
    )

    return {
      n,
      classes,
      toSizeUnit,
      card,
      cardFloater,
      holderWidth,
      holderHeight,
      floater,
      floaterWidth,
      floaterHeight,
      floaterTop,
      floaterLeft,
      floaterPosition,
      floaterOverflow,
      contentHeight,
      opacity,
      zIndex,
      isRow,
      close,
      showToolBar,
      floated,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import './card';
</style>
