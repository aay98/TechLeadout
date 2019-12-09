<template>
  <v-row>
    <v-col cols="12" xs="12" sm="10" md="8" lg="6" xl="4" >
      <v-card>
        <v-list-item three-line>
          <v-list-item-avatar size="80" color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-spacer></v-spacer>
            <div>{{name}}</div>
            <v-list-item-subtitle>{{ title }}</v-list-item-subtitle>
            <!-- //ограничение по количеству символов -->
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text right color="blue"> 
             <router-link to="/PostPage">
            Read more >
            </router-link>
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
//import PostPage from './components/PostPage'
export default {
  name: 'PostLListItem',
  props: {
    postData: {
      type: Object
    },
    postUsers: {
      type: Object
    }
  },
  computed: {
    title() {
      if (this.postData) return this.postData.title.substr(1, 10) + '...'
      else return 'no data'
      // (this.postData && this.postData.title) || 'no data'
    },
    name()
    {
      if (this.postData) 
      return this.postUsers.name
      else return 'Ivan Petrov'
    }
  }

}
</script>

<style lang="scss">
#PostListItem {
  width: 100%;
}
.v-card {
  border-radius: 25px !important;
  width: 100%;
}
.row {
  width: 100% !important;
}

</style>
