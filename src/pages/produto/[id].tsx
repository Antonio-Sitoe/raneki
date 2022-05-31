import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { IData } from '..'
import { Container } from '../../styles/GlobalStyle'
import { Main } from '../contato'


const Images = styled.div`
  display: grid;
  gap: 2rem;
`
const Wrapper = styled.div`
 span {
   padding: 0.6rem;
   background: #91f565;
   border-radius: 0.3rem;

   font-weight: bold;
   color: green;
 }
`


interface IProduto {
  data: IData
}

const Produto = ({ data }: IProduto) => {
  return (
    <Container>
      <Head>
        <title>Raneki | Produtos - {data?.nome}</title>
        <meta name="description" content="A pagina de login" />
      </Head>

      <Main>
        <Images>
          {data.fotos.map(({ src, titulo }) => {
            return <Image width={300} height={450} src={src} alt={titulo} />
          })}
        </Images>

        <Wrapper>
          <h1>{data?.nome}</h1>
          <span>{data.preco} MT</span>
          <p>{data.descricao}</p>
        </Wrapper>



      </Main>
    </Container>
  )
}

export default Produto


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'notebook-3' } },
      { params: { id: 'smartphone-2' } },
      { params: { id: 'camera' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${context.params?.id}`);
  const json = await response.json()
  return {
    props: { data: json },
    revalidate: 60 * 60 * 24
  }
}