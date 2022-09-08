<template>
  <div>
    <h2 class="fleft">Suppliers</h2>
    <router-link :to="{ name: 'supplier' }">
      <button class="addBtn fright">Add New</button>
    </router-link>

    <div class="clear"></div>
    <hr />
    <table class="nice-table" v-if="supplier.length > 0">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(supplier, index) of supplier" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ supplier.name }}</td>
        <td>{{ supplier.description }}</td>
        <td>
          <router-link :to="`supplier/edit/${supplier.id}`">
            <button class="edit">Edit</button>
          </router-link>
        </td>
        <td>
          <button class="delete" v-on:click="clickDelete(supplier.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Supplier } from "@/services/Supplier";
import iziToast from "izitoast";

export default {
  name: "Supplier",
  data: function() {
    return {
      supplier: [],
      errorMessage: null
    };
  },
  created: async function() {
    try {
      this.$eventBus.$emit("loadingStatus", true);

      let response = await Supplier.getAllSupplier();
      this.supplier = response.data;

      this.$eventBus.$emit("loadingStatus", false);
    } catch (error) {
      this.errorMessage = error;
    }
  },

  methods: {
    clickDelete: async function(supplierId) {
      try {
        let response = await Supplier.deleteSupplier(supplierId);
        console.log(response);
        if (response) {
          let response = await Supplier.getAllSupplier(); //getting fresh data
          this.supplier = response.data;
          iziToast.show({
            title: "Hey",
            message: "Delete  successfully!!"
          });
        }
      } catch (error) {
        this.errorMessage = error;
      }
    }
  }
};
</script>

<style></style>
