<template>
<v-container id="login">
  <v-row align="center"
      justify="center">
  <v-col class="mb-5" cols="8">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="login"
    v-if="token==null"
    :key="loginKey"
  >
    <h2>Login form</h2>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="e-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      :rules="passwordRules"
      label="Password"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="login"
    >
      Login
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Cancel
    </v-btn>

  </v-form>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
  import axios from 'axios'

  const endpoint = process.env.VUE_APP_API_URL + 'auth/login/'

  export default {
    name: "Login",
    data: () => ({
      loginKey: 0,
      show1: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      token: localStorage.getItem('user-token') || null,
    }),

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      login () {
        this.$refs.form.validate()
        axios.post(endpoint, {
          email: this.email,
          password: this.password,
        })
        .then(res => {this.token = res.data.auth_token;
          localStorage.setItem('user-token', res.data.auth_token)
        }).then(() => {
          this.$router.push('/photos')})
        .catch(localStorage.removeItem('user-token'))
      }
    }
  }
</script>

<style scoped>
#login {
  margin-top: 100px;
}
h2 {
  color: #1976D2;
}
</style>
