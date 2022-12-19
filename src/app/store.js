import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/features/counter/counterSlice";

//Almacen estado
export const store = configureStore({
  reducer: { counter: counterReducer },
});
