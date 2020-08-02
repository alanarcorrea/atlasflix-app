import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu({ textButton, routerButton }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="atlasflix-app logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to={routerButton}>
        {textButton}
      </Button>
    </nav>

  );
}

Menu.defaultProps = {
  textButton: 'Novo Vídeo',
  routerButton: '/register/video',
};

Menu.propTypes = {
  textButton: PropTypes.string,
  routerButton: PropTypes.string,
};

export default Menu;
