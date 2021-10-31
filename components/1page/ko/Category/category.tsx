import React, { useState } from 'react';
import '@components/1page/category.css';

const Category = (props: any) => {
  const [clicked, setClicked] = useState('');

  return (
    <>
      <div className="encategory_box">
        <label
          onClick={() => {
            props.setSelectedcategory('관광명소');
            setClicked('tor');
          }}
          className={clicked === 'tor' ? 'enclicked' : 'enbutton'}
        >
          <img className="categortimg" src="src/icon/관광명소.png" style={{ width: '5%' }} />
          <p className="category_p" style={{ display: 'inline' }}>
            관광명소
          </p>
        </label>
        <label
          onClick={() => {
            props.setSelectedcategory('음식점');
            setClicked('res');
          }}
          className={clicked === 'res' ? 'enclicked' : 'enbutton'}
        >
          <img className="categortimg" src="src/icon/식당.png" style={{ width: '5%' }} />
          <p className="category_p" style={{ display: 'inline' }}>
            음식점
          </p>
        </label>
        <label
          onClick={() => {
            props.setSelectedcategory('카페');
            setClicked('caf');
          }}
          className={clicked === 'caf' ? 'enclicked' : 'enbutton'}
        >
          <img className="categortimg" src="src/icon/카페.png" style={{ width: '5%' }} />
          <p className="category_p" style={{ display: 'inline' }}>
            카페
          </p>
        </label>
      </div>
    </>
  );
};

export default Category;
