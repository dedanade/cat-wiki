/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { GetBreed, GetBreedImages } from '../Services/ApiRequest';
import Header from './Common/Header';
import Footer from './Common/Footer';
import LoadingCat from './Common/LoadingCat';

function ViewBreed(props) {
  const [ratings, setRatings] = useState(null);
  const [breed, setBreed] = useState(null);
  const [image, setImage] = useState(null);
  const [otherImages, setOtherImages] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const { breedName } = props.match.params;

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const breed = await GetBreed(breedName);
        if (!breed.length) {
          alert(`Unable to get Info for this breed. Try another breed`);
          history.goBack();
        } else {
          const b = breed[0];
          const ratings = [
            { name: 'Adaptability', rate: b.adaptability },
            { name: 'Affection Level', rate: b.affection_level },
            { name: 'Child Friendly', rate: b.child_friendly },
            { name: 'Dog Friendly', rate: b.dog_friendly },
            { name: 'Energy Level', rate: b.energy_level },
            { name: 'Grooming', rate: b.grooming },
            { name: 'Health Issues', rate: b.health_issues },
            { name: 'Intelligence', rate: b.intelligence },
            { name: 'Social Needs', rate: b.social_needs },
            { name: 'Stranger Friendly', rate: b.stranger_friendly },
          ];
          const imgs = await GetBreedImages(breedName, 9);
          const images = imgs.map((b) => {
            return b.url;
          });
          setImage(images[0]);
          images.shift();
          setOtherImages(images);
          setRatings(ratings);
          setBreed(breed[0]);
        }
      } catch (error) {}
    })();
  }, []);

  if (!breed) return <LoadingCat />;
  const RatingFunction = ({ rate }) => {
    var spanRatings = [];
    for (var i = 0; i < 5; i++) {
      spanRatings.push(
        <span
          className={
            i <= rate - 1 ? 'breed-rating__card active' : 'breed-rating__card'
          }
          key={i}
        ></span>
      );
    }
    return spanRatings;
  };

  return (
    <>
      <Header />
      <div className='breed-info'>
        <div className='breed-info__image'>
          {imgLoaded && <div className='breed-info__image__background'></div>}
          <img
            src={image}
            alt={`${breed.name} Cat`}
            onload={() => setImgLoaded(true)}
          />
        </div>
        <div className='breed-info__text'>
          <p className='wiki-cat-text__header'>{breed.name}</p>
          <p className='breed-info__text__sub-header'>
            Bengals are a lot of fun to live with, but they're definitely not
            the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn't provide it.
          </p>
          <div className='breed-info__text__'>
            <div className='d-text-inline'>
              <p className='d-text-inline__header'>Temperament: </p>
              <p className='d-text-inline__details'>{breed.temperament}</p>
            </div>
            <div className='d-text-inline'>
              <p className='d-text-inline__header'>Origin: </p>
              <p className='d-text-inline__details'>{breed.origin}</p>
            </div>
            <div className='d-text-inline'>
              <p className='d-text-inline__header'>Life Span: </p>
              <p className='d-text-inline__details'>{breed.life_span}</p>
            </div>
          </div>
          <div className='breed-rating'>
            {ratings.map((rating, i) => {
              return (
                <div className='breed-rating__flex'>
                  <p key={i} className='breed-rating__name__text'>
                    {rating.name}:
                  </p>
                  <div className='breed-rating__container'>
                    <RatingFunction rate={rating.rate} />
                  </div>
                </div>
              );
            })}
            {/* <div className='breed-rating__rate'>
              {ratings.map((rating, i) => {
                return (
                  <div key={i} className='breed-rating__container'>
                    <RatingFunction rate={rating.rate} />
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
      <div className='breed-info__others'>
        <p className='wiki-cat-text__header other_images__header'>
          Other Photos
        </p>
        <div className='other_images__grid'>
          {otherImages.map((img, i) => {
            return (
              <div className='other_image'>
                <img key={i} src={img} alt={breed.name} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewBreed;
