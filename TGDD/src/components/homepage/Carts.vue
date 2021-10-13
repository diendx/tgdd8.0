<template>
  <div>
    <v-row style="margin-top: 20px">
      <v-col sm="12" offset-sm="1" md="4" offset-md="2">
        <v-row>
          <v-col sm="6" md="12" v-for="product in Cart" :key="product.id">
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                outlined
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-row>
                  <v-col md="5" justify="center" align="center"
                    ><v-img :src="product.image" ></v-img
                  ></v-col>
                  <v-col md="7">
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle> {{ product.price }} VND</v-card-subtitle>
                    <v-card-actions>
                      <v-btn color="red" @click="removeFromCart(product.id)">
                        <v-icon left>mdi-delete</v-icon>
                        Bỏ Chọn
                      </v-btn>
                    </v-card-actions>
                    
                    <div id="example-1">
                      <v-btn @click="addToCart(product.id)">
                          +
                      </v-btn>
                     {{ count }}
                      <v-btn @click="removeFromCart(product.id)">
                          -
                      </v-btn>
                    </div>
                    <p> Số tiền phải trả là {{ product.price }} VND</p>
                    <button> <router-link :to="{name:'confirm', params: {  money: money * counter, id: counter}}"> Xác nhận </router-link> </button>

                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="5">
        <v-card outlined>
          <v-card-title>Payment Details</v-card-title>

          <v-card-text>
            <v-text-field label="Name" />
            <v-text-field label="Email" />
            <v-text-field label="Phone" />
            <v-text-field label="Address" />

            <p style="color: red; font-size: 20px">Total: {{ total }} VND</p>
            <v-btn color="primary"> Checkout </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Carts extends Vue {
  get inCart(): Object {
    return this.$store.getters.inCart;
  }
  get Cart(): Array<any> {
    return this.$store.getters.inCart.map((cartItem: any) => {
      return this.$store.getters.forProduct.find((forProductItem: any) => {
        return cartItem === forProductItem.id;
      });
    });
  }

  get total(): number {
    return this.Cart.reduce((acc, cur) => acc + cur.price, 0);
  }

  get count(): number {
    return this.Cart.reduce((acc, cur) => (acc + cur.quantity),0);
  }

  removeFromCart(id: any) {
        this.$store.dispatch("removeFromCart", id);
  }

  addToCart(id: any) {
    this.$store.dispatch("addToCart", id);
  }

}
</script>
<style lang="sass" scoped>
.v-card__text
  div
    padding: 10px
    p
      color: red
      font-size: 20px
</style>