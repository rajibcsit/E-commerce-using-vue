import axios from "axios";

export class Supplier {
  static serverURL = `http://localhost:9000`;

  static getAllSupplier() {
    let dataURL = `${this.serverURL}/suppliers`;
    return axios.get(dataURL);
  }

  static getSupplier(supplierId) {
    let dataURL = `${this.serverURL}/suppliers/${supplierId}`;
    return axios.get(dataURL);
  }

  static createSupplier(supplier) {
    let dataURL = `${this.serverURL}/suppliers/`;
    return axios.post(dataURL, supplier);
  }

  static updateSupplier(supplier, supplierId) {
    let dataURL = `${this.serverURL}/suppliers/${supplierId}`;
    return axios.put(dataURL, supplier);
  }

  static deleteSupplier(supplierId) {
    let dataURL = `${this.serverURL}/suppliers/${supplierId}`;
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
