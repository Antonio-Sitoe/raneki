import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyle'

const Navbar = styled.header`
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        margin: 0 .6rem ;
      }
    }
`
const LinkStyle = styled.a`
    padding: .6rem;
    background: #d8d7d8;
    border-radius: 0.3rem;
    cursor: pointer;
`

const Header = () => {
  return (
    <Navbar>
      <Container>
        <ul>
          <li>
            <Link href='/'>
              <LinkStyle>Produtos</LinkStyle>
            </Link>
          </li>
          <li>
            <Link href='/contato'>
              <LinkStyle>Contatos</LinkStyle>
            </Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  )
}

export default Header