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