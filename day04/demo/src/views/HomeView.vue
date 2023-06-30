<template>
 <div>
 <input type="text" name="" id="" v-model="fullName"><br/>
 <input type="text" name="" id="" v-model="lastName"><br/>
 <input type="text" name="" id="" v-model="fulls"><br/>
 今天天气很{{cool}}
 <button @click="btn">切换</button>


 <texts></texts>
 </div>
</template>

<script>
import texts from '../components/tests.vue'

export default {
 data () {
  return {
    fullName:'111',
    lastName:'2222',
    cool:"炎热",
    status:true,
  }
 },

methods: {
  btn(){
    this.status=!this.status
  }

 },
 created () {

 },
 mounted () {

 },
 components: {
  texts,

 },
 computed: {
  // fulls:{
  //   get(){
  //     return this.fullName + '-' + this.lastName
  //   },
  //   set(newValue) {
  //     console.log(newValue.split('-'));
  //   }

  // }
  fulls(){
    return this.fullName + '-' + this.lastName
  }

 },
 watch: {
status(newValue){

  console.log(newValue);
  this.cool=newValue?'炎热':'凉爽'
  console.log(this.cool);
},
deep:true

 },
}
</script>

<style lang='scss' scoped>
</style>
