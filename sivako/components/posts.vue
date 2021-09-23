<template>
  <v-row d-flex>
    <add-post></add-post>
    <v-layout wrap>
      <v-col md4 v-for="item in posts" :key="item.name">
        <v-spacer>
          <v-card class="card-container">
            <v-card-title primary-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.content }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="teal accent-4"> Change </v-btn>
              <v-btn color="teal accent-4" @click="deletePosts(item)">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-spacer>
      </v-col>
    </v-layout>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import addPost from "./addPost.vue";

export default {
  components: { addPost },
  computed: {
    ...mapState("posts", ["posts"])
  },

  created() {
    this.$store.dispatch("posts/readPosts");
  },
  methods: {
    deletePosts(post) {
      console.log(post);
      this.$store.dispatch("posts/deletePosts", post);
    }
  }
};
</script>
