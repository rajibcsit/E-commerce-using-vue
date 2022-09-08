<template>
  <div>
    <form @submit.prevent="editSubmit()">
      <table>
        <tr>
          <td>
            Category Name:
          </td>
          <td>
            <input
              v-model="category.name"
              type="text"
              id="newCatName"
              placeholder="Category Name"
            />
          </td>
        </tr>
        <tr>
          <td>
            Category Description:
          </td>
          <td>
            <textarea
              v-model="category.description"
              type="text"
              id="newCatName"
              placeholder="Write short here...."
            >
            </textarea>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button class="btnSave">Update</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { Category } from "@/services/Category";
import iziToast from "izitoast";
export default {
  name: "EditCategory",
  data: function() {
    return {
      categoryId: this.$route.params.id,
      category: {
        name: "",
        description: ""
      },
      errorMessage: null
    };
  },

  created: async function() {
    try {
      let response = await Category.getCategory(this.categoryId);
      this.category = response.data;
    } catch (error) {
      this.errorMessage = null;
    }
  },

  methods: {
    editSubmit: async function() {
      try {
        let response = await Category.updateCategory(
          this.category,
          this.categoryId
        );

        iziToast.success({
          title: "Hello",
          message: " Category Update Successfully !"
        });

        if (response) {
          return this.$router.push({ name: "admin.category" });
        } else {
          return this.$router.push("category/edit");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
