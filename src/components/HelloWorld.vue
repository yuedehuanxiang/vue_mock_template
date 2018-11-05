<template>
  <div>
    <!--&lt;!&ndash;<router-link target="_blank" :to="{name:'test1',query: { userId: 123 }}">Home</router-link>&ndash;&gt;-->
    <!--<Button ref="b" @click="change" type="primary">Primary22</Button>-->
    <router-link  :to="{name:'test1',query: { userId: 123 }}">Home111111111111</router-link>
    <!--<a href="#/test1" target="_blank">跳转</a>-->
    <!--{{aa}}-->

    index2


  </div>
</template>

<script>
  // app.use('/', proxy({
  //   // 代理跨域目标接口
  //   target: 'http://www.domain2.com:8080',
  //   changeOrigin: true,
  //
  //   // 修改响应头信息，实现跨域并允许带cookie
  //   onProxyRes: function(proxyRes, req, res) {
  //     res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
  //     res.header('Access-Control-Allow-Credentials', 'true');
  //   },
  //
  //   // 修改响应信息中的cookie域名
  //   cookieDomainRewrite: 'www.domain1.com' // 可以为false，表示不修改
  // }));

export default {
  components:{

  },
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  computed:{

  },
  methods: {
    getUserInfo() {
      //请求'/user/userinfo'接口
      // this.axios.get('/user/userinfo')
      //   .then(({data}) => {
      //     //打印mock data
      //     console.log(data);
      //
      //   }).catch((err) => {
      //   console.log(err);
      //   console.log(err.response);
      // })

      /*如果使用了proxy 就这么写*/
      // this.axios.get('/api/json')
      //   .then((data) => {
      //     //打印mock data
      //     console.log(data);
      //
      //   }).catch((err) => {
      //   console.log(err);
      //   console.log(err.response);
      // })
      /* 否则在服务器端配置 res.header("Access-Control-Allow-Origin", "*"); */
      this.axios.get('http://localhost:3000/json')
        .then((data) => {
          //打印mock data
          console.log(data);

        }).catch((err) => {
        console.log(err);
        console.log(err.response);
      })
    },
    getUser() {
      //请求'/user/userinfo'接口
      this.axios.get('/user/user')
        .then((response) => {
          //console.log(this.msg);
          console.log(response);
        });
    },
    getMusic () {
      this.axios.get('/mv/playlist/detail?id=2014761606')
        .then( res => {
          console.log(res);
        } )
    }
  },
  created(){
    this.getUserInfo();
    this.getUser();
    this.getMusic();
    //this.$utils.ergodic2({name:'cs'})
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
