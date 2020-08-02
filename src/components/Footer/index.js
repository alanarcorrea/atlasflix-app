import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/LogoFooter.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://atlastechnol.com/">
        <img src={LogoFooter} alt="Logo Atlas" />
      </a>

    </FooterBase>
  );
}

export default Footer;
