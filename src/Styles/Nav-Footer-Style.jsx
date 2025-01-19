import { styled } from "@mui/material";


export const NavWrapper = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    padding: 12px 70px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    z-index: 199;


    .nav_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        img {
            position: relative;
            width: auto;
            height: 100%;
        }

        .nav_items {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;

            li {
                position: relative;
                list-style: none;
                margin: 0 10px;

                a.nav_item {
                    position: relative;
                    text-decoration: none;
                    padding: 0px 10px;
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    color: #444;
                    cursor: pointer;
                    transition: all 0.5s;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        width: 100%;
                        border-radius: 20px;
                        background: linear-gradient(to right, #f0ebffbe, #3F00FF);
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.5s;
                    }

                    &:hover::before {
                        transform: scaleX(1);
                        transform-origin: left;
                        transition: transform 0.5s;
                    }

                    &:hover {
                        color: #3F00FF;
                        transition: all 0.5s;
                    }

                    i {
                        position: relative;
                        margin-left: 6px;
                        transition: all 0.5s;
                    }

                    &:hover i {
                        transform: rotate(-180deg);
                        transition: all 0.5s;
                    }

                    &.active {
                        color: #3F00FF;
                    }

                    &.active::before {
                        transform: scaleX(1);
                    }

                }

                .dropdown {
                    position: absolute;
                    top: 40px;
                    left: 0;
                    width: max-content;
                    min-width: 200px;
                    max-height: 0;
                    overflow: hidden;
                    background: #FFF;
                    border-radius: 6px;
                    box-shadow: 6px 7px 15px rgba(0,0,0,0.2),
                                -4px -4px 8px rgba(174, 174, 174, 0.2);
                    transition: all 0.5s;
            
                    .dropdown_inner {
                        position: relative;
                        width: 100%;
                        padding: 5px 15px;

                        ul {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            max-height: 250px;
                            overflow-y: auto;
                            scrollbar-width: none;

                            a {
                                position: relative;
                                width: 100%;
                                text-decoration: none;
                                font-family: "SUSE", sans-serif;
                                font-size: 15px;
                                display: flex;
                                align-items: center;
                                font-weight: 500;
                                color: #666;
                                padding: 12px 5px;
                                border-bottom: 1px solid rgb(217, 217, 217);
                                transition: all 0.5s;
                                text-decoration: none;

                                &:last-child {
                                    border-bottom: none;
                                }

                                i {
                                    position: relative;
                                    margin-left: auto;
                                }

                                &:hover {
                                    color: #3F00FF;
                                    transition: all 0.5s;
                                }
                            }

                            p {
                                position: relative;
                                width: 100%;
                                font-family: "SUSE", sans-serif;
                                font-size: 16px;
                                font-weight: 500;
                                color: #a5a5a5;
                                padding: 12px 5px;
                                pointer-events: none;
                            }
                        }
                    }
                }

                &:hover .dropdown {
                    max-height: 300px;
                    transition: all 0.5s;
                }

                /* @media screen {
                 a{
                    font-size: 12px;

                    i {
                        color: #545;
                    }
                 }  
                 p{
                    
                 } 
                } */
            }

            @media (max-width: 1099px) {
                display: none;
            }
            
        }
        

        .res_btn {
            position: relative;
            display: none;
            align-items: center;
            margin-left: auto;

            a {
                position: relative;
                font-size: 18px;
                color: #3F00FF;

            }
        }

        @media (max-width: 1099px) {
            .res_btn {
                display: flex;
            }

        }
        .nav_auth {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;

            button {
                position: relative;
                padding: 12px 40px;
                font-family: 'Poppins', sans-serif;
                font-size: 15px;
                font-weight: 500;
                cursor: pointer;
                border: none;
                background: #3F00FF;
                color: #FFF;
                border-radius: 35px 35px 35px 35px/20px 20px 20px 20px;
            }
        }

        .nav_profile {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .profile_btn {
                position: relative;
                display: flex;
                padding: 15px;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                .img {
                    position: relative;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 15px;
                    

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        border-radius: 50%;
                        background: #FFF;
                    }
                }

                .profile {
                    position: relative;
                    display: flex;

                    h5 {
                        position: relative;
                        width: 100%;
                        text-decoration: none;
                        font-family: "SUSE", sans-serif;
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        font-weight: 600;
                        color: #000;
                    }

                    h5:hover {
                        color: #3F00FF;
                    }
                }
            }

            .profile_dropdown {
                position: absolute;
                top: 50px;
                right: 0;
                max-height: 0;
                overflow: hidden;
                background: #FFF;
                border-radius: 6px;
                box-shadow: 5px 7px 10px rgba(0,0,0,0.2),
                                -2px -2px 5px rgba(100,100,100,0.2);
                transition: all 0.5s ease-in-out;

                &.active {
                    max-height: 250px;
                    transition: all 0.5s ease-in-out; 
                }

                .dropdown_inner {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    padding: 5px 15px;
                    
                    a {
                        position: relative;
                        font-size: 13px;
                        padding: 6px 0px;
                        color: #333;
                        cursor: pointer;
                        font-family: 'Poppins', sans-serif;
                        font-weight: 500;
                        border-bottom: 1px solid #e1e1e1;
                        text-decoration: none;

                        &:last-child {
                            border-bottom: none;
                        }

                        i {
                            position: relative;
                            width: 15px;
                            margin-right: 10px;
                        }
                    }

                    a:hover {
                        color: #3F00FF;
                    }
                }
            }
        }
    }

    @media(max-width: 1250px) {
        padding: 12px 50px;
    }
`;

export const FooterWrapper = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;

    .wave {
        position: relative;
        width: 100%;
        display: flex;

        img {
            position: relative;
            width: 100%;
        }
    }

    .footer_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #FFF;

        .footer_top {
            position: relative;
            width: 100%;
            padding: 50px 100px;
            padding-top: 20px;

            .inner_content {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                .box {
                    position: relative;

                    &:nth-child(1) {
                        width: 30%;
                        padding-right: 35px;
                    }

                    &:nth-child(2) {
                        width: 22%;
                        padding: 0 25px;
                    }

                    &:nth-child(3) {
                        width: 22%;
                        padding: 0 25px;
                    }

                    &:nth-child(4) {
                        width: 26%;
                        padding-left: 25px;
                    }

                    .box_inner {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;

                        .footer_logo {
                            position: relative;
                            display: block;

                            img {
                                position: relative;
                                height: 60px;
                                width: auto;
                            }
                        }

                        .brief_about {
                            position: relative;
                            width: 100%;
                            margin-top: 15px;

                            p {
                               position: relative;
                               font-family: 'Poppins', sans-serif;
                               font-size: 15px;
                               color: #333;
                            }
                        }

                        .social_media {
                            position: relative;
                            margin-top: 30px;
                            display: flex;
                            align-items: center;

                            a {
                                position: relative;
                                width: 40px;
                                height: 40px;
                                text-decoration: none;
                                background: #FFF;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 16px;
                                margin-right: 15px;
                                box-shadow: 4px 5px 8px rgba(0,0,0,0.2),
                                            -2px -2px 4px rgba(118, 118, 118, 0.2);

                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    transform: scaleY(0.085);
                                    transform-origin: bottom;
                                    background: #3F00FF;
                                    transition: transform 0.6s ease-in-out;
                                }

                                i {
                                    z-index: 5;
                                    color: #3F00FF;
                                    transition: all 0.5s;
                                }

                                &:hover::before {
                                    transform: scaleY(1);
                                    transform-origin: bottom;
                                    transition: transform 0.6s ease-in-out;
                                }

                                &:hover i {
                                    color: #FFF;
                                    transform: rotate(360deg);
                                    transition: all 0.5s;
                                }
                            }

                            @media (max-width: 1150px) {
                                display: none;
                            }
                        }

                        .subscribe_sec {
                            position: relative;
                            width: 100%;
                            margin-top: 16px;

                            .input_sec {
                                position: relative;
                                margin-top: 30px;
                                width: 100%;
                                height: 50px;
                                background: rgb(221, 221, 221);
                                border-radius: 5px;
                                padding: 6px;

                                .input_box {
                                    position: relative;
                                    width: 100%;
                                    height: 100%;

                                    input {
                                        position: relative;
                                        width: calc(100% - 70px);
                                        height: 100%;
                                        border: none;
                                        outline: none;
                                        font-family: 'Poppins', sans-serif;
                                        padding: 5px 15px;
                                        background: transparent;
                                        font-size: 14px;
                                        color: #111;
                                    }

                                    button {
                                        position: relative;
                                        width: 70px;
                                        height: 100%;
                                        background: #3F00FF;
                                        font-family: "SUSE", sans-serif;
                                        color: #FFF;
                                        border: none;
                                        border-radius: 4px;
                                        font-size: 15px;
                                        font-weight: 600;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }

                        h5 {
                            position: relative;
                            font-family: "SUSE", sans-serif;
                            font-size: 17px;
                            font-weight: 600;
                            color: #111;
                            width: max-content;

                            &::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                bottom: -8px;
                                width: 60%;
                                height: 3px;
                                border-radius: 20px;
                                background: #3F00FF;
                            }
                        }

                        ul {
                            position: relative;
                            margin-top: 30px;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            a {
                                position: relative;
                                width: 100%;
                                margin-bottom: 10px;
                                display: flex;
                                align-items: center;
                                text-decoration: none;
                                font-family: 'Poppins', sans-serif;
                                font-size: 15px;
                                font-weight: 500;
                                color: #444;
                                transition: all 0.5s;
                                cursor: pointer;

                                i {
                                    position: relative;
                                    margin-right: 8px;
                                    transition: all 0.5s;
                                }

                                &:hover {
                                    color: #3F00FF;
                                    transition: all 0.5s;
                                }

                                &:hover i {
                                    color: #3F00FF;
                                    margin-right: 15px;
                                    transition: all 0.5s;
                                }
                            }

                            li {
                                position: relative;
                                width: 100%;
                                list-style: none;
                                display: flex;
                                align-items: center;
                                margin-bottom: 15px;

                                i {
                                    position: relative;
                                    width: 40px;
                                    height: 40px;
                                    border: 2px solid #3F00FF;
                                    color: #3F00FF;
                                    font-size: 15px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    margin-right: 15px;
                                }

                                p {
                                    position: relative;
                                    font-size: 16px;
                                    font-family: 'Poppins', sans-serif;
                                    font-weight: 500;
                                    color: #333;
                                }
                            }
                        }

                        @media (max-width: 860px) {
                            &:nth-child(4) {
                                display: flex;
                            }
                        }
                    }

                    @media (max-width: 1150px) {
                        &:nth-child(1) {
                            width: 100%;
                            padding: 0 25px;
                            padding-right: 25px;
                            margin-bottom: 35px;
                        }

                        &:nth-child(2) {
                            width: 33.33%;
                        }

                        &:nth-child(3) {
                            width: 33.33%;
                        }

                        &:nth-child(4) {
                            width: 33.33%;
                        }  
                    }
                    @media (max-width: 860px) {
                        &:nth-child(2) {
                            width: 50%;
                        }

                        &:nth-child(3) {
                            width: 50%;
                        }

                        &:nth-child(4) {
                            width: 100%;
                            margin-top: 35px;
                        }  
                    }
                }

                .res_socialmedia_sec {
                    position: relative;
                    width: 100%;
                    display: none;
                    align-items: center;
                    justify-content: center;

                    .social_media {
                        position: relative;
                        margin-top: 30px;
                        display: flex;
                        align-items: center;

                        a {
                            position: relative;
                            width: 40px;
                            height: 40px;
                            text-decoration: none;
                            background: #FFF;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 16px;
                            margin-right: 15px;
                            box-shadow: 4px 5px 8px rgba(0,0,0,0.2),
                                        -2px -2px 4px rgba(118, 118, 118, 0.2);

                            &::before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                transform: scaleY(0.085);
                                transform-origin: bottom;
                                background: #3F00FF;
                                transition: transform 0.6s ease-in-out;
                            }

                            i {
                                z-index: 5;
                                color: #3F00FF;
                                transition: all 0.5s;
                            }

                            &:hover::before {
                                transform: scaleY(1);
                                transform-origin: bottom;
                                transition: transform 0.6s ease-in-out;
                            }

                            &:hover i {
                                color: #FFF;
                                transform: rotate(360deg);
                                transition: all 0.5s;
                            }
                        }
                    }

                    @media (max-width: 1150px) {
                        display: flex;
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: linear-gradient(to right, #FFF, #3F00FF, #FFF);
            }

            @media (max-width: 1099px) {
                padding: 50px 50px;
            }

            @media (max-width: 860px) {
                padding: 30px 25px;
            }

        }

        .footer_bottom {
            position: relative;
            width: 100%;
            padding: 25px 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            p {
                position: relative;
                font-family: 'Poppins', sans-serif;
                font-size: 15px;
                color: #4d4d4d;
                font-weight: 500;

                span {
                    position: relative;
                    color: #3F00FF;
                    font-size: 18px;
                    font-weight: 600;
                    font-family: "SUSE", sans-serif;
                }
            }
        }
    }
`;