import React, { useEffect, useState } from 'react';
import { GetTopBreeds } from '../Services/ApiRequest';
import Footer from './Common/Footer';
import Header from './Common/Header';
import LoadingCat from './Common/LoadingCat';

function TopBreeds(props) {
  const [topBreeds, setTopBreeds] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const topBreeds = await GetTopBreeds();
        console.log(topBreeds);
        setTopBreeds(topBreeds);
      } catch (error) {
        alert('Unable to Get Breed Info');
      }
    })();
  }, []);

  if (!topBreeds) return <LoadingCat />;

  return (
    <>
      <Header />
      <div className='top-breed__container'>
        <p className='wiki-cat-text__header'> Top 10 most searched breeds</p>
        <div className='top-breed__body'>
          {topBreeds.map((breed, i) => {
            return (
              <div className='top-breed-info'>
                <div className='top-breed-info__img'>
                  <img src={breed.image.url} alt={`${breed.name} Cat`} />
                </div>
                <div className='top-breed-info__text'>
                  <p className='wiki-cat-text__header'>
                    {`${i + 1}. ${breed.name}`}
                  </p>
                  <p className='top-breed-info__text__body'>
                    {breed.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TopBreeds;
