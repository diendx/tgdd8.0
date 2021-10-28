<template>
  <div>
    <v-app-bar style="background:#fed100" >
      <v-toolbar-title style="padding-left: 170px">THE GIOI DI DONG</v-toolbar-title>

      <div class="search">
        <div class="search-wrapper">
          <v-icon small left>fas fa-search</v-icon>
          <input type="text" v-model="search" placeholder="Search title.."/>
          
              <!-- <label>Search Users:</label> -->
        </div>
        <ul>
          <li v-for="user in filteredAndSorted" :key="user.age">{{user.name}}</li>
        </ul> 
      </div>
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
import Product from '../../product';

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

  search = '';
  userList = [
    {
      id: 1,
      name: "Prem"
    },
    {
      id: 1,
      name: "Chandu"
    },
    {
      id: 1,
      name: "Shravya"
    }
  ];

  filteredAndSorted() {
      function compare(a: any, b: any) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      
      return this.userList.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      }).sort(compare)
    }
}

</script>
<style lang="sass" scoped>
.v-spacer 
  border: 1px solid red

.filter
  padding: 20px 0 0 20px

.search
  padding-left: 30px  

</style>

