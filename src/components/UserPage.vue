<template>
  <v-row class="d-flex justify-space-around">
    <v-col md="4">
      <v-card class="ma-8 flex-grow-1" color="white" height="30em">
        <h2 class="text-h4">hello</h2>
      </v-card>
    </v-col>
    <v-col xs="2">
      <v-card class="ma-8 flex-grow-1" height="30em">
        <v-row class="d-flex justify-space-around pa-5">
          <v-col xs="1">
            <h5 class="text-subtitle-1 ma-4">Номер телефона</h5>
            <v-card height="3em" class="pa-3" label="введите должность" outlined v-if="user">
              {{ user.phone }}
            </v-card>
            <h5 class="text-subtitle-1">Номер телефона</h5>
            <v-card height="3em" class="pa-3" label="введите должность" outlined v-if="user">
              {{ user.phone }}
            </v-card>
            <h5 class="text-subtitle-1" >Номер телефона</h5>
            <v-card height="3em" class="pa-3" label="введите должность" outlined v-if="user">
              {{ user.phone }}
            </v-card>
          </v-col>

          <v-col xs="3">
            <h5 class="text-subtitle-1">Адрес проживания</h5>
            <v-text-field label="введите город и улицу" outlined v-if="user">
            </v-text-field>
            <h5 class="text-subtitle-1">Номер телефона</h5>
            <v-text-field
              label="введите номер телефона"
              outlined
              v-if="user"
            ></v-text-field>
            <h5 class="text-subtitle-1">Хобби</h5>
            <v-text-field
              label="какие у вас хобби"
              outlined
              v-if="user"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "userPage",
  props: ["id"],
  data() {
    return {
      user: null,
      endpoint: "https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users/",
    };
  },

  methods: {
    async getUser(id = "1") {
      let response = await fetch(`${this.endpoint}${id}`);
      this.user = await response.json();
    },
  },
  watch: {
    $route() {
      this.getUser(this.id);
    },
  },
  created() {
    this.getUser(this.id);
  },
};
</script>

<style>
  v-card {
    height: 20px;
  }
</style>