<template>
  <v-card v-if="!fetchUsersError" class="mt-7 mb-7">
    <v-card-title
      class="text-left white--text text-subtitle-1 text-lg-h4 text-md-h5 pa-0 rounded-lg"
    >
      <v-img
        src="../assets/imgs/Premium Photo _ Dark blue abstract background_ visual trend.jpeg"
        class="align-end rounded-lg"
        height="100px"
        alt="starry background"
        cover
      >
        <v-card-title class="white--text text-h4">
          {{ title }}
        </v-card-title>
      </v-img>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      :search="search"
      :footer-props="{
        'items-per-page-text': perPage,
      }"
    >
      <template v-slot:no-results>
        {{ noResults }}
      </template>
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Поиск"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:[`item.name`]="{ item }">
        <router-link
          v-bind="item in users"
          :key="item.id"
          class="link text-decoration-none"
          :to="{ name: 'User', params: { id: item.id } }"
        >
          {{ item.name }}
        </router-link>
      </template>
    </v-data-table>
    <v-alert type="error" class="alert" v-if="fetchUsersError">
      {{ noData }}
    </v-alert>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { usersTitles, noResults, noData, rowsPerPage } from "../api/enums";

export default {
  name: "UsersList",

  data() {
    return {
      search: "",
      title: usersTitles.title,

      headers: [
        {
          text: usersTitles.name,
          value: "name",
        },
        {
          text: usersTitles.userName,
          value: "username",
        },
        {
          text: usersTitles.email,
          value: "email",
        },
        {
          text: usersTitles.webSite,
          value: "website",
        },
      ],
      noResults: noResults.text,
      noData: noData.text,
      perPage: rowsPerPage.perPage,
      fetchUsersError: false,
    };
  },

  computed: mapGetters(["users"]),

  async created() {
    try {
      await this.$store.dispatch("fetchUsers");
    } catch (error) {
      this.fetchUsersError = true;
    }
  },
};
</script>

<style scoped>
.link:hover {
  color: black;
}

.alert {
  top: 30px;
}
</style>
