<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">SHOPPING CART</p>
      <v-row>
        <v-col :cols="12" md="12" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">Id</th>
                <th class="text-center">userId</th>
                <th class="text-center">Date</th>
                <th class="text-center">Products</th>
                <th class="text-center"></th>
              </tr>
              </thead>
                <div class="col-md-3 col-sm-6 col-xs-12" :key="posts.id" v-for="posts in allcarts">

              <tbody>
              <tr>
                <td>

                  <v-list-item  
                >
                  <!-- <v-list-item-avatar>
                    <v-img :src="require('../assets/img/shop/1.jpg')"></v-img>
                  </v-list-item-avatar> -->

                  <v-list-item-content>
                    <v-list-item-title >{{post.userId}}</v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>{{posts.date}}/td>
                <td>
                  <v-text-field
                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
                    outlined
                    value="2"
                    type="number"
                  ></v-text-field>
                </td>
                <td>{{posts.products}}</td>
                <td><a>X</a></td>
              </tr>
              </tbody>
                </div>
            </template>
          </v-simple-table>
        </v-col>
      
      </v-row>
    </v-container>
    
  </div>
</template>
<script>
    export default {
        data: () => ({
          getpost: "",
          page:1,
        }),
  computed: {
    allcarts() {
    return this.$store.state.allcarts
    }
  },
  mounted() {
    this.getpost=this.$store.getters.allcarts
    this.$store.dispatch("allcarts");
  }
    }
</script>