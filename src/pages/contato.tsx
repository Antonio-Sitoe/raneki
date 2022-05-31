import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyle'

export const Main = styled.main`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

img {
  border-radius: 1rem;
}

@media (max-width:300px){
 grid-template-columns: 1fr ; 
}
`
const Info = styled.div`

ul {

  li {
    margin: .6rem 0;
  }
}
`
const contato = () => {
  return (
    <Container>
      <Head>
        <title>Raneki | Contato </title>
        <meta name="description" content="Entre em contacto" />
      </Head>
      <Main>
        <Image src="/contato.jpg" alt="" width="300" height="450px" />
        <Info>
          <h2>Entre em contacto</h2>
          <ul>
            <li>antoniositoehl@gmail.com</li>
            <li>99999-999</li>
            <li>Rua Ali perto, 999</li>
          </ul>
        </Info>
      </Main>
    </Container>
  )
}

export default contato