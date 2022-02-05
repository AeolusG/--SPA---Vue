
<template>
<v-card class="ma-7">
    <v-card color="#0288D1">
        <h3 class="text-left white--text text-h4">
Список пользователей
</h3>
    </v-card>
    <v-divider></v-divider>
  <v-data-table 
    :headers="headers"
    :items="allUsers"
    :items-per-page="5"
    :search="search"
  
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
            v-bind="item in allUsers"
            active-class="is-active"
            :key="item.id"
            class="link"
            :to="{ name: 'UserPage', params: { id: item.id } }">
            <td class="pa-5 body-1">{{ item.name }}</td>
        </router-link>
    </template>
  </v-data-table>
</v-card>
</template>



<script>
import {mapGetters} from 'vuex'
export default {
   name: "Table",
   props: ['allUsers'],
   data() {
     return {
       search: '',
       headers: [
         {
           text: 'Имя пользователя',
           value: 'name',
         },
          {
           text: 'Никнейм',
           value: 'username',
         },
          {
           text: 'Email',
           value: 'email',
         },
          {
           text: 'Сайт',
           value: 'website',
         },
       ],
       
     }
   },
      computed: mapGetters(['allUsers']),
       async  created() {
        this.$store.dispatch('fetchUsers')
},

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