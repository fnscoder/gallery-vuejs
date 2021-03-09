<template>
  <div id="content" :key="addPhotoKey" v-if="token != null">
    
  <p>Select the new photo</p>
  <input type="file" label="select the photo" @change="onFileSelected">
  <v-text-field 
      v-model="description"
      label="Add some description"
    ></v-text-field>
  <v-btn
    color="primary"
    class="ml-8"
    @click="onUpload"
  >
    Submit
  </v-btn>
  </div>
</template>

<script>
  import axios from 'axios'
  import { TokenService } from '../storage/service'

  const endpoint = process.env.VUE_APP_API_URL + 'photos/'

  export default {
    data() {
      return {
        token: localStorage.getItem('user-token') || null,
        description: null,
        photo: null,
        message: null,
        addPhotoKey: 0,
      }
    },
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      onFileSelected(event) {
        let selectedFile = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
          this.photo = reader.result
        }
        reader.readAsDataURL(selectedFile)
      },
      onUpload() {
        let token = TokenService.getToken() 
        let axiosCongig = {
        headers: {
          'Authorization': 'Bearer ' + token
          }
        }
        let payload
        payload = {
          'description': this.description,
          'photo': this.photo
        } 
        axios.post(endpoint, payload, axiosCongig)
        .then(() => {
          this.$router.push('/photos')})
      }

    }
}
</script>

<style scoped>
#content {
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>