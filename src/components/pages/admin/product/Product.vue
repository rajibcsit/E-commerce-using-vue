<template>
    <div>
       <h2 class="fleft">Product</h2>
       <router-link :to="{ name:'product' }"> 
         <button class="addBtn fright" > Add New </button>
       </router-link>
       
       
       <div class="clear"></div>
       <hr>
       <table class="nice-table" v-if="product.length > 0">
        <tr>
            <th>ID</th>
            <th> Name</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
         <tr  v-for="(product,index) of product" :key="index">
           <td>{{index+1}}</td>
           <td> {{product.name}} </td>
           <td> {{product.category}} </td>
           <td> {{product.supplier}} </td>
           <td> <img :src="product.image" alt="" class="product_image"> </td>
           <td> {{product.price}}</td>
           <td> {{product.description}} </td>
           <td>
             <router-link :to="`product/edit/${product.id}`"> 
               <button class="edit" > Edit </button> 
             </router-link>
             
           
           </td>
           <td> <button class="delete" v-on:click="clickDelete(product.id)" > Delete </button> </td>
         </tr>
         </table> 
    </div>
   </template>
   
   <script>
     import { Product } from '@/services/Product';
     import iziToast from 'izitoast';
   
   export default {
       name: 'Product',
       data: function(){
           return{
            product : [],
             errorMessage: null,
           }
       },
       created : async function ()  {
   
         try {
           
          this.$eventBus.$emit("loadingStatus",true);

           let response = await  Product.getAllProduct();
           this.product = response.data;

           this.$eventBus.$emit("loadingStatus",false);
       
         }
         catch (error){
           this.errorMessage = error;
           
         }
     },
   
         methods : {
         clickDelete: async function (productId) {
           try{
             let response = await Product.deleteProduct(productId);
             console.log(response)
               if(response){
                 let response = await  Product.getAllProduct(); //getting fresh data
                 this.product = response.data;
                 iziToast.show({
                     title: 'Hey',
                     message: 'Delete  successfully!!'
                 });
                 
               }
           }
           catch(error){
             this.errorMessage = error;
            
             
           }
         },
       
       }
   }
   </script>
   
   <style>
   
   </style>