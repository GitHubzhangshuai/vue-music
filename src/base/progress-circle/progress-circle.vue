<template>
  <div class="progress-circle">
    <svg :width="radius" :height="radius" :viewBox="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" :r="radius" :cx="radius" :cy="radius" fill="transparent"/>
      <circle class="progress-bar" :r="radius" :cx="radius" :cy="radius" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset"/>
    </svg>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    radius: {
      type: Number,
      default: 50
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      dashArray: Math.PI * 2 * this.radius
    }
  },
  computed: {
    dashOffset () {
      return (1 - this.percent) * this.dashArray
    },
    viewBox () {
      return `0 0 ${this.radius * 2} ${this.radius * 2}`
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .progress-circle
    position: relative
    circle
      stroke-width: 8px
      transform-origin: center
      &.progress-background
        transform: scale(0.9)
        stroke: $color-theme-d
      &.progress-bar
        transform: scale(0.9) rotate(-90deg)
        stroke: $color-theme
</style>
