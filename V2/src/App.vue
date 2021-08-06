<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="(item, index) in list"
        style="padding-right: 10px"
        :key="index"
        :to="'/' + item"
      >
        {{ item }}
      </router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
import routeList from '@/router/config';
export default {
  name: 'App',
  computed: {
    list() {
      return routeList;
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
hr {
  margin: 30px 0;
}
</style>
