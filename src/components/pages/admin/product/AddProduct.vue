<template>
  <form @submit.prevent="submitAdd()">
    <table>
      <tr>
        <td>
          Product Name:
        </td>
        <td>
          <input
            required
            v-model="newProduct.name"
            type="text"
            id="newCatName"
            placeholder="product Name"
          />
        </td>
      </tr>
      <tr>
        <td>
          Category:
        </td>
        <td>
          <select
            required
            v-model="newProduct.category"
            v-if="categories.length > 0"
          >
            <option value="">
              --- Select One ---
            </option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
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
          <select required v-model="newProduct.supplier">
            <option value="">
              --- Select One ---
            </option>
            <option
              v-for="supplier in suppliers"
              :key="supplier.id"
              :value="supplier.id"
            >
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
          <input
            required
            v-model="newProduct.image"
            type="text"
            class=" product_image"
            placeholder="Photo URL"
          />
        </td>
      </tr>
      <tr>
        <td>
          Price:
        </td>
        <td>
          <input
            required
            v-model="newProduct.price"
            type="text"
            id="newCatName"
            placeholder="product Price"
          />
        </td>
      </tr>
      <tr>
        <td>
          Product Description:
        </td>
        <td>
          <textarea
            required
            v-model="newProduct.description"
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
          <button class="btnSave">Save</button>
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
import { Product } from "@/services/Product";
import { Category } from "@/services/Category";
import { Supplier } from "@/services/Supplier";
import iziToast from "izitoast";

export default {
  name: "AddProduct",
  data: function() {
    return {
      newProduct: {
        name: "",
        description: "",
        supplier: "",
        category: "",
        price: 0,
        image: ""
      },
      categories: [],
      suppliers: []
    };
  },

  methods: {
    submitAdd: async function() {
      try {
        let response = await Product.createProduct(this.newProduct);

        iziToast.success({
          title: "Hello",
          message: " Product Added Successfully !"
        });

        if (response) {
          return this.$router.push({ name: "admin.product" });
        } else {
          return this.$router.push("product/add");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    Category.getAllCategory().then(data => {
      this.categories = data.data;
    });

    Supplier.getAllSupplier().then(data => {
      this.suppliers = data.data;
    });
  }
};
</script>

<style></style>
