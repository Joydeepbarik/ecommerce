import { styled } from "@mui/material";


export const LayoutWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .float_btn {
        position: fixed;
        right: 45px;
        bottom: 30px;
        z-index: 99;

        a {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #3F00FF;
            display: flex;
            box-shadow: 5px 6px 8px rgba(0,0,0,0.3);

            &.pulse {
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    border-radius: 50%;
                    background: rgba(64, 0, 255);
                    opacity: 0.7;
                    animation: pulse 2s ease-in-out infinite;
                }

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    border-radius: 50%;
                    background: rgba(64, 0, 255);
                    opacity: 0.7;
                    animation: pulse 2s 1s ease-in-out infinite;
                }
            }

            @keyframes pulse {
                100% {
                    transform: scale(1.6);
                    opacity: 0;
                }
            }

            span {
                position: relative;
                width: 100%;
                height: 100%;
                z-index: 5;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #FFF;
                font-size: 18px;

                p {
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    width: 23px;
                    height: 23px;
                    background: #009900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-family: 'Poppins', sans-serif;
                    font-size: 11px;
                    font-weight: 500;
                    color: #FFF;
                }
            }
        }
    }
`;

export const OrderSuccessWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    .success_inner {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .page_icon {
            position: relative;
            display: flex;

            img {
                position: relative;
                width: 220px;
                height: auto;
            }
        }

        .content {
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;

            h3 {
                position: relative;
                font-family: 'Oleo Script', cursive;
                font-size: 40px;
                color: rgb(2, 192, 255);
            }

            h5 {
                position: relative;
                font-family: 'Poppins', sans-serif;
                font-size: 22px;
                font-weight: 600;
                color: #4bb543;
                margin-top: 3px;
            }

            p {
                position: relative;
                font-family: 'Poppins', sans-serif;
                font-size: 17px;
                font-weight: 500;
                margin-top: 20px;
                color: rgb(170, 170, 170);

                span {
                    color: #3F00FF;
                }
            }
        }
    }
`;