import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../interfaces/iProduct";
import { loadProducts, saveProductToServer } from "./asyncCalling";
interface IProductsSliceState {
  products: Array<IProduct>;
}
const initialState: IProductsSliceState = {
  products: [],
};

const produits = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    add: (state, action: { type: string; payload: IProduct }) => {
      state.products.push(action.payload);
    },
    setStock: (
      state,
      action: { type: string; payload: { id: number; nouveauStock: number } }
    ) => {
      //  {type:'ressources/setStock',payload:{id:12,nouveauStock:12}}
      const p = state.products.find((fp) => fp.id === action.payload.id);
      p.stock = action.payload.nouveauStock;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      loadProducts.fulfilled,
      (s, action: { type: string; payload?: Array<IProduct> }) => {
        console.log("%c%s", "color:red;font-size:30pt", "extraReducer");
        console.log(action);
        s.products.push(...action.payload);
      }
    );
    builder.addCase(
      saveProductToServer.fulfilled,
      (s, action: { type: string; payload: IProduct }) => {
            const position=s.products.findIndex(p=>p.id===action.payload.id)
            if(position>=0){
                s.products[position]=action.payload;
            }
            else{
                s.products.push(action.payload);
            }

      }
    );
  },
});

export const { add, setStock } = produits.actions;

const ressourcesReducer = produits.reducer;
export default ressourcesReducer;
