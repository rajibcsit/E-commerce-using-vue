<template>
  <div>
    <h1 class="fleft">Delivery Information</h1>
    <router-link to="/shop/products" class="fright"> All Products </router-link>
    <div class="clear"></div>
    <hr />
    <table>
      <tr>
        <td>Full Name</td>
        <td>
          <input type="text" placeholder=" Full Name" />
        </td>
      </tr>
      <tr>
        <td>City</td>
        <td>
          <select>
            <option value=""> ... Selete One ...</option>
            <option> Dhaka </option>
            <option> Rangpur </option>
            <option> Rajshahi </option>
            <option> Khulna </option>
            <option> Barishal </option>
            <option> Sylhet </option>
            <option> Chittegong </option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          <textarea placeholder="Write Delivery Description..."></textarea>
        </td>
      </tr>
      <tr>
        <td>Contact Number</td>
        <td>
          <input type="number" placeholder="Phone number here..." />
        </td>
      </tr>
      <tr>
        <td>Payment Method</td>
        <td>
          <select>
            <option value=""> ... Selete One ...</option>
            <option> Cash on delivery </option>
            <option> Bkash </option>
            <option> Dutch-Bangla </option>
            <option> SureCash </option>
            <option> Nagad </option>
            <option> Master Card </option>
          </select>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button class="btnSave">Order Now</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Product } from "@/services/Product";
export default {
  name: "ShopProduct",
  data() {
    return {};
  },

  methods: {}
};
</script>

<style></style>
