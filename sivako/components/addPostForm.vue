<template>
  <v-card>
    <v-card-title primary-title>
      <h4>Add call for help</h4>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="post.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="post.content"
          label="Content"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn class="ma-3" color="success" @click="createPosts(post)"
        >Add new</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
        id: ""
      }
    };
  },

  methods: {
    createPosts(post) {
      this.$store.dispatch("posts/createPosts", post);
    }
  }
};
</script>

<style></style>
