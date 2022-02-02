<template>
  <v-row class="d-flex justify-space-around">
    <v-col md="4">
      <v-card class="ma-8 flex-grow-1" color="white" height="30em">
        <h2 class="text-h4">
          {{ info.title }}
        </h2>
        <v-img
          :src="info.img"
        ></v-img>
      </v-card>
    </v-col>
    <v-col xs="2">
      <v-card class="ma-8 flex-grow-1" height="30em">
        <v-row class="d-flex justify-space-around pa-5">
          <v-col  xs="1">
            <h5 class="text-subtitle-1">Должность</h5>
            <v-text-field v-model="position" label="введите должность" outlined></v-text-field>
            <h5 class="text-subtitle-1">Стаж работы</h5>
            <v-text-field label="введите стаж работы" outlined></v-text-field>
            <h5 class="text-subtitle-1">Навыки</h5>
            <v-text-field
              label="какими навыками вы обладаете"
              outlined
            ></v-text-field>
          </v-col>

          <v-col  xs="3">
            <h5 class="text-subtitle-1">Адрес проживания</h5>
            <v-text-field label="введите город и улицу" outlined></v-text-field>
            <h5 class="text-subtitle-1">Номер телефона</h5>
            <v-text-field
              label="введите номер телефона"
              outlined
            ></v-text-field>
            <h5 class="text-subtitle-1">Хобби</h5>
            <v-text-field label="какие у вас хобби" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "PageInfo",
  data() {
    return {
      position: "sample text",
      areas: ["1", "2"],
      info: {
        img: "..src/assets/hidethepainharold.jpg",

        title: "Фродо",

        mobileNumber: "88005553535",

        homeNumber: "88-005-55",

        adress: "Шир, ул. Труда, д.10",
      },
    };
  },
  methods: {
    add() {
      
    }
  }
};
</script>
