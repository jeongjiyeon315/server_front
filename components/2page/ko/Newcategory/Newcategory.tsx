import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { History, LocationState } from 'history';
import Slide from '@components/2page/ko/Slide/Slide';
import EnSlide from '@components/2page/en/Slide/EnSlide';
import './Newcategory.css';

interface Props {
  selectedcity: any;
  history: History<LocationState>;
}

const Newcategory: FC<Props> = (props: Props) => {
  var local = localStorage.getItem('language');
  var language = local.split('"');

  const [select, setSelect] = useState('');

  const onClickTOR = () => {
    setSelect('관광명소');
  };
  const onClickRES = () => {
    setSelect('음식점');
  };
  const onClickCAF = () => {
    setSelect('카페');
  };

  if (language[1] === 'KO') {
    return (
      <>
        <div className="displaycourse">
          <div className="btncategory">
            <button className={select === '관광명소' ? 'newcategory_clicked' : 'newcategory'} onClick={onClickTOR}>
              <img
                className="categortimg"
                src="src/icon/관광명소.png"
                style={{ width: '3em', display: 'block', margin: 'auto' }}
              />
              관광명소
            </button>
            <button className={select === '음식점' ? 'newcategory_clicked' : 'newcategory'} onClick={onClickRES}>
              <img
                className="categortimg"
                src="src/icon/식당.png"
                style={{ width: '3em', display: 'block', margin: 'auto' }}
              />
              음식점
            </button>
            <button className={select === '카페' ? 'newcategory_clicked' : 'newcategory'} onClick={onClickCAF}>
              <img
                className="categortimg"
                src="src/icon/카페.png"
                style={{ width: '3em', display: 'block', margin: 'auto' }}
              />
              카페
            </button>
          </div>
        </div>
        {select === '관광명소' ? (
          <Slide selectedcity={props.selectedcity} selectedcategory={select} history={props.history} />
        ) : null}
        {select === '음식점' ? (
          <Slide selectedcity={props.selectedcity} selectedcategory={select} history={props.history} />
        ) : null}
        {select === '카페' ? (
          <Slide selectedcity={props.selectedcity} selectedcategory={select} history={props.history} />
        ) : null}
      </>
    );
  } else {
    // 영어
    return (
      <>
        <div className="displaycourse">
          <div className="btncategory">
            <button className={select === '관광명소' ? 'newcategory_clicked' : 'newcategory'} onClick={onClickTOR}>
              <img
                className="categortimg"
                src="src/icon/관광명소.png"
                style={{ width: '3em', display: 'block', margin: 'auto' }}
              />
              ATTRACTION
            </button>
            <button className={select === '음식점' ? 'newcategory_clicked' : 'newcategory'} onClick={onClickRES}>
              <img
                className="categortimg"
                src="src/icon/식당.png"
                style={{ width: '3em', display: 'block', margin: 'auto' }}
              />
              RESTAURANT
            </button>
            <button className={select === '카페' ? 'newcategory_clicked' : 'newcategory'} onClick={onClickCAF}>
              <img
                className="categortimg"
                src="src/icon/카페.png"
                style={{ width: '3em', display: 'block', margin: 'auto' }}
              />
              CAFE
            </button>
          </div>
        </div>
        {select === '관광명소' ? (
          <EnSlide selectedcity={props.selectedcity} selectedcategory={select} history={props.history} />
        ) : null}
        {select === '음식점' ? (
          <EnSlide selectedcity={props.selectedcity} selectedcategory={select} history={props.history} />
        ) : null}
        {select === '카페' ? (
          <EnSlide selectedcity={props.selectedcity} selectedcategory={select} history={props.history} />
        ) : null}
      </>
    );
  }
};

export default Newcategory;
