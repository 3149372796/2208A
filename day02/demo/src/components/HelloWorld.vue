<template>
 <div>
  <!-- <span ref="cool">{{ cool }}</span> -->
  <span>{{ msg }}</span>
  <button ref="cools" @click="hello">子组件按钮</button>
 </div>
</template>

<script>
export default {
  props:['msg'],
 data () {
  return {
    cool:"初始值"

  }
 },
 methods: {
  hello(){
    console.log('我是子组件');
    
  }

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
