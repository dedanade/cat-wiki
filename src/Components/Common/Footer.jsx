import React from 'react';
import { ReactComponent as CAT_WIKI_LOGO } from '../../images/HeaderCatwikiLogo.svg';

function Footer(props) {
  return (
    <footer className='footer'>
      <CAT_WIKI_LOGO />
      <div className='footer__text'>
        <p className='footer__text__copyright'>©</p>
        <p className='footer__text__credit'>
          created by <a href='https://github.com/dedanade'>Dedan</a> -
          devChallenge.io 2021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
