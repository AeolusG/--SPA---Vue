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
          <th class="text-left text-h5">Возраст</th>
          <th class="text-left text-h5">Email</th>
          <th class="text-left text-h5">Организация</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td class="pa-5 text-body-1">
              <router-link to="/Table/userPage">
              {{ user.name }}
              </router-link>
              </td>
          <td class="pa-5 body-1">{{ user.age }}</td>
          <td class="pa-5 body-1">{{ user.email }}</td>
          <td class="pa-5 body-1">{{ user.org }}</td>
        </tr>
      </tbody>
  </v-simple-table>
</v-card>
</template>



<script>
export default {
   name: "Table",
  data() {
    return {
      users: [
        {
          name: "Фродо Бэггинс",
          age: "26",
          email: "frodo@sheer.com",
          org: "ООО 'Шир'",
        },
        {
          name: "Бильбо Бэггинс",
          age: "78",
          email: "bilbo@sheer.com",
          org: "ООО 'Шир'",
        },
        {
          name: "Сэмуайз Гэмджи",
          age: "26",
          email: "sam@sheer.com",
          org: "ООО 'Фродо-инк'",
        },
        {
          name: "Эовин",
          age: "22",
          email: "eowyn@Rohan.com",
          org: "ООО 'Рохан'",
        },
      ],

    };
  },
};
</script>
