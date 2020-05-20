import React, { useState } from "react";
import {Card, CardBody, CardImg, CardTitle,  Button, CardDeck, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import Grid from '@bit/joshk.react-spinners-css.grid';


function RenderFruitPlant({plant, addToCart}){

  const [hovered, setState] = useState(false);


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
    addToCart(id);
  }
    
  return(
    <CardDeck   className=" col-12 col-sm-3 col-md-4 mt-5 text-center ml-2 mb-3"
       onMouseOver={setHover}
  onMouseOut={ cancelHover}>
    <animated.div style={change}>
   <Card >
    <CardBody>

    <Link to ={`/fruitplants/${plant.id}`} style={{ textDecoration: 'none', color: 'black' }} >    
    <CardImg src={plant.image} alt="Card image cap" className="card-image" />
  <CardTitle>{plant.name.charAt(0) + plant.name.slice(1).toLowerCase()}</CardTitle>
  </Link>

  <Button onClick={() => {handleClick(plant.id)}}>Add To Cart</Button>
</CardBody>
    </Card>
    </animated.div>
    </CardDeck>
  );
}

function Fruit(props){

const show = props.fruit.map((plant) => {
    
    return(
       <RenderFruitPlant plant = {plant} onClick ={ props.onClick} key={plant.id}  addToCart={props.addToCart}/>
          );
});

if(props.fruitLoading){
        return(<div className="text-center mt-5 ml-auto mr-auto"><Grid color="#83BE17" /></div>);
}
else if(props.fruitErrMess){
  return (
    <div className="container">
    <div className="row">            
        <h4>{props.fruitErrMess}</h4>
    </div>
</div>
   );
}
else{


return(
    <div style={{backgroundColor: '#F8F8F8'}}>
    <div className="container " >
    <div className="row">
          <Breadcrumb style={{backgroundColor: '#F8F8F8'}}>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Fruit Plants</BreadcrumbItem>
          </Breadcrumb>
            <div className="col-12">
                <h3>Fruit Plants</h3>
            </div>       
          </div>        
          <div className="row">
        {show}
        </div>
   </div>
   </div>
);
}

}

export default Fruit;