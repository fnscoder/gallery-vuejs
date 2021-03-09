<template>
<v-container id="register">
  <v-row align="center"
      justify="center">
  <v-col class="mb-5" cols="8">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    
    :key="registerKey"
    v-if="token==null"
  > 
    <h2>Registration form</h2>
    <v-text-field
      v-model="firstName"
      :counter="10"
      :rules="nameRules"
      label="first name"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :counter="10"
      :rules="nameRules"
      label="last name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="e-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :type="show1 ? 'text' : 'password'"
      :rules="passwordRules"
      label="Password"
      hint="At least 8 characters"
      counter
    ></v-text-field>

    <v-btn
      color="primary"
      class="mr-4"
      @click="register"
    >
      Register
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
  import axios from 'axios'

  const endpoint = process.env.VUE_APP_API_URL + 'auth/register/'

  export default {
    name: "Register",
    data: () => ({
      show1: false,
      registerKey: 0,
      valid: true,
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
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
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      register () {
        this.$refs.form.validate()
        axios.post(endpoint, {
          email: this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName
        })
        .then(res => {this.token = res.data.auth_token;
          localStorage.setItem('user-token', res.data.auth_token)
          .then(this.registerKey += 1)
        })
        .catch(localStorage.removeItem('user-token'))
        this.$router.push('/')
      }
    },
  }
</script>

<style scoped>
#register {
  margin-top: 100px;
}
h2 {
  color: #1976D2;
}
</style>