import { createSlice } from '@reduxjs/toolkit'
import IProduct from '../interfaces/iproduct';

const initialState = {
    products:[]
}

const produits = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    add:(state,action:{type:string,payload:IProduct})=>{
        state.products.push(action.payload);
    },
    setStock:(state, action:{type:string,payload:{id:number,nouveauStock:number}})=>{
      //  {type:'ressources/setStock',payload:{id:12,nouveauStock:12}}
        const p=state.products.find(fp=>fp.id===action.payload.id);
        p.stock=action.payload.nouveauStock;
    }
  }
});

export const {add,setStock} = produits.actions

const ressourcesReducer= produits.reducer
export default ressourcesReducer;