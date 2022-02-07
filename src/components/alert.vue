<template>
  <v-alert type="error" class="alert">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: "alert",
  props: ["text"],
};
</script>

<style scoped>
.alert {
  top: 30px;
}
</style>
