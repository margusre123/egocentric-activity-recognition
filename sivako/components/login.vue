<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="3">
        <v-card>
          <v-card-title class="justify-center" primary-title>
            Login before using the webpage
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn color="success" @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith("google");
    }
  }
};
</script>
