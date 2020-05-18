import * as ActionTypes from "./ActionTypes";

export  const Outdoor = (state = {
    isLoading: true,
    errMess: null,
    outdoor: []}, action) => {
        switch (action.type){
            case ActionTypes.ADD_OUTDOOR:
                return {...state, isLoading: false, errMess: false, outdoor: action.payload}

            case ActionTypes.OUTDOOR_FAILED:
                return {...state, isLoading:false, errMess:action.payload}

            case ActionTypes.OUTDOOR_LOADING:
                return {...state, isLoading:true, errMess:false, outdoor: []}

            default: return state;
        }

        
    }
