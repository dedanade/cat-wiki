import React, { useEffect, useState } from 'react';
import HeroCard from './Common/HeroCard';
import DiscoverCats from './Common/DiscoverCats';
import WhyCards from './Common/WhyCards';
import { GetBreedNames, GetTopBreeds } from '../Services/ApiRequest';
import Header from './Common/Header';
import Footer from './Common/Footer';
import LoadingCat from './Common/LoadingCat';

function Homepage(props) {
  const [allBreeds, setAllBreeds] = useState(null);
  const [searchedBreeds, setSearchBreeds] = useState(null);
  const [topBreeds, setTopBreeds] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const breeds = await GetBreedNames();
        const topBreeds = await GetTopBreeds();
        setTopBreeds(topBreeds.slice(0, 4));
        setSearchBreeds(breeds);
        setAllBreeds(breeds);
      } catch (error) {
        alert('Unable to get the cats you want. Try again later');
      }
    })();
  }, []);
  if (!allBreeds) return <LoadingCat />;
  return (
    <>
      <Header />
      <HeroCard
        allBreeds={allBreeds}
        searchedBreeds={searchedBreeds}
        setSearchBreeds={setSearchBreeds}
      />
      <DiscoverCats topBreeds={topBreeds} />
      <WhyCards />
      <Footer />
    </>
  );
}

export default Homepage;
