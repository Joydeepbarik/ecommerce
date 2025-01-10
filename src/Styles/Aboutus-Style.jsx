import styled from "@emotion/styled";


export const AboutWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding-top: 70px;

    .wrapper_inner{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px 75px;

        .about_sec{
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 25px;

            .sec_head{
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

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

            .content {
                position: relative;
                display: flex;

                p{
                    position: relative;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                    color: #555;
                    margin-top: 20px;
                }
            }
            
        }

        .feature_sec {
            position: relative;
            margin-top: 80px;
            width: 100%;
            display: flex;
            flex-direction: column;

            .sec_head{
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 0 25px;

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

            .mainbody {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 40px;

                .container {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    
                    .card {
                        position: relative;
                        width: 33.33%;
                        display: flex;
                        padding: 0 25px;

                        .box {
                            position: relative;
                            width: 100%;
                            background: #fff;
                            box-shadow: 6px 10px 15px rgba(23, 23, 23, 0.2);
                            border-radius: 12px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: all 0.5s ease-in-out;
                        }

                        &:hover .box {
                            transform: translateY(-50px);
                            transition: all 0.5s ease-in-out;
                            box-shadow: 6px 10px 15px rgba(0, 0, 0, 0.4);
                            background: linear-gradient(45deg,#3F00FF,#4f29cd);
                        }

                        .content {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            padding: 35px 25px;
                            align-items: center;
                            justify-content: center;

                            h3 {
                                position: relative;
                                font-family: 'Oleo Script', cursive;
                                font-size: 35px;
                                font-weight: 600;
                                color: #fff;
                                max-height: 0;
                                overflow: hidden;
                                padding-bottom: 25px;
                                transition: all 0.5s ease-in-out;
                            }

                            .img_box {
                                position: relative;
                                width: auto;
                                height: 150px;
                                display: flex;
                                margin-top: 6px;
                                transition: all 0.5s ease-in-out;
                                
                                img {
                                    position: relative;
                                    width: auto;
                                    height: 100%;
                                }
                            }

                            p {
                                position: relative;
                                font-family: 'Poppins', sans-serif;
                                font-size: 16px;
                                color: #000;
                                margin-top: 25px;
                                opacity: 0.7;
                                text-align: center;
                                transition: all 0.5s ease-in-out;
                            }
                        }

                        &:hover .content {
                            h3 {
                                max-height: 100px;
                                overflow: hidden;
                                transition: all 0.5s ease-in-out;
                            }

                            .img_box {
                                height: 110px;
                                transition: all 0.5s ease-in-out;
                            }

                            p {
                                color: #fff;
                                transition: all 0.5s ease-in-out;
                            }
                        }
                    }
                }
            }
        }
    }
`;