<template>
  <div>
    <Header></Header>
    <v-card
      flat
      tile
    >
      <v-window
        v-model="onboarding"
        horizontal
      >
        <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
          id="content"
        >
          <v-card
            color="pink"
            height="330"
            class="pl-12 pr-12"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <h4
                style="font-size: 3rem;"
                class="white--text"
                text-align="center"
              >
                {{ messages[n-1] }}
              </h4>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn
          text
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          text
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
  name: 'App',
  data: () => ({
    length: 3,
    onboarding: 0,
    messages: [
      'Welcome to our wedding website!',
      'We want to share this moment with all of you, and we would love to see our wedding by your eyes!',
      'Please, register or log in on the links above and share your photos with us!',
    ]
  }),
  methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  components: {
    Header,
  },
};
</script>
<style scoped>
#content {
  margin-top: 200px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>