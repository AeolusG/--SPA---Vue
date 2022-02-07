<template>
  <div>
    <v-row class="d-flex justify-space-around mt-7 align-center" v-if="oneUser">
      <v-col cols="12" lg="6" xl="5">
        <div
          class="text-subtitle-1 text-lg-h4 text-md-h5 white--text pa-2 light-blue darken-2"
        >
          {{ oneUser.name }}
        </div>
        <v-img :src="oneUser.photo" class="img"> </v-img>
      </v-col>

      <v-col cols="12" lg="6" xl="7">
        <v-card class="flex-grow-1" color="#94cceb">
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="6" ld="4" class="white--text">
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Организация
              </div>
              <v-text-field
                v-model="oneUser.company.name"
                class="ma-4 text-caption text-lg-subtitle-1 text-md-body-1"
                readonly
                outlined
                solo
              >
              </v-text-field>
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Слоган компании
              </div>
              <v-text-field
                v-model="oneUser.company.catchPhrase"
                class="ma-4 text-caption text-lg-subtitle-1 text-md-body-1"
                readonly
                outlined
                solo
              >
              </v-text-field>
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Направление
              </div>
              <v-text-field
                v-model="oneUser.company.bs"
                class="ma-4 text-caption text-lg-subtitle-1 text-md-body-1"
                readonly
                outlined
                solo
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6" ld="4" class="white--text">
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Номер телефона
              </div>
              <v-text-field
                v-model="oneUser.phone"
                class="ma-4 text-caption text-lg-subtitle-1 text-md-body-1"
                readonly
                outlined
                solo
              >
              </v-text-field>
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Email
              </div>
              <v-text-field
                v-model="oneUser.email"
                class="ma-4 text-caption text-lg-subtitle-1 text-md-body-1"
                readonly
                outlined
                solo
              >
              </v-text-field>
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Адрес проживания
              </div>
              <v-text-field
                v-model="oneUser.address.city"
                class="ma-4 text-caption text-lg-subtitle-1 text-md-body-1"
                readonly
                outlined
                solo
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <alert
      v-if="getUserError"
      text="Произошла ошибка. Попробуйте повторить позже. :("
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import alert from "./alert";

export default {
  name: "user",
  components: {
    alert,
  },
  data() {
    return {
      getUserError: false,
    };
  },
  computed: mapGetters(["oneUser"]),
  async created() {
    try {
      await this.$store.dispatch("getUser", this.$route.params.id);
    } catch (error) {
      console.log(`Error ${error}`);
      this.getUserError = true;
    }
  },
};
</script>
