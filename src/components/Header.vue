<template> 
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-spacer>
    <v-btn class="btn"
      :to="{name:'Home'}"
      text
    >
      <span class="title" :to="{name: 'Home'}"> Wedding Gallery</span>
    </v-btn>
    </v-spacer>
    <div v-if="token==null">
    <v-btn class="btn"
      :to="{name:'Login'}"
      text
    >
      <span class="mr-2">Login</span>
    </v-btn>
    <v-btn class="btn"
      :to="{name:'Register'}"
      text
    >
      <span class="mr-2">Register</span>
    </v-btn>
    </div>
    <div v-else>
      <v-btn
      text
      :to="{name: 'Photos'}"
      >
        <span class="mr-2">Photos</span>
      </v-btn>
      <v-btn
      text
      :to="{name: 'Admin'}"
      >
        <span class="mr-2">Admin</span>
      </v-btn>
      <v-btn
      text
      @click="logout"
      >
        <span class="mr-2">Log out</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
  export default {
    data: () => ({
      token: localStorage.getItem('user-token') || null,
    }),
    methods: {
      logout () {
        localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  }
</script>
<style scoped>
.btn {
  margin: 4px;;
}
</style>