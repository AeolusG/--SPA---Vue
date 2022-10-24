<template>
  <div>
    <v-row class="align-center">
      <v-col cols="12" lg="6" xl="5">
        <v-btn :href="pathToTable" class="ma-2" color="primary">
          <v-icon dark left> mdi-arrow-left </v-icon>Назад
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-space-around mt-7 align-center" v-if="user">
      <v-col cols="12" lg="6" xl="5">
        <div
          class="text-subtitle-1 text-lg-h4 text-md-h5 white--text pa-2 light-blue darken-2"
        >
          {{ user.name }}
        </div>

        <v-img :src="user.photo" class="img"> </v-img>
      </v-col>

      <v-col cols="12" lg="6" xl="7">
        <v-card class="flex-grow-1" color="#94cceb">
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="6" ld="4" class="white--text">
              <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
                Организация
              </div>

              <v-text-field
                v-model="user.company.name"
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
                v-model="user.company.catchPhrase"
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
                v-model="user.company.bs"
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
                v-model="user.phone"
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
                v-model="user.email"
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
                v-model="user.address.city"
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

    <div class="loader" v-if="isLoading"></div>

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
      isLoading: true,
      pathToTable: this.$router.options.routes[0].path,
    };
  },

  computed: mapGetters(["user"]),

  async created() {
    try {
      await this.$store.dispatch("fetchUser", this.$route.params.id);
    } catch (error) {
      this.getUserError = true;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style>
.loader {
  font-weight: bold;
  font-family: sans-serif;
  color: #0288d1;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
  animation: line 2s linear infinite;
}

.loader::before {
  content: "Загрузка...";
}

@keyframes line {
  to {
    background-size: 100% 3px;
  }
}
</style>
