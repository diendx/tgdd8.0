<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-top-transition" max-width="1100">

      <template class="watch-btn" v-slot:activator="{ on, attrs }">
        <div class="btn2">
          <v-btn color="primary" v-bind="attrs" v-on="on" >
            <v-icon left small>fa-eye</v-icon>
            XEM
          </v-btn>
        </div>
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
                  <span>Giá Tiền: {{ (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.price)) }}</span>
                </div>
                <div>
                  <span>Thông Tin: {{ product.detail }}</span>
                </div>
              </v-card-text>
            </v-col>
          </div>

        <div style=" ">
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
<style lang="css" scoped>
.v-card__text.div {
  padding: 10px
}
.watch-btn { 
  padding: 0
}

</style>Filter