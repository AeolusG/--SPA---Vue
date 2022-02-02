
<template>
  <v-app>
    <v-app-bar
      app
      color="#94849B"
      shrink-on-scroll
      width="97%"
      class="ml-auto mr-auto"
  >
  <v-app-bar-title width="25%">
        <h1 class="text-h3  white--text">
        Приложение</h1>
        </v-app-bar-title>
    </v-app-bar>

    <v-main>
       <router-view/> 
    </v-main>
    <v-footer
    padless
  >
    <v-card
      flat
      tile
      color="#94849B"
      width="97%"
      class="white--text ml-auto mr-auto text-center"
    >

      <v-card-text class="white--text pt-0">
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
  name: 'App',
  
  data: () => ({

  }),

};
</script>
