import styled from "@emotion/styled";

export const WishlistWrapper = styled('div')`
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
                color: #3F00FF;
            }
        }

        .wishlist_sec {
            position: relative;
            width: 100%;
            margin-top: 25px;

            .sec_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
            }

            .sec_box {
                position: relative;
                width: 25%;
                display: flex;
                padding: 10px;

                .box_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    padding: 15px 25px;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 6px;
                    background: #FFF;
                    box-shadow: 5px 7px 12px rgba(99, 99, 99, 0.22),
                            -3px -3px 6px rgba(207, 207, 207, 0.22);

                    .img_box {
                        position: relative;
                        width: 80px;
                        height: 80px;
                        display: flex;
                        border-radius: 6px;

                        img {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                    }

                    .content_box {
                        position: relative;
                        width: calc(100% - 100px);
                        display: flex;
                        flex-direction: column;

                        h5 {
                            position: relative;
                            display: flex;
                            font-family: "SUSE", sans-serif;
                            font-size: 17px;
                            font-weight: 500;
                            color: #000;
                        }

                        p {
                            position: relative;
                            display: flex;
                            font-family: 'Poppins', sans-serif;
                            font-size: 13px;
                            color: #555;
                            margin-top: 5px;

                            span {
                                padding-left: 8px;
                                font-size: 15px;

                                i {
                                    position: relative;
                                    font-size: 12px;
                                    margin-right: 2px;
                                }
                            }
                        }

                        .action_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 12px;

                            a {
                                position: relative;
                                font-size: 15px;
                                color: #f00;
                                cursor: pointer;

                                &:first-child {
                                    color: #3F00FF;
                                    margin-right: 10px;
                                }
                            }

                            &:hover a:first-child {
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }

            .empty_msg {
                position: relative;
                width: 100%;
                padding: 100px 0;
                display: flex;
                justify-content: center;
                padding-top: 75px;

                p {
                    position: relative;
                    font-family: "SUSE", sans-serif;
                    font-size: 22px;
                    font-weight: 500;
                    color: #7a7a7a;
                }
            }

        }
    }    
`;