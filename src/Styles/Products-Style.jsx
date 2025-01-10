import styled from "@emotion/styled";

export const ProductsWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding-top: 70px;

    .wrapper_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px 75px;

        .page_head {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
            padding: 0 25px;

            h2 {
                position: relative;
                font-family: 'Lemonada',cursive;
                font-size: 30px;
                font-weight: 700;
                color: #009900;;
            }
        }

        .products_sec {
            position: relative;
            width: 100%;
            display: flex;
            margin-top: 60px;
            flex-wrap: wrap;

            .product_box {
                position: relative;
                width: 25%;
                padding: 25px;
                margin-bottom: 20px;

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
`;