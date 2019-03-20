<template>
  <div id="app">
    <ul class="tabBar">
      <router-link to="/invest" tag="li">投资</router-link>
      <router-link to="/safe" tag="li">安全</router-link>
      <router-link to="/account" tag="li">账户</router-link>
      <router-link to="/found" tag="li">发现</router-link>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  .tabBar {
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background:rgb(246, 242, 242);
    display:flex;
    width:100%;
    height:50px;
    line-height:50px;
    li{
      flex:1;
      text-align:center;
    }
  }
  .router-link-active{
    color:red;
    text-decoration: underline;
  }
</style>
