import styled from "@emotion/styled";

export const HomeWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding-top: 70px;

    .wrapper_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        .banner_section {
            position: relative;
            width: 100%;
            height: 450px;
            margin-bottom: 200px;

            .banner_content {
                position: relative;
                width: 100%;
                height: 100%;
                background: #3F00FF;

                .swiper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    padding-top: 50px;

                    .swiper-slide {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        padding: 0px 100px;

                        .slider_box{
                            position: relative;
                            width: 100%;
                            height: 100%;
                            display: flex;

                            .image_box{
                                position: relative;
                                width: 600px;
                                height: 100%;

                                img{
                                    position: relative;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: contain;
                                }
                            }

                            .item_box{
                                position: relative;
                                width: calc(100% - 600px);
                                height: 100%;
                                display: flex;
                                align-items: center;

                                .box_inner{
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;

                                    h4{
                                        position: relative;
                                        font-family: 'Lemonada', cursive;
                                        font-size: 35px;
                                        font-weight: 600;
                                        color: #fff;
                                    }

                                    p{
                                        position: relative;
                                        font-family: 'Poppins', sans-serif;
                                        font-size: 18px;
                                        color: #fff;
                                        margin-top: 5px;
                                    }

                                    button{
                                        position: relative;
                                        width: max-content;
                                        padding: 12px 40px;
                                        font-family: 'Poppins',sans-serif;
                                        font-size: 15px;
                                        font-weight: 500;
                                        cursor: pointer;
                                        border: none;
                                        background: #fff;
                                        color: #3F00FF;
                                        border-radius: 35px 35px 35px 35px/20px 20px 20px 20px;
                                        margin-top: 35px;
                                    }
                                }
                            }
                        }

                        &:nth-of-type(odd) {
                            .slider_box {
                                .image_box {
                                    padding-right: 30px;
                                }

                                .item_box {
                                    padding-left: 30px;
                                }
                            }
                        }

                        &:nth-of-type(even) {
                            .slider_box {
                                flex-direction: row-reverse;
                                
                                .image_box {
                                    padding-left: 30px;
                                }

                                .item_box {
                                    padding-right: 30px;
                                }
                            }
                        }
                    }
                }
            }

            .bottom_wave {
                position: absolute;
                bottom: -200px;
                left: 0;
                width: 100%;
                display: flex;

                img {
                    position: relative;
                    width: 100%;
                    height: 200px;
                }
            }
        }

        .products_section{
            position: relative;
            width: 100%;
            display: flex;
            padding: 50px 75px;

            .sec_inner{
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                .sec_head{
                    position: relative;
                    width: 100%;
                    padding: 0px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    h3 {
                        position: relative;
                        font-family: 'Lemonada', cursive;
                        font-size: 30px;
                        font-weight: 700;
                        color: #000;
                        display: flex;

                        span{
                            font-family: 'Oleo Script', cursive;
                            font-size: 38px;
                            color: #E5322D;
                            margin-left: 8px;
                        }

                        p {
                            font-family: 'Oleo Script', cursive;
                            font-size: 38px;
                            color: #3F00FF;
                            margin-left: 8px;
                        }
                    }

                    a {
                        position: relative;
                        width: 175px;
                        height: 45px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        cursor: pointer;
                        border: 2px solid #6a6a6a;
                        font-family: 'Poppins', sans-serif;
                        border-radius: 35px 35px 35px 35px/20px 20px 20px 20px;
                        overflow: hidden;
                        
                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            background: #6a6a6a;
                            transform: scaleX(1);
                            transform-origin: left;
                            transition: transform 0.6s;
                        }

                        &:hover::before {
                            transform: scaleX(0);
                            transform-origin: right;
                            transition: transform 0.6s;
                        }

                        span {
                            color: #fff;
                            font-size: 15px;
                            z-index: 5;
                            transition: all 0.6s;

                            
                            i {
                                margin-left: 8px;
                                transition: all 0.6s;
                            }
                        }

                        &:hover span {
                            color: #6a6a6a;
                            transition: all 0.6s;

                            i {
                                margin-left: 15px;
                                transition: all 0.6s;
                            }
                        }
                    }
                }

                .product_box_sec {
                    position: relative;
                    margin-top: 30px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    .product_box {
                        position: relative;
                        width: 25%;
                        padding: 25px;

                        .box_inner {
                            position: relative;
                            width: 100%;
                            display: flex;
                            border-radius: 8px;
                            flex-direction: column;
                            cursor: pointer;
                            overflow: hidden;
                            background: #fff;
                            box-shadow: 6px 8px 15px rgba(0,0,0,0.2),
                                        -3px -3px 8px rgba(152, 152, 152, 0.2);

                            .inner_top {
                                position: relative;
                                width: 100%;
                                height: 200px;
                                display: block;
                                border-radius: 8px 8px 0 0;
                                overflow: hidden;

                                img {
                                    position: relative;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: contain;
                                    transition: all 0.6s ease-in-out;
                                }
                            }

                            .inner_bottom {
                                width: 100%;
                                padding: 25px 30px;
                                padding-bottom: 30px;
                                display: flex;
                                flex-direction: column;

                                h4 {
                                    position: relative;
                                    width: 100%;
                                    white-space: nowrap;
                                    font-family: "SUSE", sans-serif;
                                    font-size: 20px;
                                    font-weight: 700;
                                    color: #000;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }

                                .rating {
                                    position: relative;
                                    width: 100%;
                                    margin-top: 10px;
                                    display: flex;
                                    align-items: center;

                                    ul {
                                        position: relative;
                                        display: flex;
                                        align-items: center;

                                        i {
                                            position: relative;
                                            font-size: 15px;
                                            margin-right: 3px;
                                            color: #ffa534	;
                                        }
                                    }

                                    span {
                                        position: relative;
                                        margin-left: 5px;
                                        font-family: 'Poppins', sans-serif;
                                        font-size: 14px;
                                        color: #6a6a6a;
                                    }
                                }
                            }

                            .inner_operation {
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: -250px;
                                background: #fff;
                                border-radius: 10px;
                                box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.353),
                                            -2px -2px 8px rgba(196, 196, 196, 0.353);
                                margin-inline: auto;
                                width: 90%;
                                display: flex;
                                opacity: 0;
                                flex-direction: column;
                                padding: 15px 20px;
                                transition: opacity 1s 1s;

                                .price_sec {
                                    position: relative;
                                    display: flex;
                                    align-items: center;
                                    font-family: "SUSE", sans-serif;

                                    p {
                                        position: relative;
                                        font-size: 15px;
                                        font-weight: 500;
                                        color: #222;
                                    }

                                    span {
                                        position: relative;
                                        margin-left: 6px;
                                        font-size: 15px;
                                        color: #555;

                                        i {
                                            position: relative;
                                            font-size: 12px;
                                            margin-right: 2px;
                                        }
                                    }
                                }

                                .btn_sec {
                                    position: relative;
                                    margin-top: 15px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: flex-end;

                                    a {
                                        position: relative;
                                        text-decoration: none;
                                        padding: 8px 20px;
                                        font-size: 17px;
                                        border-radius: 5px;
                                        color: #fff;

                                        &:first-child {
                                            background: #E5322D;
                                            margin-right: 10px;
                                        }

                                        &:last-child {
                                            background: #009900;
                                        }
                                    }
                                }
                            }

                            &:hover {
                                animation: removeOverflow 2s forwards;
                            }

                            &:not(:hover) {
                                animation: showOverflow 2s forwards;
                            }

                            &:hover .inner_top img {
                                transform: scale(1.2);
                                transition: all 0.6s ease-in-out;
                            }

                            &:hover .inner_operation {
                                animation: showOperation 1s forwards;
                                opacity: 1;
                                transition: opacity 0.3s;
                            }

                            &:not(:hover) .inner_operation {
                                animation: hideOperation 1s forwards;
                            }

                            @keyframes showOperation {
                                50% {
                                    transform: translateY(-250px);
                                }
                                100% {
                                    transform: translateY(-200px);
                                }
                            }

                            @keyframes hideOperation {
                                0% {
                                    transform: translateY(-200px);
                                }
                                50% {
                                    transform: translateY(-250px);
                                }
                                100% {
                                    transform: translateY(-100px);
                                }
                            }

                            @keyframes removeOverflow {
                                to {
                                    overflow: initial;
                                }
                            }

                            @keyframes showOverflow {
                                0% {
                                    overflow: initial;
                                    pointer-events: none;
                                }
                                50% {
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
            }
        }

        .product_category_section_head {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 50px 100px;

            h2 {
                position: relative;
                font-family: 'Lemonada', cursive;
                font-size: 35px;
                font-weight: 700;
                color: #000;

                span {
                    font-family: 'Oleo Script', cursive;
                    font-size: 40px;
                    color: #009900
                }
            }
        }
    }
`;