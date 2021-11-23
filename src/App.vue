<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log(this.api)
    // this.api.getMovie({id:33410979}).then(res=>{
    //   console.log(res,888);
    // })
    // this.api.getLessons().then(res=>{
    //   console.log(res,888);
    // })
  }
}
</script>

<style lang="scss">
#app {
    height: 100%;
    > div {
        height: 100%;
    }
}
</style>
