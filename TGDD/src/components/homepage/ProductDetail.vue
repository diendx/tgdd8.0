<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-top-transition" max-width="1100">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">XEM </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark>Product Detail</v-toolbar>
          <div style="display: flex" class="detail">
            <v-col md="4">
              <v-img :src="product.image" height="350"></v-img>
            </v-col>
            <v-col md="8">
              <v-card-text style="font-size: 18px">
                <div>
                  <span>Tên Sản Phẩm: {{ product.name }}</span>
                </div>
                <div>
                  <span>Giá Tiền: {{ product.price }} VND</span>
                </div>
                <div>
                  <span>Thông Tin: {{ product.detail }}</span>
                </div>

                <div id="rating-star">
                  <v-app id="inspire">
                    <div class="text-center">
                      <v-rating
                        v-model="rating"
                        background-color="orange lighten-3"
                        color="orange"
                        large
                      ></v-rating>
                    </div>
                  </v-app>
                </div>

              </v-card-text>
            </v-col>
          </div>
        
        <div style="  ">
          <v-card-actions class="justify">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>

          <v-card-actions class="justify">
            <v-btn text @click="dialog.value = false">edit</v-btn>
          </v-card-actions>
        </div>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class ProductDetail extends Vue {
  @Prop() private product?: any;

}

</script>
<style lang="sass" scoped>
.v-card__text
  div
    padding: 10px
</style>