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
                <span>Giá Tiền: {{ (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.price)) }} </span>
            </div>
            <div>
                <span>Thông Tin: {{ product.detail }}</span>
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


<script>
export default {

}
</script>

<style>

</style>