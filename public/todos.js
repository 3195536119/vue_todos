import axios from "axios";
import store from "../src/store/index.js";

export default {
    getTodos() {
        return axios.get('/getTodos').then(res=>{
            store.commit('setTodos',res.data);
        })
    }

}