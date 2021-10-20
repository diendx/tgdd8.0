<template>
    <div>
        <Header/>
        <ProductList/>
        <Footer/>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from '../homepage/Header.vue';
import Footer from '../homepage/Footer.vue';
import ProductList from '../homepage/ProductList.vue'
@Component({
    components:{
        Header,
        ProductList,
        Footer
    }
})
export default class Home extends Vue{

}
</script>
