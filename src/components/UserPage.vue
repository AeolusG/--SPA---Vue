<template>
  <v-row class="d-flex justify-space-around ma-8" v-if="oneUser">
    <v-col md="4">
      <v-card class=" flex-grow-1" color="white" height="25em" >
        <h2 class="text-h6">{{ oneUser.name }}</h2>
      </v-card>
    </v-col>
    <v-col xs="2">
      <v-card class="flex-grow-1" height="25em">
        <v-row class="d-flex justify-space-around ">
          <v-col xs="1">
            <h5 class="text-body-1 ma-2">Организация</h5>
            <v-card height="3em" class="pa-3 ma-2" label="введите должность" outlined>
              {{ oneUser.company.name }}
            </v-card>
            <h5 class="text-subtitle-1 ma-2">Слоган компании</h5>
            <v-card height="3em" class="pa-3 ma-2" label="введите должность" outlined>
              {{ oneUser.company.catchPhrase }}
            </v-card>
             <h5 class="text-subtitle-1 ma-2">Направление</h5>
            <v-card height="3em" class="pa-3 ma-2" label="введите должность" outlined>
              {{ oneUser.company.bs }}
            </v-card>   
          </v-col>

          <v-col xs="1">
            <h5 class="text-subtitle-1 ma-2">Номер телефона</h5>
            <v-card height="3em" class="pa-3 ma-2" label="введите должность" outlined>
              {{ oneUser.phone }}
            </v-card>
             <h5 class="text-subtitle-1 ma-2">Email</h5>
            <v-card height="3em" class="pa-3 ma-2" label="введите должность" outlined>
              {{ oneUser.email }}
            </v-card>
            <h5 class="text-subtitle-1 ma-2">Адрес проживания</h5>
            <v-card height="3em" class="pa-3 ma-2" label="введите должность" outlined>
              {{ oneUser.address.city }}, {{ oneUser.address.street }}, {{ oneUser.address.suite }}
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
 import {mapGetters} from 'vuex'
export default {
  name: "userPage",
   props: ["id"],
  data() {
     return {
    };
  },
  computed: mapGetters(['oneUser']),
  async created() {
    this.$store.dispatch('getUser',  this.$route.params.id)
  }
};
</script>

<style>
  v-card {
    height: 20px;
  }
</style>