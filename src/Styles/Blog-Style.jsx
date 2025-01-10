import styled from "@emotion/styled";

export const BlogWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding-top: 140px;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-top: 70px; */

        h2 {
            position: relative;
            font-family: 'Lemonada', cursive;
            font-size: 33px;
            font-weight: 700;
            color: #000;
            display: flex;
            align-items: baseline;

            span {
                color: #3F00FF;
                font-family: 'Oleo Script', cursive;
                font-size: 38px;
                margin-left: 8px;

            }
        }
    }

    .slider_section {
        position: relative;
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;

        .swiper {
            position: relative;
            width: 1100px;

            .swiper-slide {
                position: relative;
                width: 100%;
                padding: 0px 100px;

                .card {
                    position: relative;
                    width: 100%;
                    height: 450px;
                    margin: 100px auto;
                    background: #fff;
                    box-shadow: 7px 7px 50px 0px rgba(0,0,0,.7);

                    .card_img {
                        float: left;
                        position: relative;
                        left: 30px;
                        top: -40px;
                        height: 320px;
                        width: 530px;
                        background: #fff;
                        box-shadow: 8px 8px 50px 0px rgba(0,0,0,.7);
                        overflow: hidden;

                        img.left {
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            height: 100%;
                            width: 100%;
                            transform: translate(-50%, -50%);
                        }
                    }

                    .right {
                        margin-left: 590px;
                        margin-right: 20px;

                        h2 {
                            padding-top: 15px;
                            font-size: 17px;
                            color: #555;
                            font-family: 'Lemonada', cursive;
                            line-height: 1.4;
                        }

                        .author {
                            position: relative;
                            width: max-content;
                            border-radius: 6px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 15px;

                            img {
                                position: relative;
                                width: 30px;
                                border-radius: 50%;
                                margin-right: 15px;
                            }

                            h3 {
                                font-size: 20px;
                                color: #000;
                                font-family: 'Lemonada', cursive;
                                font-weight: 500;
                            }
                        }

                        p {
                            position: relative;
                            text-align: justify;
                            padding-top: 10px;
                            font-size: 15px;
                            line-height: 150%;
                            font-family: 'Poppins', sans-serif;
                            color: rgb(133, 131, 131);
                            line-height: 1.5;
                            font-weight: 500;
                            margin-top: 15px;
                        }
                    }

                    h5 {
                        position: absolute;
                        left: 30px;
                        bottom: 30px;
                        font-size: 6rem;
                        color: #c3c3c3;
                        font-weight: 700;
                        font-family: 'Poppins', sans-serif;
                    }

                    h6 {
                        position: absolute;
                        left: 30px;
                        bottom: 21px;
                        font-size: 1.8rem;
                        color: #c3c3c3;
                        font-weight: 600;
                        font-family: 'Poppins', sans-serif;
                    }

                    .icon {
                        position: relative;
                        margin-left: 250px;
                        width: 250px;
                        height: 50px;

                        ul {
                            position: relative;
                            width: 100%;
                            display: flex;

                            li {
                                width: 40px;
                                height: 40px;
                                list-style: none;
                                color: #7b7b7b;
                                margin-right: 10px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 6px;
                                cursor: pointer;
                                background: #fff;
                                box-shadow: 8px 10px 20px rgba(0,0,0,0.2),
                                            -4px -4px 10px rgba(153, 153, 153, 0.2);

                                &:last-child {
                                    margin-right: 0;
                                }

                                i {
                                    font-size: 18px;
                                    color: #6a6a6a;
                                }
                            }
                        }
                    }

                    .fab {
                        position: absolute;
                        right: -30px;
                        bottom: -30px;
                        width: 60px;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #3F00FF;
                        text-align: center;
                        border-radius: 50%;
                        box-shadow: 5px 5px 30px 0px rgba(0,0,0,.7);
                        box-sizing: border-box;
                        cursor: pointer;

                        i {
                            font-size: 20px;
                            color: #fff;
                        }
                    }
                }
            }

            .swiper-button-next {
                top: 83% !important;
                right: 70px !important;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #3F00FF;
                border-radius: 50%;
                box-shadow: 5px 5px 30px 0px rgba(0,0,0,.7);
                box-sizing: border-box;
                cursor: pointer;

                &::after {
                    font-size: 22px;
                    color: #fff;
                    font-weight: 900;
                }
            }
            .swiper-button-prev {
                top: 83% !important;
                left: 70px !important;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #3F00FF;
                border-radius: 50%;
                box-shadow: 5px 5px 30px 0px rgba(0,0,0,.7);
                box-sizing: border-box;
                cursor: pointer;

                &::after {
                    font-size: 22px;
                    color: #fff;
                    font-weight: 900;
                }
            }
        }
    }
`;