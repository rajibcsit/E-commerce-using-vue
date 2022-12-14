import axios from "axios";

export class Product {
  static serverURL = `http://localhost:9000`;

  static getAllProduct() {
    let dataURL = `${this.serverURL}/products`;
    return axios.get(dataURL);
  }

  static getProduct(productId) {
    let dataURL = `${this.serverURL}/products/${productId}`;
    return axios.get(dataURL);
  }

  static createProduct(product) {
    let dataURL = `${this.serverURL}/products/`;
    return axios.post(dataURL, product);
  }

  static updateProduct(product, productId) {
    let dataURL = `${this.serverURL}/products/${productId}`;
    return axios.put(dataURL, product);
  }

  static deleteProduct(productId) {
    let dataURL = `${this.serverURL}/products/${productId}`;
    return axios.delete(dataURL);
  }
}
