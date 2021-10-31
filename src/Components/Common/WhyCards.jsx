import React from 'react';
import { ReactComponent as ARROW_RIGHT } from '../../images/arrow_right.svg';
import IMAGE_ONE from '../../images/image 2.png';
import IMAGE_TWO from '../../images/image 1.png';
import IMAGE_THREE from '../../images/image 3.png';
function WhyCards(props) {
  return (
    <div className='why-card'>
      <div className='why-card__text'>
        <p className='why-card__text-header'>Why should you have a cat?</p>
        <p className='why-card__text-sub-header'>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <div className='more__options'>
          <a href='/' className='more__options__text'>
            Load more
          </a>
          <ARROW_RIGHT />
        </div>
      </div>

      <div className='why-card__images'>
        <div className='why-card__images__first-set'>
          <div>
            <img src={IMAGE_ONE} alt='' />
          </div>
          <div>
            <img src={IMAGE_TWO} alt='' />
          </div>
        </div>
        <div className='why-card__images__second-set'>
          <img src={IMAGE_THREE} alt='' />
        </div>
      </div>
    </div>
  );
}

export default WhyCards;
