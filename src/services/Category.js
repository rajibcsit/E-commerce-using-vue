import axios from "axios";

export class Category {
  static serverURL = `http://localhost:9000`;

  static getAllCategory() {
    let dataURL = `${this.serverURL}/categories`;
    return axios.get(dataURL);
  }

  static getCategory(categoryId) {
    let dataURL = `${this.serverURL}/categories/${categoryId}`;
    return axios.get(dataURL);
  }

  static createCategory(category) {
    let dataURL = `${this.serverURL}/categories/`;
    return axios.post(dataURL, category);
  }

  static updateCategory(category, categoryId) {
    let dataURL = `${this.serverURL}/categories/${categoryId}`;
    return axios.put(dataURL, category);
  }

  static deleteCategory(categoryId) {
    let dataURL = `${this.serverURL}/categories/${categoryId}`;
    return axios.delete(dataURL);
  }

  static getAllGroups() {
    let dataURL = `${this.serverURL}/groups/`;
    return axios.get(dataURL);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }
}
