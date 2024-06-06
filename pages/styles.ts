import styled from "styled-components";
import { THEME } from "../src/theme";

export const InTheathers = styled.div`
.header {
    margin: 1rem 0rem 0 2rem;
    color: #ff67bd;
    text-shadow: 
    0 0 2px #FF27A1
 
}
    .swiper-wrapper {
        padding: 1.2rem 0;
    }
    .swiper-button-prev, .swiper-button-next {
    transform: scale(0.75);
    color: #02fff2;

}

    ::-webkit-scrollbar {
        height: 0.55rem;
    }
    ::-webkit-scrollbar-track {
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 100vw;
        width: 0.1rem;
        background: linear-gradient(to right,hsl(270 70% 50%), red);
    }
`