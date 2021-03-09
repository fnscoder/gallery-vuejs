<template>
<div id="photo_detail" v-if="token != null">
  <v-col class="mb-5" cols="12" v-if="photo !== null">
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-item>
              <v-card
                class="mx-auto"
                max-width="580"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-img
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
                          @click="like"
                        >
                          <v-icon dark>
                            mdi-thumb-up
                          </v-icon>
                        </v-btn> <span class="small">Likes: {{ photo.likes }}</span>
                      </div>
                    </v-list-item-title>
                  </v-list-item-content>
                  </v-list-item>
                  <v-list-item-title class="headline mb-1">
                    <div class="">
                        <v-btn id="btn-add-comment" fab dark medium color="pink" :to="{name:'PhotoComment'}">
                          <v-icon dark>
                            mdi-message-text
                          </v-icon>
                        </v-btn>
                        <span id="span-add-comment" class="small">Add comment</span>
                    </div><span id="see-comments">Comments:</span>
                  </v-list-item-title>
                  <v-list-item 
                    three-line
                    v-for="comment in photo.comments" :key="comment.id"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="headline mb-1">
                        <div class="my-6">
                          <v-icon dark>
                            mdi-message-text
                          </v-icon>
                            {{ comment.comment }}<br>
                          <span class="small">
                            From: {{ comment.user.first_name }} {{ comment.user.last_name }}
                          </span>
                        </div>
                      </v-list-item-title>
                    </v-list-item-content>    
                  </v-list-item>
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
  
  const endpoint = process.env.VUE_APP_API_URL + 'photos/'

  export default ({
    data: () => ({
      photo: null,
      token: localStorage.getItem('user-token') || null,
    }),
    mounted() {
        let token = TokenService.getToken() 
        let axiosCongig = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        axios.get(endpoint + this.$route.params.id + '/', axiosCongig)
          .then(res => {
            this.photo = res.data;
            })
      },
      methods: {
        like () {
          let token = TokenService.getToken() 
          let axiosCongig = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }
          let photo_id
          photo_id = this.$route.params.id
          axios.post(endpoint + photo_id + '/like/', {}, axiosCongig)
          .then(res => {
            this.photo.likes = res.data.likes
          })
        }
      }
  })
</script>

<style scoped>
#photo_detail {
  margin-top: 70px;
}
#span-add-comment {
  margin-left: 12px;
}
#btn-add-comment {
  margin-left: 6px;
}
.small {
  font-size: 0.7em;
}
.see-comments {
  font-size: 0.8em;
}
</style>
