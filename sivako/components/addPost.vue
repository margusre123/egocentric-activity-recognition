<template>
  <v-dialog
    v-model="dialog"
    :overlay="false"
    max-width="500px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="pink"
        fab
        dark
        small
        fixed
        bottom
        right
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <add-post-form />
  </v-dialog>
</template>

<script>
import addPostForm from "./addPostForm.vue";
export default {
  components: { addPostForm },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style></style>
