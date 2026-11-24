import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const AboutStyled = styled.section`
 ${Reset}
 padding: 1rem 4rem;
 font-family: "Inter", sans-serif;
 box-sizing: border-box;
 width: 100%;
 overflow-wrap: break-word;

    .title{
        margin-bottom: 1.5rem;

        .first{
         margin: 0;
         color: #D6A84F;
        }

        h1{
         color: #FFFFFF;
         font-size: clamp(2rem, 4vw, 3.25rem);
         margin: 0.75rem 0;
        }

        p{
         color: #B3B3B3;
        }
    }

    > hr{
        margin-bottom: 2rem;
    }

    .content{
     display: grid;
     grid-template-columns: minmax(11rem, 0.8fr) minmax(0, 2fr);
     gap: clamp(2rem, 6vw, 6rem);

        .info{
            h2 {
             color: #FFFFFF;
             font-size: 2.5rem;
             margin-top: 0;
            }

            p{
             color: #FFFFFF;
            }

            .based{
             color: #D6A84F;
             font-size: 0.85rem;
             margin: 2.5rem 0 0.25rem;
            }

            .currently{
             color: #D6A84F;
             font-size: 0.85rem;
             margin: 1.5rem 0 0.25rem;
            }
        }

        .textInfo{
            min-width: 0;

            .text{
             color: #FFFFFF;
             font-size: 1.5rem;
             line-height: 1.35;
             margin-top: 0;
            }

            p{
             color: #B3B3B3;
             line-height: 1.7;
            }

            a{
             margin: 2.5rem 0 1.5rem;
             display: inline-block;
             padding: 0.75rem 1.25rem;
             border: 2px solid #D6A84F;
             border-radius: 10rem;
             text-decoration: none;
             color: #D6A84F;
             transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;

                &:hover{
                 transform: scale(1.08);
                 background-color: #D6A84F;
                 color: #FFFFFF;
                }
            }
        }
    }

    .three{
        margin-top: 2.5rem;

        h2{
         color: #FFFFFF;
         font-size: clamp(1.5rem, 3vw, 2.25rem);
         margin-bottom: 1.5rem;
        }

        .cards{
         display: flex;
         gap: 2rem;

            > div{
             flex: 1;
             min-width: 0;
                hr{
                 width: 100%;
                 margin: 0 0 1rem;
                 border: 0;
                 border-top: 1px solid #D6A84F;
                }

                .number{
                 color: #D6A84F;
                }

                h3{
                 color: #FFFFFF;
                }

                p{
                 color: #B3B3B3;
                }
            }
        }
    }

    @media (max-width: 900px){
        padding: 1.5rem 2.5rem;

        .content{
            grid-template-columns: minmax(10rem, 0.7fr) minmax(0, 1.5fr);
            gap: 2.5rem;
        }
    }

    @media (max-width: 700px){
     padding: 1.25rem 1.25rem 2.5rem;

        .title{
            .first{
                font-size: 0.75rem;
            }

            h1{
                font-size: clamp(1.75rem, 9vw, 2.25rem);
                line-height: 1.12;
            }

            > p:last-child{
                line-height: 1.5;
            }
        }

        > hr{
            margin-bottom: 1.5rem;
        }

        .content{
            grid-template-columns: 1fr;
            gap: 1.5rem;

            .info{
                h2{
                    font-size: 1.75rem;
                    margin-bottom: 1.25rem;
                }

                .based{
                    margin-top: 0;
                }

                p{
                    margin-top: 0.25rem;
                }
            }

            .textInfo{
                .text{
                    font-size: 1.2rem;
                }

                p{
                    line-height: 1.65;
                }

                br{
                    display: none;
                }

                a{
                    margin: 1.25rem 0 0;
                    min-height: 44px;
                    box-sizing: border-box;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        .three{
            margin-top: 3rem;

            h2{
                line-height: 1.25;
            }

            .cards{
             flex-direction: column;
             gap: 1.5rem;
            }
        }
    }

    @media (max-width: 380px){
        padding-inline: 1rem;
    }
`