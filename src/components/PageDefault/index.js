import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

function PageDefault({
  children, paddingAll, textButton, routerButton,
}) {
  return (
    <>
      <Menu textButton={textButton} routerButton={routerButton} />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: 1,
  children: [],
  textButton: 'Novo Vídeo',
  routerButton: '/register/video',
};

PageDefault.propTypes = {
  children: PropTypes.arrayOf(PropTypes.array),
  paddingAll: PropTypes.number,
  textButton: PropTypes.string,
  routerButton: PropTypes.string,
};

export default PageDefault;
