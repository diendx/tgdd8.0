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
                <v-row style="padding: 15px 0px">
                  <v-col md="5" justify="center" align="center">
                    <v-hover>
                      <v-img :src="product.image" ></v-img>
                    </v-hover>
                  </v-col>
                  <v-col class="example-0" md="7">
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle> {{ (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.price)) }} VND</v-card-subtitle>
                    <div class="example-1" justify="space-around" align="center">
                      <v-btn elevation="2" style="padding-right: 15px" color="blue" @click="removeToCart(product.id)">
                          -
                      </v-btn>
                        {{ product.quantity }}
                      <v-btn elevation="2" @click="addToCart(product.id)">
                          + 
                      </v-btn>
                    </div>

                    <v-card-actions>
                      <div class="deleter-cart">
                        <v-btn  elevation="2" color="red"  padding-left="7px" @click="removeAllCart(product.id)">
                          <v-icon left>mdi-delete</v-icon>
                          Bỏ chọn
                        </v-btn>
                      </div>
                    </v-card-actions>

                    <p style="color: red; font-size: 20px; padding-left: 10px; padding-top: 10px">Thanh toán: {{ (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(total)) }}</p>
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

            <v-btn color="primary"> Checkout </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Carts extends Vue {
  get inCart() {
    return this.$store.getters.inCart;
  }
  get Cart() {
    return this.$store.getters.inCart.map((cartItem) => {
      return this.$store.getters.forProduct.find((forProductItem) => {
        return cartItem === forProductItem.id;
      });
    });
  }

  created() {
    console.log(this.inCart);
    
  }

    get count(){
    return this.Cart.reduce((acc, cur) => (acc + cur.quantity),0);
  }

  get total() {
    return this.Cart.reduce((acc, cur) => (acc + cur.price*cur.quantity), 0)
  }

  removeToCart(id) {
    for (let i = 0; i < this.Cart.length; i++) {
      if (this.Cart[i].id === id) {
        if(this.Cart[i].quantity >= 1) {
            this.Cart[i].quantity--;
        }  
      }
    }      
  }

  addToCart(id) {
    for (let i = 0; i < this.Cart.length; i++) {
      if (this.Cart[i].id === id) {
            this.Cart[i].quantity++;
      } 
  }      
    }

  removeAllCart(id) {
    for (let i = 0; i < this.Cart.length; i++) {
        if (this.Cart[i].id === id) {
          if(this.Cart[i].quantity >= 1) {
              this.Cart[i].quantity=i;
          }     
        }
        }
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

.example-0
  display: flex
  flex-direction: column
  justify-content: space-evenly
  text-align: left

.example-1 
  display: flex
  justify-content: space-around
  align-item: center
  width: 60%
  font-size: 20px
  .v-btn
    min-width: 50px
    font-size: 30px
    font-weight: light
  
.deleter-cart
  padding-left: 7px
  padding-top: 10px

</style>