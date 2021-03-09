<template>
  <div id="app">
    <v-app>
      <Header />
      <router-view />
      <v-main>
      </v-main>
    </v-app>
  </div>
</template>


<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header,
  },
};
</script>
