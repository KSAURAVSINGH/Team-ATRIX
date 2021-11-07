import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const product= data.product.find(x=> x._id=== props.match.params.id);
    if (!product){
        
        return <div>Product Not Found</div>;
    }
    console.log(product._id);
    return(
        <div>
            <Link to="/">Back To Home</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price : Rs {product.price}    
                        </li>
                        <li>
                            Description :<p>{product.description}</p>
                        </li>    
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">Rs {product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock>0? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="error">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add To Cart</button>
                            </li>
                            <li>
                                <a href="https://react-chatapp-frontend.herokuapp.com/"> <button className="primary block" style={{backgroundColor: "#008CBA",color:"white"}} >Click to negotiate</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}