<template>
 <div>
  <slot :gemes="gemes" name="child"></slot>
  <slot></slot>
 </div>
</template>

<script>
export default {
 data () {
  return {
    gemes:[{
        name:'吃鸡'
      },{
        name:'王者荣耀'
      },{
        name:'跑酷'
      }]
  }
 },
 methods: {

 },
 created () {

 },
 mounted () {

 },
 components: {

 },
 computed: {

 },
 watch: {

 },
}
</script>

<style lang='scss' scoped>
</style>
