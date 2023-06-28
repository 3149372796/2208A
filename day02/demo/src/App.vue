<template>
  <div id="app">
    <HelloWorld :msg="msg"   ref="cools" />
    <button @click="btn">1111</button>
    <button @click="greet">greet</button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mixin from '../mixin/mixin.js'
  // 定义一个使用混入对象的组件
export default {
  name: 'App',
mixin:[mixin],
  components: {
    HelloWorld,
  },
  data() {
    return {
   
    msg:'欢迎学习',
    coolss:''
      
    }
   },
   methods: {
    greet(){
      this.greet()
    },
    btn(){
      // this.msg='222',
      // const coolss=this.$refs.cools
      // coolss.cool='新'
      const coolss=this.$refs.cools
      this.coolss.$refs.cools.click()

    }                                                                                                                                                                                                                                                                                                                                                                                                      
   },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
