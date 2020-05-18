import React from "react";
import { Button, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import {Link} from "react-router-dom";
import Grid from '@bit/joshk.react-spinners-css.grid';

 function IndoorDetails(props){

  

const handleClick = (id) => {
  props.addToCart(id);
}
  

    if(props.indoorLoading){
      return(<div className="text-center mt-5 ml-auto mr-auto"><Grid color="#83BE17" /></div>);
    }
      else if(props.indoorErrMess){
        return (
          <div className="container">
          <div className="row">            
              <h4>{props.indoorErrMess}</h4>
          </div>
      </div>
         );
      }
      else if (props.indoor != null ) {
      
      
      return(
          <div className="container mt-5 mb-5" style={{backgroundColor: '#F8F8F8'}}>
            <Breadcrumb  style={{backgroundColor: '#F8F8F8'}}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to ="/indoorplants">Indoor Plants</Link></BreadcrumbItem>
<BreadcrumbItem active>{props.indoor.name}</BreadcrumbItem>
                </Breadcrumb>
          
          <div className="row">
         
        
            <div className="col-sm-4">
              <img src={baseUrl + props.indoor.image} className="img-fluid" alt="im" />
            </div>
            <div className="col-sm-8">
              <h2>{props.indoor.name}</h2>
              <h3> {props.indoor.price}</h3>
              <hr/>
              <h5>Quick Overview</h5>
              <p>{props.indoor.description}</p>
              <hr/>
              <Button onClick={() => {handleClick(props.indoor.id)}} style={{backgroundColor : '#83BE17'}} className="cart-btn">Add To Cart</Button>
            </div>
          </div> 
         </div>
      );
      }
      else return (<div></div>);

}


export default IndoorDetails;