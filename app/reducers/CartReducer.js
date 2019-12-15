import { ORDER_ITEM, ORDER_ITEM_COUNT, INCRESS_ORDER_ITEM, ADD_CHANGE_ORDER_ITEM, ADD_ORDER_ITEM } from "../actions/types";

const initialState = {
    items:[],
    item:{},
    totelPrice:0,
    itemLenght:0
};

export default function(state = initialState,action){
    switch(action.type){
        
        case ADD_CHANGE_ORDER_ITEM:
        return{
            ...state,
            items: [action.payload,...state.items] ,  
            totelPrice: state.totelPrice+ action.payload.price 
        }

        case ADD_ORDER_ITEM:
        return{
            ...state,
            items: [action.payload,...state.items] ,
            itemLenght: state.items.length+1,  
            totelPrice: state.totelPrice+ action.payload.price*action.payload.qty  
        }

        case INCRESS_ORDER_ITEM:
        return{
            ...state,
            //items: [...initialState.items,...initialState.items.map(item => (item.itemName == action.payload.item.itemName ? item.qty+action.payload.item.qty: item.qty))], 
            items: state.items.filter(
                item => item.itemName !== action.payload.itemName
              )

        }
        default:
        return state;
    }
}