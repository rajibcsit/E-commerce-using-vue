<template>
    <div>
        <h1 class="fleft">{{ singleProduct.name }} </h1>
        <router-link to="/shop/products" class="fright"> All Products </router-link>
        <div class="clear"></div>
        <hr>
        <div class="product-left">
            <img :src="singleProduct.image" alt="" class="product_image single_p_img"/> 
                <br><br>
            <br>
        </div>

        <div class="product-right">
            <div class="product-description">
            <p>
                <strong> Category: </strong> {{ singleProduct.category }} <br><br>
                <strong> Supplier: </strong> {{ singleProduct.supplier }} <br><br>
                <strong> Price: </strong> {{ singleProduct.price }} <br><br>
                <strong> Description: </strong> {{ singleProduct.description }} <br><br>

            </p>
            <strong> Quantity: </strong>
            <input type="number" class="input-number" v-model="qty">
            <button class="addBtn" @click="addToCart()"> Add to Cart </button>
        </div>

        </div>
        <div class="clear"></div>
        <hr> <br><br><br>
        <p class="txt-center">
            <router-link to="/shop/products" class="addBtn"> Continue Shopping </router-link>
        </p>

    </div>
  </template>
  
  <script>
    import { Product } from '@/services/Product';
    export default {
      name: 'ShopProduct',
      data (){
        return{
        // productId:this.$route.params.id,
          singleProduct:{},
            qty:1
      }
      },
      mounted() {
        Product.getProduct(this.$route.params.id)
        .then((data) => {
          this.singleProduct = data.data;
        });
     },

     methods:{
      addToCart(){
        this.$eventBus.$emit("addToCart", {singleProduct: this.singleProduct , quantity: this.qty});
      }
     }
   
    }
  </script>