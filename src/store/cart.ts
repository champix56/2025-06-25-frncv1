import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IProduct from "../interfaces/iproduct";
import { loadProducts } from "./asyncCalling";
interface IProductsSliceState{
    cart:Array<IProduct>
}
const initialState:IProductsSliceState = {
  cart: [],
};

const produits = createSlice({
  name: "cart",
  initialState,
  reducers: {
   
  },
  extraReducers(builder) {
      builder.addCase(loadProducts.fulfilled,(s,action:{type:string,payload?:Array<IProduct>})=>{
        console.log('%c%s','color:green;font-size:30pt','CartextraReducer');
        console.log(action);
        s.cart.push(action.payload[0])
      });
      builder.addCase('ressources/add',(s,action:{type:string,payload?:Array<IProduct>})=>{
        console.log('%c%s','color:orange;font-size:30pt','ajout de produit panier traite');
        console.log(s,action);
       
      });
  },
});



const ressourcesReducer = produits.reducer;
export default ressourcesReducer;
