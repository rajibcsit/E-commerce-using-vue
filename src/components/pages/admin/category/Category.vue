<template>
  <div>
     <h2 class="fleft">Categories</h2>
     <router-link :to="{ name:'category' }"> 
       <button class="addBtn fright" > Add New </button>
     </router-link>
     
     
     <div class="clear"></div>
     <hr>
     <table class="nice-table" v-if="category.length > 0">
       <tr>
         <th>ID</th>
         <th> Name</th>
         <th>Description</th>
         <th>Edit</th>
         <th>Delete</th>
       </tr>
       <tr  v-for="(category,index) of category" :key="index">
         <td>{{index+1}}</td>
         <td> {{category.name}} </td>
         <td> {{category.description}} </td>
         <td>
           <router-link :to="`category/edit/${category.id}`"> 
             <button class="edit" > Edit </button> 
           </router-link>
           
         
         </td>
         <td> <button class="delete" v-on:click="clickDelete(category.id)" > Delete </button> </td>
       </tr>
       </table> 
  </div>
 </template>
 
 <script>
   import { Category } from '@/services/Category';
   import iziToast from 'izitoast';
 
 export default {
     name: 'Category',
     data: function(){
         return{
          category : [],
           errorMessage: null,
         }
     },
     created : async function ()  {
 
       try {
        this.$eventBus.$emit("loadingStatus",true);

         let response = await  Category.getAllCategory();
         this.category = response.data;
         
         this.$eventBus.$emit("loadingStatus",false);
         console.log(response)
     
       }
       catch (error){
         this.errorMessage = error;
         
       }
   },
 
       methods : {
       clickDelete: async function (categoryId) {
         try{
           let response = await Category.deleteCategory(categoryId);
           console.log(response)
             if(response){
              let response = await  Category.getAllCategory(); //getting fresh data
               this.category = response.data;
               
               iziToast.show({
                   title: 'Hello',
                   message: 'Delete  successfully!!'
                  
               });
               
             }
         }
         catch(error){
           this.errorMessage = error;
           console.log('Error')
           
         }
       },
     
     }
 }
 </script>
 
 <style>
 
 </style>