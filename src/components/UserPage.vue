<template>
  <v-row class="d-flex justify-space-around ma-8 align-center" v-if="oneUser">
    <v-col md="4" lg="4">
      <v-card  color="#94cceb" >
        <h2 class="text-h6 white--text" >{{ oneUser.name }}</h2>
        <v-img
        :src="oneUser.photo"
        class="img">
          
        </v-img>
      </v-card>
    </v-col>
    <v-col md="4" lg="7">
      <v-card class="flex-grow-1"  color="#94cceb" >
        <v-row class="d-flex justify-space-around ">
          <v-col ld="4" class="white--text">
            <h5 class="text-body-1 ma-2">Организация</h5>
            <v-card height="3em" class="pa-3 ma-2 font" label="введите должность" outlined>
              <span class="font">{{ oneUser.company.name }} </span>
            </v-card>
            <h5 class="text-subtitle-1 ma-2">Слоган компании</h5>
            <v-card height="3em" class="pa-3 ma-2 font" label="введите должность" outlined>
              {{ oneUser.company.catchPhrase }}
            </v-card>
             <h5 class="text-subtitle-1 ma-2">Направление</h5>
            <v-card height="3em" class="pa-3 ma-2 font" label="введите должность" outlined>
              {{ oneUser.company.bs }}
            </v-card>   
          </v-col>

          <v-col ld="4" class="white--text">
            <h5 class="text-subtitle-1 ma-2">Номер телефона</h5>
            <v-card height="3em" class="pa-3 ma-2 font" label="введите должность" outlined>
              {{ oneUser.phone }}
            </v-card>
             <h5 class="text-subtitle-1 ma-2">Email</h5>
            <v-card height="3em" class="pa-3 ma-2 font" label="введите должность" outlined>
              {{ oneUser.email }}
            </v-card>
            <h5 class="text-subtitle-1 ma-2">Адрес проживания</h5>
            <v-card height="3em" class="pa-3 ma-2 font" label="введите должность" outlined>
              <span>{{ oneUser.address.city }}, {{ oneUser.address.street }}, {{ oneUser.address.suite }}</span>
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
@media (max-width: 600px) {
  .font{
    font-size: 5px;
  }
}
  .font{
    font-size: 1rem;
    overflow-y: scroll;
  }

</style>