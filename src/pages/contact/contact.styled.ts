import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const ContactStyled = styled.section`
 ${Reset}
 min-height: 60vh;
 padding: 3rem 4rem;
 font-family: "Inter", sans-serif;

 .contact-content {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 4rem;
  max-width: 64rem;
  margin: 0 auto;
 }

 .contact-intro {
  .eyebrow {
   margin: 0 0 1rem;
   color: #d6a84f;
   font-size: 0.75rem;
  }

  h1 {
   margin: 0 0 1rem;
   color: #ffffff;
   font-size: clamp(2rem, 4vw, 3rem);
  }

  p:last-child {
   color: #b3b3b3;
   line-height: 1.6;
  }
 }

 .contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  label {
   margin-top: 0.5rem;
   color: #ffffff;
   font-size: 0.9rem;
  }

  input,
  textarea {
   box-sizing: border-box;
   width: 100%;
   padding: 0.8rem 0.9rem;
   border: 1px solid #39352c;
   border-radius: 0.5rem;
   background: #14130f;
   color: #ffffff;
   font: inherit;
  }

  textarea {
   resize: vertical;
  }

  input:focus,
  textarea:focus {
   outline: 2px solid #d6a84f;
   outline-offset: 2px;
  }

  button {
   align-self: flex-start;
   margin-top: 0.75rem;
   padding: 0.75rem 1.25rem;
   border: 2px solid #d6a84f;
   border-radius: 10rem;
   background: transparent;
   color: #d6a84f;
   font: inherit;
   cursor: pointer;
  }

  button:hover:not(:disabled) {
   background: #d6a84f;
   color: #ffffff;
  }

  button:disabled {
   cursor: wait;
   opacity: 0.65;
  }

  .form-status {
   min-height: 1.5em;
   margin: 0.25rem 0 0;
   color: #d6a84f;
   font-size: 0.9rem;
  }
 }

 @media (max-width: 700px) {
  padding: 2rem 1.5rem;

  .contact-content {
   grid-template-columns: 1fr;
   gap: 2rem;
  }
 }
`