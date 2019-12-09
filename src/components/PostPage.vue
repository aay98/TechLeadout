<template>
  <v-app>
    <div class="post" v-if="post">
      <h1 class="post__title">{{ post.title }}</h1>
      <p class="post__body">{{ post.body }}</p>
      <p class="post__id">{{ post.id }}</p>
    </div>
    <v-spacer></v-spacer>
    <v-content> </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostPage',
  props: {
    postData: {
      type: Object
    }
  },
  computed: {
    PostPage() {
      if (this.postData) return this.postData.title
      else return 'no data'
      // (this.postData && this.postData.title) || 'no data'
    }
  },
  data() {
    return {
      post: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    getAllPosts() {
      axios
        .get(this.endpoint)
        .then(response => {
          //debugger
          this.posts = response.data
        })
        .catch(error => {
          var e = error
          return e
        })
    }
  }
}
</script>
