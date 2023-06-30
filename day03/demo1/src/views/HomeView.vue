<template>
 <div>
  <button @click="go">跳转abs</button>
<button @click="tz">跳转</button>
 </div>
</template>

<script>
export default {
 data () {
  return {

  }
 },
 methods: {
  go(){
    this.$router.push('/about')
  },
  tz(){
    this.$router.push('/about/+5')
    //  this.$router.push({
    //     path:'/about',
    //     query:{
    //         name:'about',
    //         id:3
    //         }
    //     })8

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
