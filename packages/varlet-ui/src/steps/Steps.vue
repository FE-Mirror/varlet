<template>
  <div :class="n()" :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStep } from './provide'
import { props } from './props'
import type { ComputedRef } from 'vue'
import type { StepsProvider } from './provide'
import { createNamespace, call } from '../utils/components'

const { n } = createNamespace('steps')

export default defineComponent({
  name: 'VarSteps',
  props,
  setup(props) {
    const active: ComputedRef<number | string> = computed(() => props.active)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
    const direction: ComputedRef<string> = computed(() => props.direction)

    const { length, bindStep } = useStep()

    const clickStep = (index: number) => {
      call(props.onClickStep, index)
    }

    const stepsProvider: StepsProvider = {
      active,
      length,
      direction,
      activeColor,
      inactiveColor,
      clickStep,
    }

    bindStep(stepsProvider)
    return {
      n,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';

.var-steps {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
