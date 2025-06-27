import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./produits";
import rcart from "./cart";
import { loadProducts } from "./asyncCalling";
// import { loadProducts } from "./asyncCalling";

const r = (state = {}, action: any) => {
  console.log(action);
  return state;
};
const store = configureStore({
  reducer: { ressources: ressourcesReducer, vide: r ,cart :rcart},
});

// store.dispatch({type:'ressources/add', payload:{
//     id:0,
//     name:'name',
//     description:'',
//     image:'',
//     prix:3,
//     stock:2
// }})
//  store.dispatch(add({id:-1,description:'',image:'',name:'',prix:1,stock:0}))

store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch(add({id:1,description:'',image:'',name:'',prix:1,stock:0}))

// store.dispatch(add({id:2,description:'',image:'',name:'',prix:1,stock:0}))
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
store.dispatch(loadProducts());
export default store;
