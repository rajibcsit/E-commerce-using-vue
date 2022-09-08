<template>
  <div>
    <form @submit.prevent="editSubmit()">
      <table>
        <tr>
          <td>
            Supplier Name:
          </td>
          <td>
            <input
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
            <button class="btnSave">Update</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { Supplier } from "@/services/Supplier";
import iziToast from "izitoast";
export default {
  name: "EditSupplier",
  data: function() {
    return {
      supplierId: this.$route.params.id,
      supplier: {
        name: "",
        description: ""
      },
      errorMessage: null
    };
  },

  created: async function() {
    try {
      let response = await Supplier.getSupplier(this.supplierId);
      this.supplier = response.data;
    } catch (error) {
      this.errorMessage = null;
    }
  },

  methods: {
    editSubmit: async function() {
      try {
        let response = await Supplier.updateSupplier(
          this.supplier,
          this.supplierId
        );

        iziToast.success({
          title: "Hello",
          message: " Supplier Update Successfully !"
        });

        if (response) {
          return this.$router.push({ name: "admin.supplier" });
        } else {
          return this.$router.push("supplier/edit");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
