import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { IData } from '../../pages'

interface CardProps {
  produto: IData
}


export const CardStyle = styled.a`
cursor: pointer;

img {
  display: block;
 width: 100%;
 border-radius: 0.3rem;
}
`


export const Card = ({ produto }: CardProps) => {
  return (
    <Link href={`/produto/${produto.id}`}>
      <CardStyle>
        <Image src={produto.fotos[0].src} width={300} height={450} alt={produto.fotos[0].titulo} />
        <h3>{produto.nome}</h3>
      </CardStyle>
    </Link>
  )
}
//ranekapi.origamid.dev
