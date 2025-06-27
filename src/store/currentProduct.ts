import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../interfaces/iProduct";

export const dummyProduct: IProduct = {
  description: "",
  image: "",
  name: "",
  prix: 100,
  stock: 0,
};

const initialState: IProduct = dummyProduct;

const currentProduct = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (s, action: { type: string; payload: IProduct }) => {
      Object.assign(s, action.payload);
    },
    select: (s, action: { type: string; payload: IProduct }) => {
        delete s.id;
        Object.assign(s, action.payload);
    },
  },
});

export const { update, select } = currentProduct.actions;

export default currentProduct.reducer;
