import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card/Card'
import { Container } from '../styles/GlobalStyle'


const Main = styled.main`
width: 100%;
display: grid;
gap: 1rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`


interface IFotos {
  src: string
  titulo: string
}

export interface IData {
  id: string,
  fotos: IFotos[]
  nome: string,
  preco: string,
  descricao: string,
}

export interface IProps {
  data: IData[]
}

function Home({ data }: IProps) {

  if (data)
    return (
      <Container>
        <Head>
          <title>Pagina inicial </title>
          <meta name="description" content="A pagina de login" />
        </Head>

        <Main>
          {data.map((produto: IData) => {
            return <Card key={produto.id} produto={produto} />
          })}

        </Main>
      </Container>
    )

  return null
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
  const json = await response.json()

  return {
    props: { data: json },
    revalidate: 60
  }
}