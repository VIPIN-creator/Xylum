import React from "react";
import { Button, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import {Link} from "react-router-dom";
import Grid from '@bit/joshk.react-spinners-css.grid';


 function FruitDetails(props){


  function handleClick(id) {
    props.addToCart(id);
    }
  

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
      else if (props.fruit != null ) {
      
      
      return(
          <div className="container mt-5 mb-5" style={{backgroundColor: '#F8F8F8'}}>
<Breadcrumb  style={{backgroundColor: '#F8F8F8'}}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to ="/outdoorplants">Fruit Plants</Link></BreadcrumbItem>
<BreadcrumbItem active>{props.fruit.name}</BreadcrumbItem>
                </Breadcrumb>
          
          <div className="row">
            <div className="col-sm-4">
              <img src={baseUrl + props.fruit.image} className="img-fluid"  alt="ime"/>
            </div>
            <div className="col-sm-8">
              <h2>{props.fruit.name}</h2>
              <h3>Rs. {props.fruit.price}</h3>
              <hr/>
              <h5>Quick Overview</h5>
              <p>{props.fruit.description}</p>
              <hr/>
              <Button onClick={()  => { handleClick(props.fruit.id);  }} style={{backgroundColor : '#83BE17', border: '0px'}} className="cart-btn">Add To Cart</Button>
             
            </div>
          </div> 
         </div>
      );
      }
      else return (<div></div>);

}


export default FruitDetails;