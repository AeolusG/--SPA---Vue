<template>
  <div>
    <v-row class="align-center">
      <v-col cols="12" lg="6" xl="5">
        <router-link :to="{ name: 'UsersList' }">
          <v-btn class="ma-2" color="primary">
            <v-icon dark left> mdi-arrow-left </v-icon> {{ button }}
          </v-btn>
        </router-link>
      </v-col>
    </v-row>

    <v-row v-if="user" class="mb-5" cols="12" lg="10" xl="7">
      <v-card class="flex-grow-1 light-blue darken-2">
        <v-img
          src="../assets/imgs/Premium Photo _ Dark blue abstract background_ visual trend.jpeg"
          class="align-end rounded-lg"
          height="100px"
          alt="starry background"
          cover
        >
          <v-card-title class="white--text text-h4">
            {{ user.name }}
          </v-card-title>
        </v-img>
        <v-row class="d-flex justify-space-around mt-5">
          <v-col cols="12" md="6" ld="4" class="white--text">
            <div class="text-subtitle-1 text-lg-h6 text-md-h5 mx-4">
              {{ userProperties.companyName }}
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
              {{ userProperties.companyCatchPhrase }}
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
              {{ userProperties.companyBs }}
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
              {{ userProperties.phoneNumber }}
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
              {{ userProperties.companyEmail }}
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
              {{ userProperties.companyAdress }}
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
    </v-row>

    <div class="loader" v-if="isLoading"></div>
    <v-alert type="error" class="alert" v-if="getUserError">
      {{ alert }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userProperties, alertMsg, btn } from "../api/enums";

export default {
  name: "User",

  data() {
    return {
      getUserError: false,
      isLoading: true,
      userProperties: {
        companyName: userProperties.companyName,
        companyCatchPhrase: userProperties.companyCatchPhrase,
        companyBs: userProperties.companyBs,
        phoneNumber: userProperties.phoneNumber,
        companyEmail: userProperties.companyEmail,
        companyAdress: userProperties.companyAdress,
      },
      alert: alertMsg.text,
      button: btn.btnMessage,
    };
  },

  computed: mapGetters(["user"]),

  beforeDestroy() {
    this.$store.commit("resetUserData");
  },

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
