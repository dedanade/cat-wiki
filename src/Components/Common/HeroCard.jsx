import React, { useState } from 'react';
import { ReactComponent as HEADER_CAT_WIKI_LOGO } from '../../images/HeaderCatwikiLogo.svg';
import { ReactComponent as HEADER_MOBILE_CAT_WIKI_LOGO } from '../../images/SmHeaderCatwikiLogo.svg';
import { ReactComponent as SEARCH_SVG } from '../../images/search_white.svg';
import { ReactComponent as CLOSE_SVG } from '../../images/close_black.svg';
import { useHistory } from 'react-router-dom';

function HeroCard({ searchedBreeds, allBreeds, setSearchBreeds }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showSmSearch, setShowSmSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleSearchBreed = (value) => {
    setSearchValue(value);
    const newValue = value.toLowerCase();
    if (value.length) {
      const result = allBreeds.filter((b) => {
        return b.name.toLowerCase().includes(newValue);
      });
      setSearchBreeds(result);
    } else {
      setSearchBreeds(allBreeds);
    }
  };
  return (
    <>
      <div className='hero-card'>
        <div className='hero-card__image'>
          <div className='hero-card__header'>
            <span className='lg-header-logo'>
              <HEADER_CAT_WIKI_LOGO />
            </span>
            <span className='sm-header-logo'>
              <HEADER_MOBILE_CAT_WIKI_LOGO />
            </span>
            <p className='hero__sub-heading'>
              Get to know more about your cat breed
            </p>
            <div className='search-input__card'>
              <input
                type='text'
                name='searchInput'
                id='searchInput'
                value={searchValue}
                onChange={(e) => handleSearchBreed(e.currentTarget.value)}
                onFocus={() => setShowSearch(true)}
                onBlur={() =>
                  setTimeout(() => {
                    setShowSearch(false);
                  }, 300)
                }
                className='input-control-hide'
                placeholder='Enter your breed'
              />
              <SEARCH_SVG />
              {showSearch && (
                <div className='search-suggestions'>
                  <ul className='search-suggestions__ul'>
                    {searchedBreeds.length ? (
                      searchedBreeds.map((b, i) => {
                        return (
                          <li
                            key={i}
                            onClick={() => history.push(`/breed/${b.id}`)}
                          >
                            {b.name}
                          </li>
                        );
                      })
                    ) : (
                      <li>No Result for {searchValue}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div
              onClick={() => setShowSmSearch(true)}
              className='search-input__card sm'
            >
              <input
                type='text'
                name='searchInput'
                id='searchInput'
                disabled={true}
                defaultValue={searchValue}
                className='input-control-hide'
                placeholder='Search'
              />
              <SEARCH_SVG />
            </div>
          </div>
        </div>
        {showSmSearch && (
          <div className='modal search-sm'>
            <div className='modal-body search-sm'>
              <div className='close-btn__card'>
                <span
                  onClick={() => setShowSmSearch(false)}
                  className='close-btn'
                >
                  <CLOSE_SVG />
                </span>
              </div>
              <div className='search-input__card'>
                <input
                  type='text'
                  name='searchInput'
                  id='searchInput'
                  className='input-control-hide'
                  placeholder='Search'
                  onChange={(e) => handleSearchBreed(e.currentTarget.value)}
                />
                <SEARCH_SVG />
              </div>
              <ul className='search-suggestions__ul'>
                {searchedBreeds.length ? (
                  searchedBreeds.map((b, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => history.push(`/breed/${b.id}`)}
                      >
                        {b.name}
                      </li>
                    );
                  })
                ) : (
                  <li>No Result for {searchValue}</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeroCard;
