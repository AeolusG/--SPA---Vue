<template>
<v-card class="ma-7">
    <v-card color="#94849B">
        <h3 class="text-left white--text text-h4">
Список пользователей
</h3>
    </v-card>
    <v-divider></v-divider>
  <v-simple-table >   
      <thead>
        <tr>
          <th class="text-left text-h5">Имя пользователя</th>
          <th class="text-left text-h5">Email</th>
          <th class="text-left text-h5">Сайт</th>
          <th class="text-left text-h5">Организация</th>
        </tr>
      </thead>
      <tbody>
        <tr class="name" v-for="user in allUsers" :key="user.id">
          <router-link
            v-bind="user in allUsers"
            active-class="is-active"
            :key="user.id"
            class="link"
            :to="{ name: 'UserPage', params: { id: user.id } }">
            <td class="pa-5 body-1">{{ user.name }}</td>
            <v-divider></v-divider>
        </router-link>
          <td class="pa-5 body-1">{{ user.email }}</td>
          <td class="pa-5 body-1">{{ user.website }}</td>
          <td class="pa-5 body-1">{{ user.company.name }}</td>
        </tr>
      </tbody>
  </v-simple-table>
</v-card>
</template>



<script>
import {mapGetters} from 'vuex'
export default {
   name: "Table",
      computed: mapGetters(['allUsers']),
       async  created() {
        this.$store.dispatch('fetchUsers')
}
}
</script>

<style>
  .link {
    text-decoration: none;
     
  }
  .link:hover {
    color: black;
  }
</style>