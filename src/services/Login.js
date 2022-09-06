import  axios from "axios";

export class Login{
    static serverURL = `http://localhost:9000`;
  
    static login(){
      let dataURL = `${this.serverURL}/login`;
      return axios.post(dataURL);
    }
}