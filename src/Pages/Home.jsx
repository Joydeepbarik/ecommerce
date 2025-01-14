import { useContext, useEffect, useState } from "react";
import { HomeWrapper } from "../Styles/Home-Style";
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataContext } from "../Layouts/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Add_Wishlist_URL, Fetch_Products_URL, Fetch_Wishlist_URL, Product_Image_URL } from "../Api/Api";

import "swiper/css";
import { Autoplay } from 'swiper/modules';


function HomePage() {

    const {setSelectedCategory, setCartItems, setConfirmationModalShow, wishlistItems, setWishlistItems} = useContext(DataContext);
    const [productCategories, setProductCategories] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(Fetch_Products_URL)
        .then(res => {
            const categories = res.data.products; // Assuming the API response structure
            const categoryArray = Object.entries(categories);
            setProductCategories(categoryArray);
            console.log(categoryArray);
        })
        .catch(err => {
            // console.log(err);
        })
    }, []);

    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login == "true"){
            const user = localStorage.getItem("userData");
            const userData = JSON.parse(user);

            axios.get(`${Fetch_Wishlist_URL}?name=${userData.user}`)
            .then(res => {
                const products = res.data.wishlist.productlist;
                const jsonProducts = JSON.parse(products);
                setWishlistItems(jsonProducts);
                console.log(jsonProducts);
                setReload(false);
            })
            .catch(err => {
                console.log(err);
                setReload(false);
            })
        }
    }, [reload]);

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

    const handleProductsPageRedirect = (category) => {
        setSelectedCategory(category);
        navigate('/products');
    }

    const handleWishlist = (product) => {
        const login = localStorage.getItem("login");
    
        if (login == "true") { // Check if the user is logged in
            const user = localStorage.getItem("userData");
            const userData = JSON.parse(user);
            setWishlistItems((prevProducts) => {
                let updatedWishlist;
    
                const existingProduct = prevProducts.find(item => item.id === product.id);
    
                if (existingProduct) {
                    updatedWishlist = prevProducts.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                } else {
                    updatedWishlist = [...prevProducts, { ...product, quantity: 1 }];
                }
    
                const inputs = {
                    name: userData.user,
                    products: JSON.stringify(updatedWishlist)
                };

                axios.post(Add_Wishlist_URL, inputs, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(res => {
                    // console.log(res);
                    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                    setReload(true);
                })
                .catch(err => {
                    // console.log(err);
                })

                return updatedWishlist; // Update state
            });
        } else {
            setConfirmationModalShow(true);
        }
    }; 

    return(
        <>
            <HomeWrapper>
                <div className="wrapper_inner">
                    <div className="banner_section">
                        <div className="banner_content">
                            <Swiper 
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="image_box">
                                            <img src="images/Banner-1.png" alt="banner" />
                                        </div>
                                        <div className="item_box">
                                            <div className="box_inner">
                                                <h4>Top Sale</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id sapiente neque laudantium quasi velit consequuntur, ullam aliquid odit numquam dicta explicabo. Delectus tempora laboriosam facere sapiente non sequi inventore!</p>
                                                <button>Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="image_box">
                                            <img src="images/Banner-2.png" alt="banner" />
                                        </div>
                                        <div className="item_box">
                                            <div className="box_inner">
                                                <h4>Top Sale</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id sapiente neque laudantium quasi velit consequuntur, ullam aliquid odit numquam dicta explicabo. Delectus tempora laboriosam facere sapiente non sequi inventore!</p>
                                                <button>Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="image_box">
                                            <img src="images/Banner-3.png" alt="banner" />
                                        </div>
                                        <div className="item_box">
                                            <div className="box_inner">
                                                <h4>Top Sale</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id sapiente neque laudantium quasi velit consequuntur, ullam aliquid odit numquam dicta explicabo. Delectus tempora laboriosam facere sapiente non sequi inventore!</p>
                                                <button>Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="bottom_wave">
                            <img src="images/wave.png" alt="wave" />
                        </div>
                    </div>

                    {/* Top Sale Section */}
                    <div className="products_section">
                        <div className="sec_inner">
                            <div className="sec_head">
                                <h3>Top <span>Sale</span></h3>
                                <a><span>View more<i class="fa-solid fa-angles-right"></i></span></a>
                            </div>
                            <div className="product_box_sec">
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recently Added */}
                    <div className="products_section">
                        <div className="sec_inner">
                            <div className="sec_head">
                                <h3>Recently <span>Added</span></h3>
                                <a><span>View more<i class="fa-solid fa-angles-right"></i></span></a>
                            </div>
                            <div className="product_box_sec">
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_box">
                                    <div className="box_inner">
                                        <div className="inner_top">
                                            <img src="images/product.jpg" alt="" />
                                        </div>
                                        <div className="inner_bottom">
                                            <h4>Dell Inspiron 15 3000 series</h4>
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
                                                <span>42/- (per kg)</span>
                                            </div>
                                            <div className="btn_sec">
                                                <a><i className="fa-regular fa-heart"></i></a>
                                                <a><i className="fa-solid fa-cart-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="product_category_section_head">
                        <h2>Product <span>Categories</span></h2>
                    </div>

                    {
                        productCategories.length > 0 ?
                        productCategories.map((productCategory, index) => 
                        <div className="products_section" id={productCategory[0]} key={index}>
                            <div className="sec_inner">
                                <div className="sec_head">
                                    <h3><p>{productCategory[0]}</p></h3>
                                    <a onClick={() => handleProductsPageRedirect(productCategory[0])}><span>View more<i class="fa-solid fa-angles-right"></i></span></a>
                                </div>
                                <div className="product_box_sec">
                                    {
                                        productCategory[1].length > 0 ?
                                        productCategory[1].map((product, i) =>
                                            <div className="product_box" key={i}>
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
                                                            <span><i className="fa-solid fa-indian-rupee-sign"></i>{product.price} {productCategory[0] === 'Electronics' ? '' : `(${product.unit})`}</span>
                                                        </div>
                                                        <div className="btn_sec">
                                                            <a onClick={() => handleWishlist(product)}><i className={`fa-${wishlistItems.includes(product.id) ? 'solid' : 'regular'} fa-heart`}></i></a>
                                                            <a onClick={() => handleAddToCart(product)}><i className="fa-solid fa-cart-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        <div className="no_product_message"></div>
                                    }
                                </div>
                            </div>
                        </div>
                        )
                        :
                        <div className="empty_message"></div>
                    }
                </div>
            </HomeWrapper>
        </>
    );
}


export default HomePage;