<template>
    <div>
      <h1> Latest Products</h1>
      <hr>
      <!-- :to="{name:'show-about',params:{id: about.id}} -->
      <div class="product" v-for="product of allProducts" :key="product.id">
        <router-link :to="{ name:'single-product', params:{id:product.id} }">

            <div class="productContainer">

                <img :src="product.image" alt="" class="product_image"/> 
                <br><br>
                <strong>  {{product.name}}</strong>
                <p class="price"> &#2547; {{product.price}} </p>     
         </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
    import { Product } from '@/services/Product';
    export default {
      name: 'ShopProduct',
      data (){
        return{
          allProducts: [],
          price: []
        }
      },
      created : async function ()  {
   
        try {
          this.$eventBus.$emit("loadingStatus",true);

            let response = await  Product.getAllProduct();
            this.allProducts = response.data;

          this.$eventBus.$emit("loadingStatus",false);
        
        }
        catch (error){
            this.errorMessage = error;
            
        }
    },

      methods: {
   
      }
    }
  </script>