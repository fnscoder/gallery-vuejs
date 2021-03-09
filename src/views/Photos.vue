<template>
<div id="photos" v-if="token != null">
  <div class="">
    <p class="text-right">
      <v-btn id="btn-add-photo" fab dark medium color="pink" :to="{name:'PhotoAdd'}">
        <v-icon dark>
          mdi-camera-plus
        </v-icon>
      </v-btn><br>
      <span id="span-add-photo">New photo</span>
    </p>
  </div>
  <v-col class="mb-5" cols="12" v-if="photos.length > 0">
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col
            v-for="photo in photos" :key="photo.id"
            cols="12"
            md="4"
          >
            <v-item>
              <v-card
                class="mx-auto"
                max-width="344"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-img
                    v-if=photo.photo_url
                    :src=photo.photo_url
                    contain
                  />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      <div class="my-2">
                        <v-btn 
                          fab 
                          dark 
                          x-small 
                          color="pink"
                          @click="like(photo.id)"
                        >
                          <v-icon dark>
                            mdi-thumb-up
                          </v-icon>
                        </v-btn> Likes: {{ photo.likes }}
                      </div>
                    </v-list-item-title>
                  </v-list-item-content>
                  </v-list-item>
                <v-card-actions>
                  <v-btn text :to="'/photos/' + photo.id + '/detail'">See and add comments <span v-if="photo.comments.length > 0">({{ photo.comments.length }})</span></v-btn>
                </v-card-actions>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item class="mb-1">Uploaded by: {{ photo.owner.first_name }} {{ photo.owner.last_name }}</v-list-item>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-col>
</div>
</template>

<script>
  import axios from 'axios'
  import { TokenService } from '../storage/service'

  const API_URL = process.env.VUE_APP_API_URL

  export default {
    name: 'Photos',

    data: () => ({
      token: localStorage.getItem('user-token') || null,
      photos: []
    }),
    mounted() {
      let token = TokenService.getToken() 
      let axiosCongig = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      console.log(process.env.VUE_APP_API_URL)
      axios.get(API_URL + 'photos/', axiosCongig)
        .then(res => {
          this.photos = res.data;
          })
    },
    methods: {
      like(photo_id) {
        let token = TokenService.getToken() 
        let axiosCongig = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        axios.post(API_URL + 'photos/' + photo_id + '/like/', {}, axiosCongig)
        this.$router.push('/photos/' + photo_id + '/detail')
      }
    }
  }
</script>

<style scoped>
#photos {
  margin-top: 70px;
}
#btn-add-photo {
  margin-right: 25px;
}
#span-add-photo {
  margin-right: 15px;
}
</style>