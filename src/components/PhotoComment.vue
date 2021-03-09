<template>
<v-container id="photoComment">
  <v-row align="center"
      justify="center">
  <v-col class="mb-5" cols="8">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    v-if="token!=null"
  > 
    <h2>Write your comment</h2>
    <v-text-field
      v-model="comment"
      label="Comment"
      required
    ></v-text-field>

    <v-btn
      color="primary"
      class="mr-4"
      @click="add_comment"
    >
      Add comment
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
  import axios from 'axios'
  
  const endpoint = process.env.VUE_APP_API_URL + 'photos/'

  export default {
    data: () => ({
      comment: '',
      valid: true,
      token: localStorage.getItem('user-token') || null,
    }),
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      add_comment () {
        let axiosCongig = {
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        }
        let photo_id
        photo_id = this.$route.params.id
        axios.post(endpoint + photo_id + '/comment/', {
          comment: this.comment
        }, axiosCongig)
        this.$router.push('/photos/' + photo_id + '/detail')
      }
    },
  }
</script>

<style scoped>
#photoComment {
  margin-top: 100px;
}
h2 {
  color: #1976D2;
}
</style>