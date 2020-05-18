import * as ActionTypes from "./ActionTypes";

export  const Indoor = (state = {
    isLoading: true,
    errMess: null,
    indoor: []}, action) => {
        switch (action.type){
            case ActionTypes.ADD_INDOOR:
                return {...state, isLoading: false, errMess: false, indoor: action.payload}

            case ActionTypes.INDOOR_FAILED:
                return {...state, isLoading:false, errMess:action.payload}

            case ActionTypes.INDOOR_LOADING:
                return {...state, isLoading:true, errMess:false, indoor: []}

            default: return state;
        }

        
    }
