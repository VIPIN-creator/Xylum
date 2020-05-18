import * as ActionTypes from "./ActionTypes";

export  const Fruit = (state = {
    isLoading: true,
    errMess: null,
    fruit: []}, action) => {
        switch (action.type){
            case ActionTypes.ADD_FRUIT:
                return {...state, isLoading: false, errMess: false, fruit: action.payload}

            case ActionTypes.FRUIT_FAILED:
                return {...state, isLoading:false, errMess:action.payload}

            case ActionTypes.FRUIT_LOADING:
                return {...state, isLoading:true, errMess:false, fruit: []}

            default: return state;
        }

        
    }
