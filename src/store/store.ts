import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { add } from "./produits";


const store = configureStore({reducer:combineReducers({ressources:ressourcesReducer})});



// store.dispatch({type:'ressources/add', payload:{
//     id:0,
//     name:'name',
//     description:'',
//     image:'',
//     prix:3,
//     stock:2
// }})
// store.dispatch(add({id:0,description:'',image:'',name:'',prix:1,stock:0}))

// store.subscribe(()=>{
//     console.log(store.getState());
    
// })

// store.dispatch(add({id:1,description:'',image:'',name:'',prix:1,stock:0}))


// store.dispatch(add({id:2,description:'',image:'',name:'',prix:1,stock:0}))


export default store;