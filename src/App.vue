<template>
  <v-app>
    <div class="d-flex align-center">
        <PostListItem v-for="(post, index) in posts" :key="index" :postData='post' :postUsers='users'> 
        </PostListItem>
    </div>
    <v-spacer></v-spacer>
    <v-content> </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
import PostListItem from './components/PostListItem'
export default {
  name: 'App',
  components: {
    PostListItem
  },
  data: function() {
    return {
      posts: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/'
    }
  },
  users: function(){
    return {
      users: null,
      endpoint: 'https://jsonplaceholder.typicode.com/users/'
    }
  },
  created() {
    this.getAllPosts()
  },

  methods: {
    getAllPosts() {
      axios
        .get(this.endpoint)
        .then(response => {
          //debugger
          this.posts = response.data
          this.users = response.users
        })
        .catch(error => {
          var e = error
          return e
          //console.log('-----error-------');
          //console.log(error);
        })
    }
  },
  watch: {
    $route() {
      this.getPost(this.id)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.d-flex {
  flex-direction: column !important;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
