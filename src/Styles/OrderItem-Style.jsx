import styled from "@emotion/styled";

export const OrderItemWrapper = styled('div')`
    position: relative;
    width: 100%;

    .wrapper_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 0;
        padding-left: 50px;
        padding-right: 0;

        .order_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-bottom: 35px;
            margin-top: 35px;
            border-bottom: thick double #000;

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                border-bottom: none;
            }

            .order_id {
                position: relative;
                width: 100%;
                display: flex;
                margin-bottom: 10px;

                p {
                    position: relative;
                    font-size: 14px;
                    color: #000;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;

                    span {
                        position: relative;
                        color: #555;
                        font-size: 15px;
                    }
                }

            }

            .order_item_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                .order_item_box {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 10px 0;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 1px;
                        background: linear-gradient(to right, #828282, #fff);
                    }

                    &:last-child::before {
                        display: none;
                    }

                    .content_left {
                        position: relative;
                        width: 150px;
                        height: 100px;
                        display: flex;
                        border-radius: 8px;
                        margin-right: 25px;

                        img {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                    }

                    .content_right {
                        position: relative;
                        width: calc(100% - 150px);
                        display: flex;
                        flex-direction: column;

                        .top_content {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 5px;

                            h5 {
                                position: relative;
                                font-size: 19px;
                                font-weight: 600;
                                color: #000;
                                font-family: "SUSE", sans-serif;
                                margin-bottom: 3px;
                            }

                            p {
                                position: relative;
                                font-size: 14px;
                                color: #000;
                                font-family: 'Poppins', sans-serif;

                                span {
                                    color: #555;
                                }

                            }

                        }

                        .bottom_content {
                            position: relative;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;

                            a {
                                position: relative;
                                font-size: 13px;
                                color: #555;
                                font-family: 'Poppins', sans-serif;
                            }

                            p {
                                position: relative;
                                font-size: 14px;
                                color: #000;
                                font-family: 'Poppins', sans-serif;

                                span {
                                    color: #555;
                                }

                            }
                        }
                    }
                }
            }

            .extra_charge {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                border-top: 1px solid #828282;
                padding-top: 10px;

                p {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                    color: #000;
                    margin: 2px 0;

                    span {
                        font-size: 15px;
                    }

                }
            }

            .total_charge {
                position: relative;
                width: 100%;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid #828282;

                p {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    font-family: 'Poppins', sans-serif;
                    font-size: 17px;
                    color: #000;
                    font-weight: 600;

                    span {
                        font-size: 17px;
                        font-weight: 600;
                    }

                }
            }

            .bottom_box {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;

                .status_box {
                    position: relative;
                    display: flex;

                    p {
                        position: relative;
                        font-size: 14px;
                        color: #000;
                        font-family: 'Poppins', sans-serif;
                    }
                }

                .btn_box {
                    position: relative;
                    display: flex;

                    button {
                        position: relative;
                        height: 40px;
                        border-radius: 8px;
                        padding: 0 20px;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        color: #000;
                        font-family: 'Poppins', sans-serif;
                        border: none;
                        margin-right: 15px;
                        background: #E1E0EA;
                        cursor: pointer;
                        transition: all 0.5s;

                        i {
                            margin-right: 10px;
                        }

                        &:last-child {
                            margin-right: 0;
                            background: #009900;
                            color: #fff;
                        }

                        &:hover {
                            transition: all 0.5s;
                            box-shadow: 3px 3px 6px rgba(0,0,0,0.2),
                                        -2px -2px 5px rgba(100,100,100,0.2);
                        }
                    }
                }
            }

        }

        .empty_msg {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                position: relative;
                color: #b4b4b4;
                font-family: 'Poppins', sans-serif;
                font-size: 22px;
                font-weight: 500;
            }
        }
    }    
`;