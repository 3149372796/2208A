<template>
 <div>
    <ul>
        <li v-for="item in list" :key="item.id"> {{item.name}}----{{item.sex}}</li>
    </ul>
    <button @click="qhname"> 切换   </button>
 </div>
</template>

<script>
export default {
 data () {
  return {
    list:[
        {id:'001',name:'张',sex:'男'},
        {id:'002',name:'李',sex:'女'},
        {id:'003',name:'王',sex:'男'}
        ]

  }
 },
 methods: {
    qhname(){
        // this.list[0]= {id:'001',name:'7',sex:'男'}
        this.$set(this.list[0],'name',7)
        console.log(this.list);
       
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
\