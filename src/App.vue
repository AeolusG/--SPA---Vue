<template>
  <v-app>
    <v-app-bar app color="light-blue darken-2" class="ml-auto mr-auto">
      <h1 class="text-subtitle-1 text-lg-h4 text-md-h5 white--text">
        {{ title }}
      </h1>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-card
        flat
        tile
        color="#0288D1"
        width="100%"
        class="white--text ml-auto mr-auto text-center"
      >
        <v-card-text class="white--text pt-2">
          {{ author }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>{{ library }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { tableTitles } from "./api/enums";

export default {
  data() {
    return {
      title: tableTitles.author,
      author: tableTitles.author,
      library: tableTitles.library,
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
