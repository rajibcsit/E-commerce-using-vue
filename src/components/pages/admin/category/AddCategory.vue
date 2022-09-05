<template>
  <form @submit.prevent="submitAdd()">
       <table>
        <tr>
          <td>
              Category Name:
          </td>
          <td>
            <input v-model="category.name" type="text" id="newCatName"  placeholder="Category Name">
          </td>
        </tr>
        <tr>
          <td>
            Category Description:
          </td>
          <td>
            <textarea v-model="category.description" type="text" id="newCatName"  placeholder="Write short here...."> </textarea>
          </td>
        </tr>
         <tr>
          <td>
            
          </td>
          <td>
            <button class="btnSave">Save</button>
          </td>
        </tr>
       </table>

  </form>
</template>

<script>
import { Category } from '@/services/Category'
import iziToast from 'izitoast';

export default {
    name: "AddCategory",
    data: function(){
        return{
            category:{
                name: '',
                description: ''
            }
        }
    },
   
    methods:{
        submitAdd: async function(){
            try{
                let response = await Category.createCategory(this.category);
                iziToast.show({
                  title: 'Hey',
                  message: 'Added  successfully!!'
              });
                if(response){
                
                    return this.$router.push({ name:'admin.category' });
                    

                }else{
                    return this.$router.push('category/add');
                }
            }
            
            catch(error){
                console.log(error);
            }
        }
    }

}
</script>

<style>

</style>