import { ORDER_ITEM,ORDER_ITEM_COUNT,INCRESS_ORDER_ITEM, ADD_CHANGE_ORDER_ITEM, ADD_ORDER_ITEM } from './types';

export const addToCartItem =(item) =>{
    return{
        type: ADD_ORDER_ITEM,
        payload:item
    } 
}

export const changeCartItem =(item) =>{
    return{
        type: INCRESS_ORDER_ITEM,
        payload:item
    } 
}

export const addToChangeCartItem =(item) =>{
    return{
        type: ADD_CHANGE_ORDER_ITEM,
        payload:item
    }
    
}

