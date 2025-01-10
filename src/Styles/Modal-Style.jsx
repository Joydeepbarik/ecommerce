import styled from "@emotion/styled";

export const AuthWrapper = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(7px);
    background: #ffffff6b;
    z-index: 499;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;

    &.active {
        opacity: 1;
        pointer-events: initial;
        transition: all 0.3s;
    }

    .wrapper_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .auth_box {
            position: relative;
            width: 800px;
            background: #FFF;
            border-radius: 6px;
            box-shadow: 8px 10px 25px rgba(0,0,0,0.3),
                        -4px -4px 10px rgba(100,100,100,0.3);
            transform: translateY(-100px);
            transition: all 0.6s ease-in-out;

            &.active {
                transform: translateY(0);
                transition: all 0.6s ease-in-out;
            }

            .close_btn {
                position: absolute;
                top: 20px;
                right: 25px;
                z-index: 10;

                a {
                    position: relative;
                    cursor: pointer;
                    font-size: 16px;
                    color: #333;
                }
            }

            .box_inner {
                position: relative;
                width: 100%;
                height: 348px;
                display: flex;
                overflow: hidden;
                transition: all 0.6s ease-in-out;

                &.active {
                    height: 533px;
                    transition: all 0.6s ease-in-out;
                }

                .form_sec {
                    width: 50%;
                    height: 100%;
                    padding: 40px;
                    transition: all 0.6s ease-in-out;

                    &.login_form {
                        position: absolute;
                        top: 0;
                        left: 0;
                        transform: translateY(0);
                    }

                    &.registration_form {
                        position: absolute;
                        top: 0;
                        right: 0;
                        transform: translateY(-150%);
                    }

                    form {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;

                        .form_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 30px;
                            
                            input {
                                position: relative;
                                width: 100%;
                                height: 45px;
                                outline: none;
                                border: none;
                                font-family: 'Poppins', sans-serif;
                                padding: 5px 20px;
                                font-size: 15px;
                                font-weight: 500;
                                color: #333;
                                background: transparent;
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

                            a {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                height: 100%;
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                font-size: 15px;
                                color: rgb(153, 153, 153);
                            }

                            .line {
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 2px;
                                border-radius: 20px;
                                background: rgb(153, 153, 153);

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
                            input:valid ~ span {
                                top: -25px;
                                font-size: 13px;
                                color: #3F00FF;
                                transition: all 0.6s ease-in-out;
                            }

                            input:focus ~ .line::after,
                            input:valid ~ .line::after {
                                transform: scaleX(1);
                                transform-origin: left;
                                transition: transform 0.5s ease-in-out;
                            }
                        }

                        .remeber_forgot_sec {
                            position: relative;
                            margin-top: 5px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            .remember_sec {
                                position: relative;
                                display: flex;
                                align-items: center;

                                input[type="checkbox"] {
                                    display: none;
                                }

                                label {
                                    position: relative;
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;

                                    span {
                                        position: relative;
                                        width: 16px;
                                        height: 16px;
                                        border: 2px solid rgb(153, 153, 153);
                                        border-radius: 4px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                    }

                                    p {
                                        position: relative;
                                        margin-left: 6px;
                                        font-family: "SUSE", sans-serif;
                                        font-size: 14px;
                                        font-weight: 500;
                                        color: #333;
                                        transition: all 0.4s;
                                    }

                                    &:hover p {
                                        color: #3F00FF;
                                        transition: all 0.4s;
                                    }
                                }
                            }

                            .forgot_sec {
                                position: relative;

                                a {
                                    position: relative;
                                    text-decoration: none;
                                    font-family: "SUSE", sans-serif;
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: #333;
                                    cursor: pointer;
                                    transition: all 0.4s;

                                    &:hover {
                                        color: #3F00FF;
                                        transition: all 0.4s;
                                    }
                                }
                            }
                        }

                        .terms_conditions_sec {
                            position: relative;
                            margin-top: 5px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            .sec_inner {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;

                                input[type="checkbox"] {
                                    display: none;
                                }

                                label {
                                    position: relative;
                                    display: flex;
                                    width: 100%;
                                    cursor: pointer;

                                    span {
                                        position: relative;
                                        width: 16px;
                                        height: 16px;
                                        border: 2px solid rgb(153, 153, 153);
                                        border-radius: 4px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        margin-top: 2px;
                                    }

                                    p {
                                        position: relative;
                                        width: calc(100% - 16px);
                                        padding-left: 8px;
                                        font-family: "SUSE", sans-serif;
                                        font-size: 14px;
                                        font-weight: 500;
                                        color: #333;
                                        
                                        a {
                                            color: #3F00FF; 
                                        }
                                    }
                                }
                            }
                        }

                        .form_btn {
                            position: relative;
                            width: 100%;
                            margin-top: 20px;

                            button {
                                position: relative;
                                width: 100%;
                                height: 45px;
                                background: #3F00FF;
                                color: #FFF;
                                font-family: 'Poppins', sans-serif;
                                font-size: 15px;
                                font-weight: 500;
                                cursor: pointer;
                                border: none;
                                border-radius: 6px;
                            }
                        }

                        .redirect_sec {
                            position: relative;
                            width: 100%;
                            display: flex;
                            margin-top: 10px;
                            justify-content: center;
                            text-align: center;

                            p {
                                position: relative;
                                display: flex;
                                font-family: 'Poppins', sans-serif;
                                color: #555;
                                font-size: 13px;
                                font-weight: 500;

                                a {
                                    font-family: "SUSE", sans-serif;
                                    color: #3F00FF;
                                    font-size: 14px;
                                    font-weight: 500;
                                    cursor: pointer;
                                    margin: 0 5px;
                                }
                            }
                        }
                    } 
                }

                .image_sec {
                    width: 50%;
                    display: flex;
                    height: 100%;
                    padding: 30px;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.6s ease-in-out;

                    &.login_image {
                        position: absolute;
                        top: 0;
                        right: 0;
                        transform: translateY(0);
                    }

                    &.registration_image {
                        position: absolute;
                        top: 0;
                        left: 0;
                        transform: translateY(150%);
                    }

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                &.active .form_sec {
                    transition: all 0.6s ease-in-out;

                    &.login_form {
                        transform: translateY(-150%);
                    }

                    &.registration_form {
                        transform: translateY(0);
                    }
                }

                &.active .image_sec {
                    transition: all 0.6s ease-in-out;

                    &.login_image {
                        transform: translateY(-150%);
                    }

                    &.registration_image {
                        transform: translateY(0);
                    }
                }
            }
        }
    }
`;

export const CartWrapper = styled('div')`
    position: fixed;
    top: 70px;
    right: -150%;
    width: 420px;
    height: calc(100vh - 70px);
    z-index: 450;
    background: #FFF;
    transition: all 0.6s ease-in-out;

    &.active {
        right: 0;
        transition: all 0.6s ease-in-out;
    }

    .cart_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* padding: 30px 25px; */

        .cart_top_section {
            position: relative;
            width: 100%;
            height: 55px;
            display: flex;
            padding: 0px 25px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;

            h5 {
                position: relative;
                font-size: 18px;
                font-weight: 600;
                color: #000;
                font-family: 'Oleo Script', cursive;
            }

            a {
                position: relative;
                font-size: 18px;
                color: #555;
                cursor: pointer;
            }
        }

        .cart_item_section {
            position: relative;
            width: 100%;
            height: calc(100% - 120px);
            display: flex;
            padding: 20px 25px;

            .sec_inner {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                scrollbar-width: none;

                .item_box {
                    position: relative;
                    width: 100%;
                    display: flex;
                    margin-top: 12px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #ccc;

                    &:first-child {
                        margin-top: 0;
                    }

                    &:last-child {
                        border-bottom: none;
                    }

                    .box_inner {
                        position: relative;
                        display: flex;
                        width: 100%;
                        align-items: center;

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
                            width: calc(100% - 110px);
                            display: flex;
                            flex-direction: column;
                            padding: 0 15px;

                            h5 {
                                position: relative;
                                display: flex;
                                font-family: "SUSE", sans-serif;
                                font-size: 18px;
                                font-weight: 500;
                                color: #000;
                            }

                            p {
                                position: relative;
                                display: flex;
                                font-family: 'Poppins', sans-serif;
                                font-size: 14px;
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

                            .item_count {
                                position: relative;
                                width: 100%;
                                display: flex;
                                margin-top: 5px;
                                justify-content: flex-end;

                                .count_box {
                                    position: relative;
                                    width: max-content;
                                    height: 25px;
                                    display: flex;
                                    align-items: center;
                                    border: 1px solid rgb(189, 189, 189);
                                    border-radius: 5px;

                                    a {
                                        position: relative;
                                        width: 25px;
                                        height: 100%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 11px;
                                        color: #555;
                                        cursor: pointer;
                                    }

                                    p {
                                        position: relative;
                                        margin-top: 0;
                                        height: 100%;
                                        padding: 0px 10px;
                                        font-size: 12px;
                                        font-weight: 500;
                                        color: #222;
                                        display: flex;
                                        align-items: center;
                                        border-left: 1px solid rgb(189, 189, 189);
                                        border-right: 1px solid rgb(189, 189, 189);
                                    }
                                }
                            }
                        }

                        .action_box {
                            position: relative;
                            width: 30px;
                            height: 100%;
                            display: flex;
                            justify-content: center;

                            a {
                                position: relative;
                                font-size: 15px;
                                color: #f00;
                                cursor: pointer;    
                            }
                        }
                    }
                }

                .no_item_message {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    p {
                        position: relative;
                        font-family: "SUSE", sans-serif;
                        font-size: 20px;
                        font-weight: 500;
                        color: #aaaaaa;
                    }
                }
            }
        }

        .bottom_section {
            position: relative;
            width: 100%;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 25px;
            border-top: 1px solid #ccc;

            .total_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                a {
                    position: relative;
                    font-family: 'Poppins', sans-serif;
                    font-size: 13px;
                    font-weight: 500;
                    color: #000;
                }

                p {
                    position: relative;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                    font-weight: 500;
                    color: #000;

                    span {
                        position: relative;
                        font-family: 'Poppins', sans-serif;
                        font-size: 18px;
                        font-weight: 500;
                        color: #000;
                    }
                }
            }

            .btn {
                position: relative;
                width: 200px;
                height: 40px;
                

                button {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 15px;
                    border-radius: 8px;
                    border: none;
                    background: #3F00FF;
                    color: #FFF;
                    font-size: 15px;
                    font-weight: 500;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }
    }

   


`;

export const Auth_Confirmation_Modal = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff6b;
    display: flex;
    z-index: 450;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;


    &.active {
        opacity: 1;
        pointer-events: initial;
        transition: all 0.3s;
    }

    .confimation_sec {
        position: relative;
        width: 500px;
        display: flex;
        padding: 35px 50px;
        background: #FFF;
        border-radius: 6px;
        box-shadow: 8px 10px 25px rgba(0,0,0,0.3),
                    -4px -4px 10px rgba(100,100,100,0.3);
        transform: translateY(-100px);
        transition: all 0.8s ease-in-out;

        &.active {
            transform: translateY(0);
            transition: all 0.8s ease-in-out;
        }

        .sec_inner {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            h4 {
                position: relative;
                font-family: 'Poppins', sans-serif;
                font-size: 17px;
                font-weight: 500;
                color: #555;
            }

            .btn_sec {
                position: relative;
                width: 100%;
                margin-top: 35px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                button {
                    position: relative;
                    width: 47.5%;
                    height: 45px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 15px;
                    font-weight: 500;
                    font-family: 'Poppins', sans-serif;
                    color: #fff;

                    &:first-child {
                        background: #000;
                    }

                    &:last-child {
                        background: #009900;
                    }
                }
            }
        }

    }
`;