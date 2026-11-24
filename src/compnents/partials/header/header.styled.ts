import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const HeaderStyled = styled.header`
 ${Reset}
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 4rem;
 font-family: "Poppins", sans-serif;
 box-sizing: border-box;
 width: 100%;

 .theLogo{
    display: flex;
    align-items: center;
    flex-shrink: 0;

    svg{
        display: block;
        width: 3.25rem;
        height: 3.25rem;
        }
        
        p{
            color: #FFFFFF;
            text-align: center;
            white-space: nowrap;
        }
    }

    @media (max-width: 900px){
        padding: 0.5rem 2.5rem;

        .theLogo p{
            font-size: 0.85rem;
        }
    }

    @media (max-width: 700px){
        align-items: flex-start;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem 1.25rem;

        .theLogo{
            width: 100%;

            svg{
                width: 2.75rem;
                height: 2.75rem;
            }

            p{
                font-size: 0.82rem;
            }
        }
    }

    @media (max-width: 380px){
        padding-inline: 1rem;
    }
`