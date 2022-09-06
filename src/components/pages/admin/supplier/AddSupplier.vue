<template>
  <form @submit.prevent="submitAdd()">
    <table>
      <tr>
        <td>
          Supplier Name:
        </td>
        <td>
          <input
            required
            v-model="supplier.name"
            type="text"
            id="newCatName"
            placeholder="Supplier Name"
          />
        </td>
      </tr>
      <tr>
        <td>
          Supplier Description:
        </td>
        <td>
          <textarea
            required
            v-model="supplier.description"
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
import { Supplier } from "@/services/Supplier";
import iziToast from "izitoast";

export default {
  name: "AddSupplier",
  data: function() {
    return {
      supplier: {
        name: "",
        description: ""
      }
    };
  },

  methods: {
    submitAdd: async function() {
      try {
        let response = await Supplier.createSupplier(this.supplier);

        iziToast.success({
          title: "Hello",
          message: " Supplier Added Successfully !"
        });

        if (response) {
          return this.$router.push({ name: "admin.supplier" });
        } else {
          return this.$router.push("supplier/add");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
