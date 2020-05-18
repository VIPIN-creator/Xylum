import {createStore, combineReducers, applyMiddleware} from "redux";
import {Indoor} from  "./Indoor";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Cart} from "./Cart";
import {createForms} from "react-redux-form";
import {InitialFeedback} from './forms';
import {Outdoor} from "./Outdoor";
import {Combo} from "./Combo";
import {Fruit} from "./Fruit";

export const configureStore = () => {
    const store = createStore(combineReducers({
        indoor: Indoor,
        cart: Cart,
        outdoor: Outdoor,
        combo: Combo,
        fruit: Fruit,
        ...createForms({
            feedback : InitialFeedback
        })
    }), applyMiddleware(thunk, logger)
    );

    return store;
}