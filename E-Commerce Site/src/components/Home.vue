<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item :src="require('../assets/img/home/slider2.jpg')">
        
      </v-carousel-item>
      <v-carousel-item :src="require('../assets/img/home/slider1.jpg')">
        
      </v-carousel-item>
      <v-carousel-item :src="require('../assets/img/home/slider4.jpg')">
        
      </v-carousel-item>
      <v-carousel-item :src="require('../assets/img/home/slider3.jpg')">
       
      </v-carousel-item>
      <v-carousel-item :src="require('../assets/img/home/slider5.jpg')">
        
      </v-carousel-item>
    </v-carousel>
    
  
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class="" tile outlined>
            <v-card-title class="subheading">Categories</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/home/deal1.jpg')"
                    >
                      <v-card-title> Jewellery</v-card-title>
                    </v-img>

                    <div class="text-center">
                      <v-btn href="/jewelery" class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/home/deal2.jpg')"
                    >
                      <v-card-title>Electronics </v-card-title>
                    </v-img>
                    <div class="text-center">
                      <v-btn href="/electronics" class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center ">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/home/deal3.jpg')"
                    >
                      <v-card-title>Men's Clothes </v-card-title>
                    </v-img>
                    <div class="text-center">
                      <v-btn href="/mencloth" class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ }" >
                  <v-card >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/home/deal4.jpg')"
                    >
                      <v-card-title>Women's Clothes </v-card-title>
                    </v-img>
                    <div class="text-center">
                      <v-btn href="/womencloth" class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
      </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
    };
  },
  computed: {
    allcategories() {
      return this.$store.state.allcategories;
    },
  },
  mounted() {
    this.getpost = this.$store.getters.allcategories;
    this.$store.dispatch("allcategories");
  },
};
</script>

