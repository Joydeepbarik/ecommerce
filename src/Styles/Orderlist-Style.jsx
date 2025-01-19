import styled from "@emotion/styled";

export const OrderlistWrapper = styled('div')`
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

            h2 {
                position: relative;
                font-family: 'Lemonada',cursive;
                font-size: 30px;
                font-weight: 700;
                color: #000;

                span {
                    font-family: 'Oleo Script',cursive;
                    font-size: 38px;
                    color: #E5322D;
                    margin-left: 8px;
                }
            }
        }

        .order_section {
            position: relative;
            width: 100%;
            display: flex;
            margin-top: 35px;

            .left_sec {
                position: relative;
                width: 350px;
                display: flex;
                padding: 20px 30px;

                &::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(to bottom, #fff, #b1b1b1, #fff);
                }

                .sec_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .order_type {
                        position: relative;
                        width: 100%;
                        display: flex;
                        padding: 10px 25px;
                        background: #E1E0EA;
                        border-radius: 8px;
                        cursor: pointer;
                        margin-bottom: 30px;

                        a {
                            position: relative;
                            width: 100%;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            font-size: 18px;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 500;
                            color: #000;

                            i {
                                position: relative;
                                font-size: 20px;
                            }

                            &:hover {
                                color: #fff;
                            }
                        }

                        &:hover {
                            background: #3F00FF;
                            box-shadow: 3px 3px 6px rgba(0,0,0,0.2),
                                        -2px -2px 5px rgba(100,100,100,0.2);
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }

            .right_sec {
                position: relative;
                width: calc(100% - 350px);
                display: flex;
                padding: 20px 30px;
            }
        }
    }
`;