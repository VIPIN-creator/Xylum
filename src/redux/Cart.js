import * as ActionTypes from "./ActionTypes";
import {PLANTS} from "../shared/plants";


const iniState = {
    items: PLANTS,
    addedItems: [],
    total: 0
}

export const Cart = (state = iniState, action) => {
    if(action.type === ActionTypes.ADD_TO_CART){
        let addedItem = state.items.find(item => item.id === action.id) ;
        let existed_Item = state.addedItems.find(item => item.id === action.id) ;

        if(existed_Item){
            addedItem.quantity +=1;
            let newTotal = state.total + JSON.parse(addedItem.price);
            return{
                ...state,
                total:  newTotal 
                 }
        }
        else{
            addedItem.quantity = 1;
            let newTotal = state.total + JSON.parse(addedItem.price);
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if(action.type === ActionTypes.REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (JSON.parse(itemToRemove.price) * JSON.parse(itemToRemove.quantity) )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ActionTypes.ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + JSON.parse(addedItem.price);
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== ActionTypes.SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - JSON.parse(addedItem.price);
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - JSON.parse(addedItem.price);
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    return state
} 
