<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="black-0.5"
      dark
    >
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title
        style="width: 350px"
      >
        <a href="/1" class="white--text" style="text-decoration: none"><v-icon>mdi-store-clock</v-icon>&nbsp;ECOMMERCE</a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn icon href="/1"  @click.prevent="profile">
        <v-icon>mdi-account-circle</v-icon>
      
      </v-btn>
      <v-btn v-on="on" icon>
        <v-badge
          content="message++"
          value="message++"
          color="green"
          overlap
        >
    <a class="white--text" href="/" @click.prevent="logout"><v-icon>mdi-exit-to-app</v-icon></a>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/carts" icon>
        <v-badge
          content="messages++"
        value="messages++"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
      >
        <a href="/1" class="v-btn">
          <span>Home</span>
        </a>
       
        <a href="/products" class="v-btn">
          <span>Products</span>
        </a>
      </v-bottom-navigation>
    </v-content>
      <router-view/>
    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
       

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>ECOMMERCE</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
    export default {
        data () {
            return {
                
                activeBtn: 1,
            }
        },
         methods: {
    logout() {
      // localStorage.removeItem("");
      this.$router.push("/");
      window.location.reload();
    },
     profile() {
      // localStorage.removeItem("");
      this.$router.push("/userprofile");
      window.location.reload();
    }
  },
    }
</script>
