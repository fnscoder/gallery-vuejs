<template>
<div id="users">
  <v-col class="mb-5" cols="12">
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col
            v-for="user in users" :key="user.id"
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
                    <v-list-item-title class="headline mb-1">{{ user.email }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ user.username }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ user.first_name }} {{ user.last_name  }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-btn text>See profile</v-btn>
                </v-card-actions>
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

  const endpoint = 'http://localhost:8000/api/v1/users/'

  export default {
    name: 'Users',

    data: () => ({
      users: []
    }),
    mounted() {
      let token = TokenService.getToken() 
      let axiosCongig = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      axios.get(endpoint, axiosCongig)
        .then(res => {
          this.users = res.data;
          })
    },
    created() {
    }
  }
</script>

<style scoped>
#users {
  margin-top: 100px;
}
</style>