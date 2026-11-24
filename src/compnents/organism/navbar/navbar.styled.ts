import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const NavbarStyled = styled.nav`
 ${Reset}
 width: 65%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 1.5rem;

    ul{
     display: flex;
     justify-content: center;
     gap: 2rem;
     margin: 0;
     padding: 0;

        li{
         list-style: none;
         align-items: center;

            a{
             display: inline-block;
             text-decoration: none;
             color: #FFFFFF;
             transition: color 0.2s ease, transform 0.2s ease;
                &:hover,
                &.active{
                 color: #F0C674;
                 text-decoration: underline;
                 transform: scale(1.25);
                }
            }
        }

        .github{
            a{
             position: relative;
             white-space: nowrap;

                &::before{
                 content: "";
                 position: absolute;
                 inset: -1rem;
                 border: 2px solid white;
                 pointer-events: none;
                 border-radius: 10rem;
                }
            }
        }
    }

    @media (max-width: 900px){
        width: 70%;
        gap: 1rem;

        ul{
            gap: 1.25rem;
        }
    }

    @media (max-width: 700px){
        width: 100%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;

        ul:first-child{
            width: 100%;
            flex-wrap: wrap;
            gap: 0.5rem 1.25rem;

            li a{
                min-height: 44px;
                display: inline-flex;
                align-items: center;

                &:hover,
                &.active{
                    transform: none;
                }
            }
        }

        ul:last-child{
            width: 100%;
            justify-content: flex-start;
            align-items: center;
            gap: 0.75rem;

            .github a{
                min-height: 44px;
                display: inline-flex;
                align-items: center;

                &::before{
                    inset: -0.25rem -0.65rem;
                }
            }
        }
    }

    @media (max-width: 380px){
        ul:first-child{
            justify-content: space-between;
            gap: 0.25rem;

            li a{
                font-size: 0.82rem;
            }
        }
    }
`