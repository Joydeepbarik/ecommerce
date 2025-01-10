import styled from "@emotion/styled";

export const ContactWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding-top: 70px;

    .wrapper_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px 100px;

        .head_sec {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            h3{
                position: relative;
                font-family: 'Lemonada',cursive;
                font-size: 30px;
                font-weight: 700;
                color: #000;

                span{
                    font-family: 'Oleo Script',cursive;
                    font-size: 38px;
                    color: #3F00FF;
                    margin-left: 8px;
                }
            }
        }

        .contact_info_sec {
            position: relative;
            margin-top: 100px;
            display: flex;
            justify-content: space-evenly;

            .info_box {
                position: relative;
                width: 300px;
                background: linear-gradient(to bottom, #3F00FF 50%, #1bf0e2 100%);
                display: flex;
                padding: 25px;
                padding-top: 75px;
                padding-bottom: 30px;
                border-radius: 8px;
                box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.152);

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    overflow: hidden;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 350px;
                        height: 350px;
                        background: #ffffff37;
                        transform: rotate(31deg) translate(-18%, 33%);
                        backdrop-filter: blur(25px);
                        z-index: 10;
                    }
                }

                .icon_sec {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;

                    .icon_box {
                        position: relative;
                        width: 100px;
                        height: 100px;
                        background: #f7f7f7;
                        border-radius: 50%;
                        padding: 8px;
                        z-index: 5;
                        transform: translateY(-50%);

                        span {
                            position: absolute;
                            top: 50%;
                            width: 20px;
                            height: 20px;
                            background: #f7f7f7;
                            display: flex;

                            &::before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background: #3F00FF;
                            }

                            &:nth-child(1) {
                                left: -19px;

                                &::before {
                                    border-top-right-radius: 10px;
                                }
                            }

                            &:nth-child(2) {
                                right: -19px;

                                &::before {
                                    border-top-left-radius: 10px;
                                }
                            }
                        }

                        .icon {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            background: #FFF;
                            z-index: 20;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24),
                                        -2px -2px 7px rgba(86, 86, 86, 0.321);

                            i {
                                position: relative;
                                font-size: 35px;
                                color: #3F00FF;
                            }
                        }
                    }
                }

                .box_items {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    z-index: 20;

                    p {
                        position: relative;
                        font-family: 'Poppins', sans-serif;
                        font-size: 16px;
                        font-weight: 500;
                        color: #FFF;
                        text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.515);
                    }

                    span {
                        position: relative;
                        margin: 6px 0;
                        font-family: "SUSE", sans-serif;
                        font-size: 17px;
                        font-weight: 500;
                        color: #FFF;
                        text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.515);
                    }
                }
            }
        }

        .form_sec {
            position: relative;
            width: 100%;
            display: flex;
            margin-top: 80px;
            justify-content: center;
            align-items: center;

            form  {
                position: relative;
                width: 900px;
                background: #fff;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 35px 40px;
                border-radius: 8px;
                box-shadow: 8px 10px 20px rgba(0,0,0,0.2),
                            -4px -4px 10px rgba(153, 153, 153, 0.2);

                .input_box{
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;

                    &.halfWidth {
                        width: 47.5%;
                    }

                    &.fullWidth {
                        width: 100%;
                    }

                    input {
                        position: relative;
                        width: 100%;
                        height: 45px;
                        font-family: 'Poppins', sans-serif;
                        padding: 5px 20px;
                        font-size: 15px;
                        font-weight: 500;
                        color: #333;
                        outline: none;
                        border: none;
                        background: transparent;
                    }

                    textarea {
                        position: relative;
                        width: 100%;
                        height: 106px;
                        font-family: 'Poppins', sans-serif;
                        padding: 15px 20px;
                        font-size: 15px;
                        font-weight: 500;
                        color: #333;
                        outline: none;
                        border: none;
                        background: transparent;
                        resize: none;
                    }

                    span {
                        position: absolute;
                        top: 0;
                        left: 0;
                        font-family: "SUSE", sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        color: #555;
                        line-height: 45px;
                        pointer-events: none;
                        transition: all 0.6s ease-in-out;
                    }

                    .line {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        border-radius: 20px;
                        background: rgb(220, 220, 220);

                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #000;
                            transform: scaleX(0);
                            transform-origin: right;
                            transition: transform 0.5s ease-in-out;
                        }
                    }

                    input:focus ~ span,
                    input:valid ~ span,
                    textarea:focus ~ span,
                    textarea:valid ~ span {
                        top: -25px;
                        font-size: 13px;
                        color: #3F00FF;
                        transition: all 0.6s ease-in-out;
                    }

                    input:focus ~ .line::after,
                    input:valid ~ .line::after,
                    textarea:focus ~ .line::after,
                    textarea:valid ~ .line::after {
                        transform: scaleX(1);
                        transform-origin: left;
                        transition: transform 0.5s ease-in-out;
                    }
                }

                .form_btn {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: 25px;

                    button {
                        position: relative;
                        width: 200px;
                        padding: 12px 40px;
                        font-family: 'Poppins',sans-serif;
                        font-size: 15px;
                        font-weight: 500;
                        cursor: pointer;
                        border: none;
                        background: #009900;
                        color: #FFF;
                        border-radius: 35px 35px 35px 35px/20px 20px 20px 20px;
                    }
                }
            }
        }
    }
`;