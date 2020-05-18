import React, { useState } from "react";
import {Card, CardBody, CardImg, CardTitle,  Button, CardDeck, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {baseUrl} from "../shared/baseUrl";
import { useSpring, animated, config } from "react-spring";
import Grid from '@bit/joshk.react-spinners-css.grid';



function RenderIndoorPlant({plant, addToCart}){


  const [hovered, setState] = useState(false);


  function cancelHover(){
    setState(!hovered);
  }

  function setHover(){
    setState(!hovered);
  }

  const handleClick = (id) => {
    addToCart(id);
    
  }

  const hoverBoxShadow = '0 2 11px rgba(33,33,33,.2)';
  const normalBoxShadow = '0 1 4px  white';

  const change = useSpring({ to : {
    transform: `scale(${hovered ? 1.2 : 1})`,
    boxShadow: hovered ? hoverBoxShadow : normalBoxShadow,
    color: hovered ? '#E31837' : 'black' 
  }, config: config.default })
    
  return(
    
    <CardDeck   className=" col-12 col-sm-3 col-md-4 mt-5 text-center ml-2  mb-3"
          onMouseOver={setHover}
  onMouseOut={ cancelHover}  >
  <animated.div style={change}>
          
    <Card >
    <CardBody>
    <Link to ={`/indoorplants/${plant.id}`} style={{ textDecoration: 'none', color: 'black' }} >    
    <CardImg src={ baseUrl + plant.image} alt="Card image cap" className="img-fluid card-image mb-3"/>
  <CardTitle>{plant.name.charAt(0) + plant.name.slice(1).toLowerCase()}</CardTitle>
  </Link>
  <Button onClick={() => {handleClick(plant.id)}} className="btn" >
       Add To Cart
  </Button>
</CardBody>
</Card>
 </animated.div>
    </CardDeck>
  );
}

function Indoor(props){

  
  

const show = props.indoor.map((plant) => {
    
    return(
    
       <RenderIndoorPlant plant = {plant} onClick ={ props.onClick} key={plant.id}  addToCart={props.addToCart}/>
          );
});

if(props.indoorLoading){
  return(<div className="text-center mt-5 ml-auto mr-auto"><Grid color="#83BE17" /></div>);
}
else if(props.indoorErrMess){
  return (
    <div className="container">
    <div className="row">            
        <h4>{props.leadersErrMess}</h4>
    </div>
</div>
   );
}
else{


return(
    <div style={{backgroundColor: '#F8F8F8'}} >
    <div className="container" >
    <Breadcrumb style={{backgroundColor: '#F8F8F8'}}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Indoor Plants</BreadcrumbItem>
                </Breadcrumb><div className="row">
    
            <div className="col-12  mb-3">
                <h3>Indoor Plants</h3>
            </div>       
          </div>        
          <div className="row">
          {/* <Transition
  items={props.indoor} keys={item => item.id}
  from={{ transform: 'translate3d(0,0,-40%)' }}
  enter={{ transform: 'translate3d(0,0,0px)' }}
  leave={{ transform: 'translate3d(0,0,40px)' }}>
   {item => props => <RenderIndoorPlant style={props} plant = {item} onClick ={ props.onClick} key={item.id}  addToCart={props.addToCart}/> }
</Transition> */ show}

        </div>
   </div>
   </div>
);
}

}

export default Indoor;