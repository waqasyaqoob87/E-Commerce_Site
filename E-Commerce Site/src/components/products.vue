<template>
  <div>
    <v-container>
      <div class="row">
        <div
          class="col-md-12 col-sm-12 col-xs-12"
        >
          
          <v-divider></v-divider>
          <div class="row text-center">
            
            <div class="col-md-3 col-sm-6 col-xs-12" :key="posts.id" v-for="posts in allproducts" :posts ="posts" >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                  height="320"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="posts.image"
                  >
                    <v-card-title>{{posts.id}} </v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" @click="getId(posts.id)" href="/product" class="" outlined >VIEW</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <!-- <div><a href="/product" style="text-decoration: none">{{posts.title}}</a></div> -->
                    <router-link
                    class="text fontSize black--text"
                    :to="{ name: 'product', params: { id: posts.id } }"
                    >{{posts.title}}</router-link>
                    <div>${{posts.price}}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination
              v-model="page"
              :length="6"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
</style>
<script>
export default {
  data: () => ({
    getpost: "",
    

    page: 1,
  }),
  computed: {
    allproducts() {
      return this.$store.state.allproducts;
    },
  },
  methods: {
    getId(id) {
      // console.log(id)
      alert(id);
      this.$store.dispatch("product", id);
    
    },
  },
  mounted(id) {
    this.getpost = this.$store.getters.allproducts;
    this.$store.dispatch("allproducts", id);
  },
};
</script>