import React, { useEffect } from "react";
import Header from "./HeaderComponent";
import {Route, Redirect, Switch, withRouter} from "react-router-dom";
import Home from "./HomeComponent";
import Indoor from "./IndoorComponent";
import Outdoor from "./OutdoorComponent";
import Combo from "./ComboComponent";
import Fruit from "./FruitComponent";
import Cart from "./CartComponent";
import Footer from "./FooterComponent";
import {connect } from "react-redux";
import {fetchIndoor, addToCart, removeItem, addQuantity, subtractQuantity, fetchOutdoor, fetchCombo, fetchFruit} from "../redux/ActionCreators";
import IndoorDetails from "./IndoorDetailsComponent";
import OutdoorDetails from "./OutdoorDetailsComponent";
import ComboDetails from "./ComboDetailsComponent";
import {actions} from 'react-redux-form';
import FruitDetails from "./FruitDetailsComponent";
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const mapStateToProps = state => {
    return{
        indoor: state.indoor,
        items: state.cart.addedItems,
        total: state.cart.total,
        outdoor: state.outdoor,
        combo: state.combo,
        fruit: state.fruit
    }
}

const mapDispatchToProps = dispatch => ({
    fetchIndoor: () => {dispatch(fetchIndoor())},
    addToCart: (id) => {dispatch(addToCart(id))},
    removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchOutdoor: () => {dispatch(fetchOutdoor())},
    fetchCombo: () => {dispatch(fetchCombo())},
    fetchFruit: () => {dispatch(fetchFruit())}

}) 

function Main(props){

    useEffect(() => {
        props.fetchIndoor();
        props.fetchOutdoor();
        props.fetchCombo();
        props.fetchFruit();
    }, []);

    const IndoorWithId = ({match}) => {
        return (
            <IndoorDetails indoor = {props.indoor.indoor.filter( (plant) => plant.id === parseInt(match.params.id, 10))[0]}
                indoorLoading = {props.indoor.isLoading} indoorErrMess = {props.indoor.indoorErrMess} 
                    addToCart = {props.addToCart}
                />
        );
    }

    const OutdoorWithId = ({match}) => {
        return (
            <OutdoorDetails outdoor = {props.outdoor.outdoor.filter( (plant) => plant.id === parseInt(match.params.id, 10))[0]}
                outdoorLoading = {props.outdoor.isLoading} outdoorErrMess = {props.outdoor.outdoorErrMess} 
                    addToCart = {props.addToCart}
                />
        );
    }

    const ComboWithId = ({match}) => {
        return (
            <ComboDetails combo = {props.combo.combo.filter( (plant) => plant.id === parseInt(match.params.id, 10))[0]}
                comboLoading = {props.combo.isLoading} comboErrMess = {props.combo.comboErrMess} 
                    addToCart = {props.addToCart}
                />
        );
    }

    const FruitWithId = ({match}) => {
        return (
            <FruitDetails fruit = {props.fruit.fruit.filter( (plant) => plant.id === parseInt(match.params.id, 10))[0]}
                fruitLoading = {props.fruit.isLoading} fruitErrMess = {props.fruit.fruitErrMess} 
                    addToCart = {props.addToCart}
                />
        );
    }

    const HomeRender = () => {
        return(
            <Home outdoor = {props.outdoor.outdoor.filter((plant) => plant.home)[0]} 
                  outdoorLoading = {props.outdoor.isLoading} outdoorErrMess = {props.outdoor.outdoorErrMess} 
                  outdoorBest = {props.outdoor.outdoor.filter((plant) => !plant.home)[6]} 

                  combo = {props.combo.combo.filter((plant) => plant.home && plant.category==='comboplants')[0]}
                  comboLoading = {props.combo.isLoading} comboErrMess = {props.combo.comboErrMess} 
                  comboBest = {props.combo.combo.filter((plant) => !plant.home)[6]} 

                  fruit = {props.fruit.fruit.filter((plant) => plant.home && plant.category==='fruitplants')[0]}
                  fruitLoading = {props.fruit.isLoading} fruitErrMess = {props.fruit.fruitErrMess} 
                  fruitBest = {props.fruit.fruit.filter((plant) => !plant.home && plant.category==='fruitplants')[6]}

                  addToCart = {props.addToCart}
                  />
        );
    }

    return(
        <div>
        <Header />
        <TransitionGroup>
  <CSSTransition key={props.location.key} classNames="page" timeout={500}>
        <Switch>
            <Route exact path="/home" component={HomeRender} /> 
            <Route exact path="/indoorplants" component={() => <Indoor indoor = {props.indoor.indoor} indoorLoading = {props.indoor.isLoading} indoorErrMess = {props.indoor.indoorErrMess}  addToCart = {props.addToCart}/>} />
            <Route path ="/indoorplants/:id" component={IndoorWithId} />
            <Route exact path="/outdoorplants" component={() => <Outdoor outdoor = {props.outdoor.outdoor} outdoorLoading = {props.outdoor.isLoading} outdoorErrMess = {props.outdoor.outdoorErrMess}  addToCart = {props.addToCart}/>} />} />
            <Route path ="/outdoorplants/:id" component={OutdoorWithId} />
             <Route exact path="/comboplants" component={() => <Combo combo = {props.combo.combo} comboLoading = {props.combo.isLoading} comboErrMess = {props.combo.comboErrMess}  addToCart = {props.addToCart}/>}/>} />
             <Route path ="/comboplants/:id" component={ComboWithId} />
            <Route  exact path="/fruitplants" component={() => <Fruit fruit = {props.fruit.fruit} fruitLoading = {props.fruit.isLoading} fruitErrMess = {props.fruit.fruitErrMess}  addToCart = {props.addToCart}/>} />
            <Route path ="/fruitplants/:id" component={FruitWithId} />
            <Route path ="/cart" component={() => <Cart  items={props.items} removeItem = {props.removeItem} total={props.total}
                                                        addQuantity = {props.addQuantity} subtractQuantity={props.subtractQuantity} 
                                                        resetFeedbackForm={props.resetFeedbackForm}
                                                        />} />
            <Redirect to ="/home" />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));