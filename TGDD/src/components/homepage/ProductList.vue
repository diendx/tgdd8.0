<template>
  <div>
    <v-row>
      <v-col  class="mx-auto banner-top">
        <v-img  
          src="//cdn.tgdd.vn/2021/09/banner/t9-1200-60-1200x60-3.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>

      <v-snackbar v-model="snackbar" :timeout="timeout" style="padding-top: 50px; display: flex; align-items: flex-start; border: 2px solid red; max-width: 50%">
                  {{ text }}
                  <template v-slot:action="{ attrs }">
                      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">Đóng</v-btn>
                  </template>
      </v-snackbar>
      <v-sheet class="mx-auto" elevation="8" max-width="1300px">
        <p class="title">SĂN SALE ONLINE MỖI NGÀY</p>
        <v-slide-group class="pa-4" multiple show-arrows style="padding-top: 0px !important">
          <v-slide-item
            v-for="product in product"
            :key="product.id"
            v-slot="{ toggle }"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                outlined
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                height="405"
                width="220"
                style="padding-top: 10px"
                class="ma-4"
                @click="toggle" 
              >
                <div class="slide-img">
                  <v-img :src="product.image" height="256"></v-img>
                </div>
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle> {{ (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.price)) }} </v-card-subtitle>
                <v-card-actions>
                  <div class="btn1">
                    <v-btn outlined @click="addToCart(product.id)">
                      <v-icon left small>fa-plus</v-icon>
                      muc
                    </v-btn>
                  </div>
                  <v-btn v-if="editProduc === 'email'" outlined @click="editProduc(product.id)">
                    Edit
                  </v-btn>
                  
                  <ProductDetail :product="product" />
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row style="width: 1330px" class="mx-auto banner">
      <v-col md="4">
        <v-card>
          <v-img
            src="//cdn.tgdd.vn/2021/06/banner/samsung-390-210-390x210-2.png" 
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-img src="//cdn.tgdd.vn/2021/06/banner/DT-390x210-2.png" ></v-img>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-img src="//cdn.tgdd.vn/2021/06/banner/Laptop-390x210.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-auto banner">
      <v-col md="3" v-for="product in product" :key="product.id">
        <v-card outlined style="padding: 10px, min-height: 495px">
          <div class="img-background">
          <v-img :src="product.image" height="100%"></v-img>
          </div>
          <v-card-title>{{ product.name }}</v-card-title>
          <div class="text-decoration-line-through"> {{ product.price2 }}</div>
          <v-card-subtitle> {{ (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.price)) }}</v-card-subtitle>
          <div class="rating-star">
            <div class="text-center">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </div>
          </div>

          <v-card-actions class="btn2">
            <v-btn outlined @click="addToCart(product.id)">
              <v-icon left small>fa-plus</v-icon>
              đặt móng
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import product from '../../product'
export default {
    data() {
      return {
        snackbar: false,
        text: 'Đã thêm vào giỏ hàng',
        timeout: 1000,
        product: product
      }
    },
    methods: {
        addToCart(id:any) {
          this.$store.dispatch('addToCart',id)
          this.snackbar = true;
        }
    }
}
</script>

<style lang="css" scoped>
.v-card.on-hover.theme--dark {
  background-color: rgba(#FFF, 0.8)
}

.v-card__text {
  color: #000
}

.banner {
  max-width: 1325px
}
.banner-top {
  max-width: 1325px
}
.title {
  color: #000;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  line-height: 30px;
  padding: 0 0 0 40px;
  margin: 0;
  background: #fed100;
}

.v-slide-group {
  background: #fed100
}

.v-sheet {
  border-radius: 5px
}
.mx-auto .title {
    padding-top: 20px;
    padding-left: 80px
}
.v-card-actions{
  display: flex;
  justify-center: center;
  align-items: center;
}
.rating-star {
  min-height: 0px !important;
  display: flex;
  padding-left: 24px;
}
.text-decoration-line-through {
  font-size: 12px;
  padding-left: 25px;
}

.v-card__subtitle { 
  padding: 0px 25px
}

.v-card__title  {
  padding-bottom: 16px;
  padding-left: 25px
}

.v-card__actions {
  display: flex;
  margin-left: 5px;
}

.img-background {
  width: 90%;
  margin: 0 auto;
  background-size: contain;
  margin-top: 25px;
  display: block;
  transition: all 0.3s ease-in-out;
}
.img-background:hover {
  transform: scale(1.1)
}
.btn2 {
  display: flex;
  justify-content: flex-start;
  padding-left: 25px;
}
.ma-4 {
  margin-left: 0 !important
}
.slide-img {
  width: 100%;
  margin: 0 auto;
  background-size: contain, cover;
  display: block;
  transition: all 0.3s ease-in-out;
}
.slide-img:hover{
  transform: scale(0.9)
}

@media screen and (max-width: 768px) {
  .mx-auto {
    max-width: 100% !important;
  }  


  }

</style> 