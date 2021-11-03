.<template>
  <v-footer
    yellow
    padless
  >
    <v-card
      flat
      tile
      class="yellow lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem, delectus nemo nostrum dolore nobis in qui eaque sequi est, quia dolorum culpa mollitia nisi repudiandae? Ad veniam obcaecati nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi nulla, eveniet tempora impedit porro praesentium, quia architecto ipsa iure labore doloremque atque pariatur, ut amet ex sequi quas aliquam.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),

  }

</script>

<style lang="css" scoped>
.v-footer {
  margin-top: 25px
}
.v-card { 
  margin: 0 auto;
  width: 100%;
}
.yellow {
  background: #ffeb3b !important
}
.black--text { 
  width: 1300px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .mx-auto {
    max-width: 100% !important;
  }  
  .black--text {
    max-width: 100%;
  }


  }
</style>