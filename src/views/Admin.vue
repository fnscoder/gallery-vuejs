<template>
  <div id="app">
    <v-app>
      <Header />
      <router-view />
      <v-main>
        <v-container id="admin" v-if="is_staff == true">
          <v-alert
            dense
            prominent
            text
            align="center"
            type="success"
          >Admin interface
          </v-alert>
          <v-row align="center"
              justify="center">
            <v-col class="mb-5" cols="6">
              <v-btn
              color="primary"
              class="mr-4 mt-12"
              @click="btnWaitingToApprove"
              >Waiting to approve
              </v-btn>
              <v-btn
              color="primary"
              class="mr-2 mt-12"
              @click="btnAlreadyApproved"
              >Already approved
              </v-btn>
            </v-col>
          </v-row>
          <v-row 
            v-if="waitingToApprove === true"
            align="center"
            justify="center"
          >
            <v-col
              v-for="photo in photosToApprove" :key="photo.id"
              cols="12"
              md="4"
            >
              <v-item-group>
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
                        <v-list-item class="mb-1">Uploaded by: {{ photo.owner.first_name }} {{ photo.owner.last_name }}</v-list-item>
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
                              color="primary"
                              @click="approve(photo.id)"
                            >
                              <v-icon dark>
                                mdi-check-bold
                              </v-icon>
                            </v-btn> Approve
                          </div>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row>
          <v-row 
            v-if="alreadyApproved === true"
            align="center"
            justify="center"
          >
          <v-col
            v-for="photo in photosAlreadyApproved" :key="photo.id"
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
                    <v-list-item class="mb-1">Uploaded by: {{ photo.owner.first_name }} {{ photo.owner.last_name }}</v-list-item>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        </v-container>
        <div v-if="is_staff != true">
          <v-alert
            dense
            prominent
            text
            align="center"
            type="error"
          >Sorry, but you can not access this page
          </v-alert>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
  import axios from 'axios'
  import { TokenService } from '../storage/service'

  const endpoint = process.env.VUE_APP_API_URL + 'photos/'
  const endpoint_profile = process.env.VUE_APP_API_URL + 'profile/'

  export default {
    name: 'Photos',

    data: () => ({
      token: TokenService.getToken(),
      is_staff: false,
      waitingToApprove: false,
      alreadyApproved: false,
      photosToApprove: [],
      photosAlreadyApproved: [],
      axiosConfig: {}
    }),
    mounted() {
      this.axiosConfig = {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      }
      axios.get(endpoint_profile, this.axiosConfig)
      .then(res => {
        if (res.data.is_staff === true) {
          this.is_staff = true
          axios.get(endpoint + 'waiting_to_approve/', this.axiosConfig)
          .then(res => {
            this.photosToApprove = res.data;
            })
          axios.get(endpoint + 'already_approved/', this.axiosConfig)
            .then(res => {
              this.photosAlreadyApproved = res.data;
            })
        }
      })
    },
    methods: {
      approve(photo_id) {
        axios.post(endpoint + photo_id + '/approve/', {}, this.axiosConfig)
        this.$router.push('/photos/' + photo_id + '/detail')
      },
      btnWaitingToApprove() {
        this.waitingToApprove = true
        this.alreadyApproved = false
      },
      btnAlreadyApproved() {
        this.alreadyApproved = true
        this.waitingToApprove = false
      }
    }
  }
</script>