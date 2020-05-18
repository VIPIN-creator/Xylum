import * as ActionTypes from "./ActionTypes";

export  const Combo = (state = {
    isLoading: true,
    errMess: null,
    combo: []}, action) => {
        switch (action.type){
            case ActionTypes.ADD_COMBO:
                return {...state, isLoading: false, errMess: false, combo: action.payload}

            case ActionTypes.COMBO_FAILED:
                return {...state, isLoading:false, errMess:action.payload}

            case ActionTypes.COMBO_LOADING:
                return {...state, isLoading:true, errMess:false, combo: []}

            default: return state;
        }

        
    }
