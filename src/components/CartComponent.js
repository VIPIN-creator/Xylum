import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row, Label, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Form, Control, Errors} from "react-redux-form";
import {baseUrl} from "../shared/baseUrl";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <=len);
const minLength = (len) => (val) => val && (val.length>=len);
const length = (len) => (val) => val && (val.length===len);
const isNumber =  (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);   

function Cart(props){

const [modal, setModal] = useState(false);
const toggle = () => {setModal(!modal);}
  
 const handleSubmit = (values) => {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Your order will be delivered soon .');
    props.resetFeedbackForm();
}

const handleAddQuantity    = (id) => {
    props.addQuantity(id);
}

const handleSubtractQuantity = (id) => {
    props.subtractQuantity(id);
}

const handleRemove = (id) => {
    props.removeItem(id);
 }


let addedItems =  props.items.length ?
(  
    props.items.map(item=>{
        return(
           
            <div className="row mt-3 bg-white mb-3" key={item.id}>
            
                        <div className="col-sm-3"> 
                        <Link to ={`/${item.category}/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                            <img src={baseUrl + item.image} alt={item.img} className="img-fluid"/>
                            </Link>
                        </div>
                    
                        <div className="col-sm-3 align-self-center">
                        <Link to ={`/${item.category}/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                            <p className="title">{item.name}</p>    
                            </Link>
                            </div>
                            <div className="col-sm-2 align-self-center">
                            <p><b>Rs. {item.price}</b></p>
                            </div>
                            <div className="col-sm-2 align-self-center">
                            <p>
                             <Link to="/cart"><span className="material-icons fa fa-angle-up" onClick={() => {handleAddQuantity(item.id)}}></span></Link>
                             &nbsp; &nbsp;<b>{item.quantity}</b>&nbsp; &nbsp;
                            <Link to="/cart"><i className="material-icons fa fa-angle-down" onClick={() => {handleSubtractQuantity(item.id)}}></i></Link>
                            </p>
                            </div>
                            <div className="col-sm-2 align-self-center">
                            <i onClick ={() => {handleRemove(item.id)}} class="fa fa-2x fa-trash-o" aria-hidden="true"></i>
                            </div>
                        
                   </div>                        
        )
    })
):

 (<div></div>
 )

 let cartItems = props.items.length ? (
<div className="row bg-light text-center  mt-3">
           
    <div className="col-1 col-sm-3 d-none d-sm-block"><b>Product</b></div>
    <div className="col-1 col-sm-3 d-none d-sm-block"><b>Product Name</b></div>
    <div className="col-1 col-sm-2 d-none d-sm-block"><b>Unit Price</b></div>
    <div className="col-1 col-sm-2 d-none d-sm-block"><b>Quantity</b></div>
    <div className="col-1 col-sm-2 d-none d-sm-block"><b>Remove</b></div>
           
     
    {addedItems}
    <div className="col-12">
        <div className="row">
            <div className="col-4 col-sm-3"><h4>Total</h4></div>
            <div className="col-4 col-sm-3 ml-auto"><h4>Rs. {props.total}</h4> </div>
        </div>
    </div>
    <div className="col-12 ">
    <div className="row bg-white">
        <div className="col-sm-12 ml-auto mt-3 mb-3 ">
            <Button className="bg-primary btn btn-lg" onClick={toggle}>Checkout</Button>
                <Modal isOpen={modal} toggle={toggle} >
               
                        <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
                        <ModalHeader toggle={toggle}>Contact Information</ModalHeader>
                    <ModalBody>                           
                    <Row className="form-group">
                            <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators  = {{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        validateOn="blur"
                                    />
                                    <Errors
                                        className="text-danger errors"
                                        model=".name"
                                        show= "touched"
                                        messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            } }
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="address" md={2}>Address</Label>
                                <Col md={10}>
                                    <Control.text model=".address" id="address" name="address"
                                        placeholder="Address"
                                        className="form-control"
                                        validators  = {{
                                            required, minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger errors"
                                        model=".address"
                                        show= "touched"
                                        messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                            } }
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="city" md={2}>City</Label>
                                <Col md={4}>
                                    <Control.text model=".city" id="city" name="city"
                                        placeholder="City"
                                        className="form-control"
                                        validators  = {{
                                            required, minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger errors"
                                        model=".city"
                                        show= "touched"
                                        messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                            } }
                                    />
                                </Col>
                                <Label htmlFor="pincode" md={2}>Pincode</Label>
                                <Col md={4}>
                                    <Control.text model=".pincode" id="pincode" name="pincode"
                                        placeholder="Pincode"
                                        className="form-control"
                                        validators  = {{
                                            required, length: length(6), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger errors"
                                        model=".pincode"
                                        show= "touched"
                                        messages={{
                                                required: 'Required ',
                                                length: 'length must be 6',
                                                isNumber: 'Must be a number'
                                            } }
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="phone" md={2}>Phone</Label>
                                <Col md={3}>
                                    <Control.text model=".phone" id="phone" name="phone"
                                        placeholder="Phone no."
                                        className="form-control"
                                        validators  = {{
                                            required, length: length(10), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger errors"
                                        model=".phone"
                                        show= "touched"
                                        messages={{
                                                required: 'Required ',
                                                length: 'length must be 10',
                                                isNumber: 'Must be a number'
                                            } }
                                    />
                                </Col>                           
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={5}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                         <Errors
                                        className="text-danger errors"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>       
                            <Row className="form-group">
                                <Label htmlFor="message" md={3}>Special Instructions</Label>
                                <Col md={9}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>          
                            </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit" onClick={toggle}>Confirm Purchase</Button>{' '}
                        <Button color="danger" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                        </Form>
                    
                </Modal>
        </div>
    </div>
    </div>

   </div>
  
 )
  : (
    <h3 className="mt-3">Cart is Empty</h3>
     )

    return(
        <div className="container  mb-5" style={{backgroundColor: 'white'}}>
        <Breadcrumb  style={{backgroundColor: 'white'}}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Your Shopping Cart</BreadcrumbItem>
                </Breadcrumb>
                <div style={{backgroundColor: '#F8F8F8'}} className="container">
        <h2>Shopping Cart</h2>
          {cartItems}
          </div>
    </div>
    );
}


 
export default Cart;
