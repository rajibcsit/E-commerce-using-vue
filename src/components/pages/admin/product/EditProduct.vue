<template>
    <div> 
      <form @submit.prevent="editSubmit()">
           <table>
            <tr>
              <td>
                Product Name:
              </td>
              <td>
                <input v-model="product.name" type="text" id="newCatName"  placeholder="Product Name">
              </td>
            </tr>
            <tr>
            <td>
                Category:
            </td>
            <td>
            <select v-model="product.category">
                <option value="">
                  --- Select One ---
                </option>
                <option  v-for="category in categories"
                  :key="category.id" :value="category.id">
                  {{ category.name }}
               </option>

            </select>
          </td>
          </tr>

            <tr>
            <td>
                Supplier:
            </td>
            <td>
            <select v-model="product.supplier">
                <option value="">
                  --- Select One ---
                </option>
                <option  v-for="supplier in suppliers"
                  :key="supplier.id" :value="supplier.id">
                  {{ supplier.name }}
               </option>
            </select>
          </td>
          </tr>

            <tr>
            <td>
                Image:
            </td>
            <td>
                <input  v-model="product.image" type="text" class=" product_image" placeholder="Photo URL">
            </td>
          </tr>

            <tr>
            <td>
                Price:
            </td>
            <td>
              <input v-model="product.price" type="text" id="newCatName"  placeholder="product Price">
            </td>
          </tr>
            
            <tr>
              <td>
                Category Description:
              </td>
              <td>
                <textarea v-model="product.description" type="text" id="newCatName"  placeholder="Write short here...."> </textarea>
              </td>
            </tr>
             <tr>
              <td>
                
              </td>
              <td>
                <button class="btnSave">Update</button>
              </td>
            </tr>
           </table>
    
      </form>
      
  </div>
    </template>
    
    <script>
  
  import { Product } from '@/services/Product'
  import { Category } from '@/services/Category'
  import { Supplier } from '@/services/Supplier'

    import iziToast from 'izitoast';
    export default {
        name: "EditProduct",
        data: function(){
            return{
             productId:this.$route.params.id,
             product:{
                   name: '',
                  description: '',
                  supplier: '',
                  category: '',
                  price: 0,
                  image: '',
              },
              suppliers:[],
              categories:'',
              errorMessage: null,
            }
        },
      
       
       created: async function(){
          try{
                  let response = await Product.getProduct(this.productId);
                   this.product = response.data;
                   
              }
              catch(error){
                 this.errorMessage = null;
              }
       },
      
       methods:{
        editSubmit : async function(){
          try{
            let response = await Product.updateProduct(this.product, this.productId);

            iziToast.success({
                      title: 'Hello',
                      message: ' Product Update Successfully !',
                  });
  
            if(response){
              return this.$router.push({ name:'admin.product' });
            }
            else{
              return this.$router.push('product/edit');
            }
          }
          catch(error){
            console.log(error);
            
          }
        }
      },
      mounted(){
        Category.getAllCategory()
        .then((data) => {
          this.categories = data.data;
        });

        Supplier.getAllSupplier()
        .then((data) => {
          this.suppliers = data.data;
        })
       }
    
    }
    </script>
    
    <style>
    
    </style>