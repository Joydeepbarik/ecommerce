import { useEffect, useState } from "react";
import { BlogWrapper } from "../Styles/Blog-Style";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import { Blog_Image_URL, Fetch_Blogs_URL } from "../Api/Api";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


function Blog() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(Fetch_Blogs_URL)
        .then(res => {
            // console.log(res);
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const transformedBlogs = res.data.blogs.map(blog => {
                const [year, month, day] = blog.bdate.split('-'); // Split the date into parts
                return {
                    ...blog,
                    day,   // Add the day as a separate property
                    month: monthNames[parseInt(month) - 1], // Add the month as a separate property
                };
            });
            setBlogs(transformedBlogs);
            console.log(transformedBlogs);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return(
        <>
            <BlogWrapper>
                <div className="page_head">
                    <h2>Our <span>Blogs</span></h2>
                </div>
                <div className="slider_section">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            blogs.length > 0 ?
                            blogs.map((blog, i) => 
                                <SwiperSlide key={i}>
                                    <div className="card">
                                        <div className="card_img">
                                            <img src={`${Blog_Image_URL}/${blog.bimage}`} alt="" className="left"/>
                                        </div>
                                        <div className="right">
                                            <h2>{blog.btitle}</h2>
                                            <div className="author">
                                                <h3>{blog.bwriter}</h3>
                                            </div>
                                            <p>{blog.bsummary}</p>
                                        </div>
                                        <h5>{blog.day}</h5>
                                        <h6>{blog.month}</h6>
                                        <div className="icon">
                                            <ul>
                                                <li><i className="fa-regular fa-heart"></i></li>
                                                <li><i className="fa-regular fa-envelope"></i></li>
                                                <li><i className="fa-solid fa-share-nodes"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                            :
                            <div className="no_blog_message">
                                <p>No Blogs are available.</p>
                            </div>
                        }
                    </Swiper>
                </div>
            </BlogWrapper>
        </>
    );
}

export default Blog;