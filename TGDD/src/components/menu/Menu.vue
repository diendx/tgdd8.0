<template>
  <div>
    <v-app-bar style="background:#fed100" >
      <v-toolbar-title style="padding-left: 170px">THE GIOI DI DONG</v-toolbar-title>

      <div class="row"> 
        <p> {{ text | to-uppercase | toLowerCase  }}</p>
      </div>

      <div class="row">
        <div class=" col-xs-5 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <input type="text" class="form-control mb-md-3">
          <div class="card">
            <div class="card-body">
              <ul>
                <li v-for="product in filteredProducts" v-bind:key="product">{{ product.name }} </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- <template>
        <div class="filter">
          <v-container fluid>
            <v-row>
              <v-col cols="5">
                <v-combobox
                  v-model="select"
                  :items="items"
                  label="Filter"
                  multiple
                  outlined
                  dense
                ></v-combobox>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </template> -->
      <v-spacer> </v-spacer>

    

      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon small left>fa-home</v-icon>
          Home
        </v-btn>
        <v-btn to="/store"  text>
          <v-icon small left>fa-shopping-basket</v-icon>
          Store
        </v-btn>
        <v-btn to="/cart"  text>
          <v-icon small left>fa-shopping-cart</v-icon>
          Cart {{numberCart}}
        </v-btn>
        <v-btn to="/login" text>
            Login
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in item"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon small>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Search from '../homepage/Search.vue';
import Product from '@/product'

@Component({
  components:{
    Search
  }
})

export default class Menu extends Vue {
  private product=Product;
  private drawer = false;
  item = [
    { title: "Home", link: "/", icon: "home" },
    { title: "Store", link: "store", icon: "shopping-basket" },
    { title: "Cart", link: "cart", icon: "shopping-cart" },
    
  ];

  get numberCart():number{
    return this.$store.getters.inCart.length;
  }

  data() {
    return {
      products: {},
      filterProduct:""
    }
  }
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    }
  }
  computed: {
    filteredProducts(){
      return this.products.filter((element) => {
        return element.match(this.filterProduct);
      })
    }
  }

  // data () {
  //   return {
  //     items: [
  //       'Iphone',
  //       'IMAC',
  //       'SamSung',
  //       'OPPO',
  //     ],
  //   }
  // }
}

</script>
<style lang="sass" scoped>
.v-spacer 
  border: 1px solid red

.filter
  padding: 20px 0 0 20px

</style>

