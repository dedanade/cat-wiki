import React from 'react';

function LoadingCat(props) {
  return (
    <div className='loading-container'>
      <div className='loading-container_body'>
        <div className='cat-head'>
          <div className='cat-ear'>
            <div className='left-ear'></div>
            <div className='right-ear'></div>
          </div>
          <div className='cat-eye'>
            <div className='right-eye'></div>
            <div className='left-eye'></div>
          </div>
          {/* <div className='cat-nose'></div>
          <div className='cat-mouth'></div> */}
        </div>
      </div>
      <div className='loading-lines'></div>
    </div>
  );
}

export default LoadingCat;
