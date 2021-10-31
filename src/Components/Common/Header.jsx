import React from 'react';
import { ReactComponent as CAT_WIKI_LOGO } from '../../images/CatwikiLogo.svg';

function Header(props) {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <CAT_WIKI_LOGO />
      </a>
    </header>
  );
}

export default Header;
