import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const FooterStyled = styled.footer`
 ${Reset}
 display: grid;
 grid-template-columns: 1fr auto 1fr;
 align-items: center;
 padding: 1.1rem 4rem;
 background: #080808;
 border-top: 1px solid #D6A84F;
 font-family: "Inter", sans-serif;
 gap: 1rem;
 box-sizing: border-box;
 width: 100%;

 p {
  margin: 0;
 }

 .copy {
  justify-self: start;
  color: #FFFFFF;
  font-size: 0.85rem;
 }

 .location {
  justify-self: center;
  color: #FFFFFF;
  font-size: 0.85rem;
 }

 .socials {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
   display: inline-flex;
   align-items: center;
   gap: 0.35rem;
   color: #D6A84F;
   text-decoration: none;
   transition: color 0.2s ease, transform 0.2s ease;
   font-size: 0.85rem;

   &:hover {
    color: #FFFFFF;
    transform: translateY(-1px);
   }

   span {
    font-size: 0.9rem;
   }
  }
 }

 @media (max-width: 900px){
  padding-inline: 2.5rem;
  grid-template-columns: 1fr auto;

  .location{
   justify-self: end;
  }

  .socials{
   grid-column: 1 / -1;
   justify-self: center;
  }
 }

 @media (max-width: 700px){
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 1.25rem;
  gap: 0.75rem;
  text-align: center;

  .copy,
  .location,
  .socials{
   justify-self: center;
  }

  .copy,
  .location{
   font-size: 0.8rem;
   line-height: 1.45;
  }

  .socials{
   grid-column: auto;
   justify-content: center;
   flex-wrap: wrap;
   gap: 0.75rem 1.25rem;

   a{
    min-height: 44px;
    font-size: 0.82rem;
   }
  }
 }

 @media (max-width: 380px){
  padding-inline: 1rem;
 }
`;
