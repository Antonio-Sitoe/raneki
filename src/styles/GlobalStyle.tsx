import styled, { keyframes } from "styled-components";

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Container = styled.div`
max-width: 700px;
margin:  0rem  auto;
padding: 1rem;

img {
  display: block;
  width: 100%;
}


opacity: 0;
transform: translateX(-30px);
animation: ${animeLeft} .3s forwards;
`


