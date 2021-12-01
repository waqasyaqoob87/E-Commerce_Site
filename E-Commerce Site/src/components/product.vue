<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
         
           
            <v-img height="460px"
              :src="product.image"
            >
            </v-img>
            <router-link
        class="text fontSize black--text"
        :to="{ name: 'product', params: { id: product.id } }"
        >{{product.title}}</router-link
      >
  

        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">Modern Black T-Shirt${{product.name}}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">$65.00 </p>
             
            </v-card-actions>

      <div>
            <div>Description</div>
            
            
              <p class="font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            
      </div>
            
            <p class="title">ITEMS</p>

            <v-text-field
                outlined
                style="width:100px"
                dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense  @click="addToCart()"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>

          </div>

      
      </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          
         
        </div>
      </div>
    </v-container>
    
  </div>
</template>
<script>
    export default {
       name: "product",
      props: ["id"],
        data: () => ({
            
        }),
        methods : {
          addToCart(){
            this.$store.dispatch('addProductToCart',{
              product: this.product,
              quantity : 1
            })
          }
        },
         computed: {
    product_list() {
      return this.$store.state.product_list;
    },
  },
  mounted() {
    this.activatedRoute.params.subscribe(params => {
    alert(params['id']);
  });
    alert(this.id);
    this.getpost = this.$store.getters.product;
    this.$store.dispatch("product_list",this.id);
  },
    }
</script>
