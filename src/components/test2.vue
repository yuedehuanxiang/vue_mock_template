<template>
  <div>
    <p>默认</p>
    <data-show :list="list">
    </data-show>
    <p>列表页</p>
    <data-show ref="show2" :list="list">
      <template slot-scope="slotProps">
        <span v-if="slotProps.item.complete">✓</span>
        <span v-else>x</span>
      </template>
    </data-show>
    <p>编辑页</p>
    <data-show :list="list">
      <template slot-scope="slotProps">
        <a v-if="slotProps.item.complete">查看</a>
        <a v-else>修改</a>
      </template>
    </data-show>
  </div>
</template>
<script>
  import DataShow from './DataShow';
  export default {
    name: 'parent',
    mounted(){
      console.log(this.$refs.show2);
    },
    components:{
      DataShow
    },
    data() {
      return {
        list:[
          {
            complete:true,
            title:'待办事项1'
          },
          {
            complete:true,
            title:'待办事项2'
          },
          {
            complete:false,
            title:'待办事项3'
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
