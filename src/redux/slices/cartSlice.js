import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //add item to cart
        addCartItem:(state,actions)=>{
          state.push(actions.payload)
        },
        //remove item
        removeCartItem:(state,actions)=>{
           return state.filter(item=>item.id!=actions.payload)
        },
        //delete entire cart items
        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const {addCartItem, removeCartItem, emptyCart} = cartSlice.actions

export default cartSlice.reducer