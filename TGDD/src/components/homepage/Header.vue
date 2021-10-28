<template>
  <v-container>
    <v-row>
      <v-col md="8">
        <v-carousel cycle height="435" width="850">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row class="fill-height title" align="center" justify="center">
              <div> {{ item.title }} </div>
            </v-row>
          </v-carousel-item>

        </v-carousel>
      </v-col>

      <v-col md="4" style="padding: 12px 0px 12px 12px"> 

        <v-row>
          <v-col md="6" style="padding-left: 0px">
            <v-card outlined>
              <v-img
                src="//cdn.tgdd.vn/2021/06/banner/Group3913-340x340.jpg"
              ></v-img> 
            </v-card>
          </v-col>
          <v-col md="6" style="padding-left: 0px" >
            <v-card outlined>
              <v-img
                src="//cdn.tgdd.vn/2021/06/banner/bannerdt-340x340-2.jpg"
              ></v-img> 
            </v-card>
          </v-col>
        </v-row>

        <v-row style="margin-top: 0px">
          <v-col md="6" style="padding-left: 0px">
            <v-card outlined>
              <v-img
                src="//cdn.tgdd.vn/2021/06/banner/laptopdesk-340x340.jpg"
              ></v-img>
            </v-card>
          </v-col>
          <v-col md="6" style="padding-left: 0px">
            <v-card outlined>
              <v-img
                src="//cdn.tgdd.vn/2021/09/banner/Frame39592x-340x340.png"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Header extends Vue {
  get sheetHeight(): string {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        return "200px";
      case "sm":
        return "300px";
      case "md":
        return "300px";
      case "lg":
        return "300px";
      case "xl":
        return "350px";
    }
    return "300px";
  }

  items = [
    {
      src: "//cdn.tgdd.vn/2021/09/banner/830-300-830x300.png",
      title: ""
    },
    {
      src: "//cdn.tgdd.vn/2021/09/banner/iphone-12-830-300-830x300.png",
      title: ""
    },
    {
      src: "//cdn.tgdd.vn/2021/08/banner/reno6cb-830-300-830x300.png",
      title: ""
    },
    {
      src: "//cdn.tgdd.vn/2021/08/banner/830-300-830x300-4.png",
      title: ""
    },
  ];

}
</script>
<style lang="sass" scoped>
.container
  max-width: 1300px
  padding: 12px 12px 12px 0
  background-size: auto 
  background-repeat: no-repeat
  



</style>