<template>
  <div>
    <div class="basic" :class="mood" @click="changeMood">{{ name }}</div>
    <div class="basic" :class="classArr">{{ name }}</div>

    <div class="basic" :class="classObj">
      {{ name }}
      <button @click="classObj.baidu2 = !classObj.baidu2">点击切换样式</button>
    </div>
    <br /><br />

    <div class="basic" :style="styleobj">
      {{ name }}
      <button @click="styleobj.backgroundColor = 'green'">11111</button>
    </div>
    <br /><br />

    <div class="basic" :style="styleArr">{{ name }}</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "高薪就业",
      mood: "normal",
      classArr: ["baidu1", "baidu2", "baidu3"],
      classObj: {
        baidu1: true,
        baidu2: false,
      },
      styleobj: {
        fontSize: "40rpx",
        color: "red",
        backgroundColor: "pink",
      },
      styleObj2: {
        backgroundColor: "orange",
      },
      styleArr: [
        {
          fontSize: "40rpx",
          color: "blue",
        },
        {
          backgroundColor: "gray",
        },
      ],
    };
  },
  methods: {
    changeMood() {
      const arr = ["happy", "sab", "normal"];
      const index = Math.floor(Math.random() * 3);
      this.mood = arr[index];
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.basic {
  width: 400px;
  height: 100px;
  border: 1px solid black;
}

.happy {
  border: 4px solid red;
  background-color: rgba(255, 255, 0, 0.644);
  background: linear-gradient(30deg, yellow, pink, orange, yellow);
}
.sad {
  border: 4px dashed rgb(2, 197, 2);
  background-color: gray;
}
.normal {
  background-color: skyblue;
}

.baidu1 {
  background-color: yellowgreen;
}
.baidu2 {
  font-size: 30px;
  text-shadow: 2px 2px 10px red;
}
.baidu3 {
  border-radius: 20px;
}
</style>
