import React, { useState } from "react";
import {Card, CardBody, CardImg, CardTitle,  Button, CardDeck} from "reactstrap";
import {Link} from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import Grid from '@bit/joshk.react-spinners-css.grid';


function Render(props){

  const [hovered, setState] = useState(false);
console.log(props.isLoading);


  function cancelHover(){
    setState(!hovered);
  }

  function setHover(){
    setState(!hovered);
  }
  
  const hoverBoxShadow = '0 2 11px rgba(33,33,33,.2)';
  const normalBoxShadow = '0 1 4px  white';

  const change = useSpring({ to : {
    transform: `scale(${hovered ? 1.2 : 1})`,
    boxShadow: hovered ? hoverBoxShadow : normalBoxShadow,
    color: hovered ? '#E31837' : 'black' 
  }, config: config.default })
 

  const handleClick = (id) => {
    props.addToCart(id);
  }

 if(props.isLoading){
  return(<div className="text-center mt-5 ml-5"><Grid color="#83BE17" /></div>);
}
 else if(props.errMess){
   return( <div className="container">
   <div className="row">            
       <h4>{props.errMess}</h4>
   </div>
</div>);
 } 
 else {
   return(
    <animated.div style={change} onMouseOver={setHover}
    onMouseOut={ cancelHover} className="col-sm-4  text-center">
    <Card >
     <CardBody>
 
     <Link to ={`/${props.plant.category}/${props.plant.id}`} style={{ textDecoration: 'none', color: 'black' }} >    
     <CardImg src={props.plant.image} alt="Card image cap" className="card-image" />
   <CardTitle>{props.plant.name.charAt(0) + props.plant.name.slice(1).toLowerCase()}</CardTitle>
   </Link>
 
   <Button onClick={() => {handleClick(props.plant.id)}}>Add To Cart</Button>
 </CardBody>
     </Card>
     </animated.div>
   );
 }
}

function Services(){
  return(
    <div className="mt-5 " >
  <h3>Services</h3>
  <hr />
  <div className="row text-center justify-content-around"  >
  <div className="col-sm-3  mr-2">
  <img src={"assets/images/vehicle.png"} style={{}} className="img-fluid" alt="im" />
  <h4>Free Shiping</h4>
  <p>We have a worldwide delivery for most of the mentioned items and our same day delivery is a unique idea to keep the folks happy.   </p>
  </div>
  <div className="col-sm-3  mr-2">
  <img src={"assets/images/simple.png"} style={{}} className="img-fluid" alt="imge" />
  <h4>Plants, Simplified</h4>
  <p>Order plants ready to be placed in your home, office or garden. Just Unpack, Relax and Enjoy your green buddies.</p>
  </div>
  <div className="col-sm-3 mr-2">
  <img src={"assets/images/medal.png"} style={{}} className="img-fluid"  alt="ima"/>
  <h4>Money, Back</h4>
  <p>Orders delivered & accepted by the customer can be refunded. In case you feel the order is not as per specification, please contact our customer care team immediately in 24hrs.</p>
  </div>
  <div className="col-sm-4"></div>
</div>
</div>
);
}

function Home(props){


  return(
    <div className="container">
    <div className="row mt-5" style={{backgroundColor: '#f8f8f8'}}>
    <div className="col-12">
    <h3 className="mt-2" >New Arrivals</h3>
    <hr />
    <div className="row mt-5 mb-4" >
    
    <CardDeck>
      <Render plant = {props.outdoor} isLoading = {props.outdoorLoading} 
              errMess = {props.outdoorErrMess} onClick ={ props.onClick} addToCart={props.addToCart} />
       <Render plant = {props.combo} isLoading = {props.comboLoading} 
              errMess = {props.comboErrMess} onClick ={ props.onClick} addToCart={props.addToCart} />
       <Render plant = {props.fruit} isLoading = {props.fruitLoading} 
              errMess = {props.fruitErrMess} onClick ={ props.onClick} addToCart={props.addToCart} />
    </CardDeck>
    </div>
    </div>
    </div>
      <Services />
      <div className="row mt-5" style={{backgroundColor: '#f8f8f8'}}>
    <div className="col-12">
    <h3 className="mt-2" >Best Selling</h3>
    <hr />
    <div className="row mt-5 mb-4" >
    
    <CardDeck>
      <Render plant = {props.outdoorBest} isLoading = {props.outdoorLoading} 
              errMess = {props.outdoorErrMess} onClick ={ props.onClick} addToCart={props.addToCart} />
       <Render plant = {props.comboBest} isLoading = {props.comboLoading} 
              errMess = {props.comboErrMess} onClick ={ props.onClick} addToCart={props.addToCart} />
       <Render plant = {props.fruitBest} isLoading = {props.fruitLoading} 
              errMess = {props.fruitErrMess} onClick ={ props.onClick} addToCart={props.addToCart} />
    </CardDeck>
    </div>
    </div>
    </div>
      
      
    </div>
  );
}

export default Home;