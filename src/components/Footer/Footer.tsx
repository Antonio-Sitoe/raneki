import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
   padding: 2rem 1rem;
   text-align: center;
   color: grey;
`

const Footer = () => {
  return (
    <FooterStyle>
      <p>Todos os direitos reservados</p>
    </FooterStyle>
  )
}

export default Footer