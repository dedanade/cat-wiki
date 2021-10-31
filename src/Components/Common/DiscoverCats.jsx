import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ARROW_RIGHT } from '../../images/arrow_right.svg';

function DiscoverCats({ topBreeds }) {
  return (
    <div className='discover-card'>
      <p className='discover-card__sm-header'>Most Searched Breeds</p>
      <div className='discover-card__header'>
        <p className='discover__lg-header'>66+ Breeds For you to discover</p>
        <div className='more__options'>
          <Link to='/top-breeds' className='more__options__text'>
            See More
          </Link>
          <ARROW_RIGHT />
        </div>
      </div>
      <div className='discover-cats'>
        {topBreeds.map((breed, i) => {
          return (
            <div
              key={i}
              className={
                i === 0
                  ? 'discover-cats__img-name first'
                  : 'discover-cats__img-name'
              }
            >
              <div className='discover-cats__images'>
                {i === 0 && <div className='first-image__background'></div>}
                <img src={breed.image.url} alt={`${breed.name} Cat`} />
              </div>
              <Link to={`breed/${breed.id}`} className='discover-cats__name'>
                {breed.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DiscoverCats;
