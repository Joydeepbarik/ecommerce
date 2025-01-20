import styled from "@emotion/styled";

export const OrderItemWrapper = styled('div')`
    position: relative;
    width: 100%;

    .wrapper_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        .order_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-bottom: 20px;
            margin-top: 20px;
            border-bottom: 1px dashed #7a7a7a;

            .top_box {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;

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
                        margin-bottom: 5px;

                        h5 {
                            position: relative;
                            font-size: 19px;
                            font-weight: 600;
                            color: #000;
                            font-family: "SUSE", sans-serif;
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

            .bottom_box {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

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

                        &:last-child {
                            margin-right: 0;
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
    }    
`;