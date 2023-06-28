const myMixin = {
    data() {
      return {
        message:'Hello ,mixin'
      }
    },
    methods: {
      greet(){
        console.log(this.message);
      }
    },
  }
  export default myMixin
