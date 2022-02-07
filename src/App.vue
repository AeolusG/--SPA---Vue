<template>
  <v-app>
    <v-app-bar app color="#0288D1" class="ml-auto mr-auto">
      <h1 class="text-subtitle-1 text-lg-h4 text-md-h5 white--text">
        Тестовое задание
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
          Подкатилова Ольга Владимировна
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
};
</script>
