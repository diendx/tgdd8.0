<template>
  <div>
    <v-app-bar style="background:#fed100" >
      <v-toolbar-title style="padding-left: 170px">THE GIOI DI DONG</v-toolbar-title>

      <div class="search">
        <div class="search-wrapper">
          <v-icon small left>mdi-magnify</v-icon>
          <!-- <input type="text" v-model="search" placeholder="Search title.."/> -->
          <v-btn to='/search'>Tìm kiếm ở đây</v-btn>
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

export default{
  data(){
    return {
    }
  },
  method: {
    
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

