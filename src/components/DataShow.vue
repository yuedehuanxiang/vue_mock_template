<template>
  <div>
    <ul>
      <li v-for="item in list">
        <span>{{item.title}}</span>
        <slot v-bind:item="item">
          <div>
            不传slot-scope时
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {

    props:['list'],

    data() {
      return {
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
