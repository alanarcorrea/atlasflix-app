import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/LogoFooter.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={LogoFooter} alt="Logo Alura" />
      </a>

    </FooterBase>
  );
}

export default Footer;
