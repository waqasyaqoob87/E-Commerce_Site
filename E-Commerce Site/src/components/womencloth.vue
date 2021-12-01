<template>
  <div>
    <v-container>
      <div class="row">
        
        <div
          class="col-md-12 col-sm-12 col-xs-12"
        >
          <v-divider></v-divider>

          <div class="row text-center">
            <div class="col-md-3 col-sm-6 col-xs-12" :key="posts.id" v-for="posts in womencloth">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
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
                        <v-btn v-if="hover" href="/product" class="" outlined>VIEW</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div><a href="/product" style="text-decoration: none">{{posts.name}}</a></div>
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
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
<script>
    export default {
        data: () => ({
          getpost:"",
           
            page:1,
            
        }),
   computed: {
    womencloth() {
    return this.$store.state.womencloth
    }
  },
  mounted() {
    this.getpost=this.$store.getters.womencloth
    this.$store.dispatch("womencloth");
  }
    }
</script>
