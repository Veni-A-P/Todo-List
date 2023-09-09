import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

var store = configureStore({
    reducer:{
        todos: todoReducer
    }
});
export default store;