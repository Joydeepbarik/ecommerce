import { useContext, useEffect, useState } from "react";
import { ProductsWrapper } from "../Styles/Products-Style";
import { DataContext } from "../Layouts/DataContext";
import axios from "axios";
import { Fetch_Products_Categorywise_URL, Product_Image_URL } from "../Api/Api";



function Products() {

    const {selectedCategory, setCartItems} = useContext(DataContext);
    const [products, setProducts] = useState([]);

    useEffect (() => {
        axios.get(`${Fetch_Products_Categorywise_URL}?category=${selectedCategory}`)
        .then(res => {
            console.log(res);
            setProducts(res.data.products);
        })
        .catch(err => {
            console.log(err);
            setProducts([]);
        })
    }, []);

    const handleAddToCart = (product) => {
        setCartItems((prevProducts) => {
            const updatedItems = prevProducts.map((item) => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 }  // Increment quantity if product exists
                    : item
            );// Match by unique product ID
    
            if (updatedItems.every((item) => item.id !== product.id)) {
                updatedItems.push({ ...product, quantity: 1 });
            }
    
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
            return updatedItems; // Update state with updatedItems
        });
    }

    return(
        <>
            <ProductsWrapper>
                <div className="wrapper_inner">
                    <div className="page_head">
                        <h2>{selectedCategory}</h2>
                    </div>
                    <div className="products_sec">
                        {
                            products.length > 0 ? 
                            products.map((product, index) => 
                                <div className="product_box" key={index}>
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src={`${Product_Image_URL}/${product.pimage}`} alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>{product.pname}</h4>
                                            <div className="rating">
                                                <ul>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                </ul>
                                                <span>(32 Customers)</span>
                                            </div>
                                        </div>
                                        <div className="inner_operation">
                                            <div className="price_sec">
                                                <p>Price (Rs.):</p>
                                                <span><i className="fa-solid fa-indian-rupee-sign"></i>{product.price} {selectedCategory === 'Electronics' ? '' : `(${product.unit})`}</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a onClick={() => handleAddToCart(product)}><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            <div className="empty_msg">
                                <p></p>
                            </div>
                        }
                    </div>
                </div>
            </ProductsWrapper>
        </>
    );
}

export default Products;