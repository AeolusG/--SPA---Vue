<template>
  <div>
    <v-row class="align-center">
      <v-col cols="12" lg="6" xl="5">
        <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-card v-if="!fetchUsersError" class="mt-7">
      <v-card
        class="text-left white--text text-subtitle-1 text-lg-h4 text-md-h5 pa-2"
        color="#0288D1"
      >
        Список пользователей
      </v-card>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        :search="search"
        no-data-text="Не найдена информация о пользователях"
      >
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
            :to="{ name: 'user', params: { id: item.id } }"
          >
            {{ item.name }}
          </router-link>
        </template>
      </v-data-table>
    </v-card>
    <alert v-else text="Произошла ошибка. Попробуйте повторить позже. :(" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import alert from "./alert";

export default {
  name: "usersList",
  components: {
    alert,
  },
  data() {
    return {
      search: "",
      items: [
        {
          text: "Таблица",
          disabled: false,
          href: "/SPA-on-vue/",
        },
      ],
      headers: [
        {
          text: "Имя пользователя",
          value: "name",
        },
        {
          text: "Никнейм",
          value: "username",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Сайт",
          value: "website",
        },
      ],
      fetchUsersError: false,
    };
  },
  computed: mapGetters(["users"]),
  async created() {
    try {
      await this.$store.dispatch("fetchUsers");
    } catch (error) {
      console.log(`Error - ${error}`);
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
