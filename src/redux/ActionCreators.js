import * as ActionTypes from "./ActionTypes";

export const fetchIndoor = () => (dispatch) => {
    dispatch(indoorLoading(true));

    return fetch('/indoor')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
  .then(response => response.json())
  .then(indoor => dispatch(addIndoor(indoor)))
  .catch(error => dispatch(indoorFailed(error.message)));
};

export const indoorLoading = () => ({
    type: ActionTypes.INDOOR_LOADING
});

export const addIndoor = (indoor) => ({
    type: ActionTypes.ADD_INDOOR,
    payload: indoor
});

export const indoorFailed = (errmess) => ({
    type: ActionTypes.INDOOR_FAILED,
    payload: errmess
});

export const addToCart = (id) => {
    return{
        type: ActionTypes.ADD_TO_CART,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ActionTypes.ADD_QUANTITY,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: ActionTypes.SUB_QUANTITY,
        id
    }
}

export const fetchOutdoor = () => (dispatch) => {
    dispatch(outdoorLoading(true));

    return fetch('/outdoor')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
  .then(response => response.json())
  .then(indoor => dispatch(addOutdoor(indoor)))
  .catch(error => dispatch(outdoorFailed(error.message)));
};

export const outdoorLoading = () => ({
    type: ActionTypes.OUTDOOR_LOADING
});

export const addOutdoor = (outdoor) => ({
    type: ActionTypes.ADD_OUTDOOR,
    payload: outdoor
});

export const outdoorFailed = (errmess) => ({
    type: ActionTypes.OUTDOOR_FAILED,
    payload: errmess
});

export const fetchCombo = () => (dispatch) => {
    dispatch(comboLoading(true));

    return fetch('/combo')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
  .then(response => response.json())
  .then(combo => dispatch(addCombo(combo)))
  .catch(error => dispatch(comboFailed(error.message)));
};

export const comboLoading = () => ({
    type: ActionTypes.COMBO_LOADING
});

export const addCombo = (combo) => ({
    type: ActionTypes.ADD_COMBO,
    payload: combo
});

export const comboFailed = (errmess) => ({
    type: ActionTypes.COMBO_FAILED,
    payload: errmess
});

export const fetchFruit = () => (dispatch) => {
    dispatch(fruitLoading(true));

    return fetch('/fruit')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
  .then(response => response.json())
  .then(fruit => dispatch(addFruit(fruit)))
  .catch(error => dispatch(fruitFailed(error.message)));
};

export const fruitLoading = () => ({
    type: ActionTypes.FRUIT_LOADING
});

export const addFruit = (fruit) => ({
    type: ActionTypes.ADD_FRUIT,
    payload: fruit
});

export const fruitFailed = (errmess) => ({
    type: ActionTypes.FRUIT_FAILED,
    payload: errmess
});