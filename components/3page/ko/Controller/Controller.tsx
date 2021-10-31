import React, { FC, useState } from 'react';
import '@components/3page/Controller.scss';
import Tourapilist from '@components/3page/ko/LikeTourapi/LikeTourapi';
import { History, LocationState } from 'history';
import { Link } from 'react-router-dom';
interface Props {
  mapx: any;
  mapy: any;
  selectedplace: any;
  history: History<LocationState>;
  top5placeid: any;
}
const useSlider = (min: any, max: any, defaultState: any, label: any, id: any) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = (e: any) => {
    setSlide(e.target.value);
  };

  const Slider = () => (
    <input type="range" id={id} min={min} max={max} step={1} defaultValue={state} onMouseUp={handleChange} />
  );
  return [state, Slider, setSlide];
};

const Controller: FC<Props> = (props: Props) => {
  const [slideValue, Slider] = useSlider(1, 20000, 5000, 'Threshold', 'threshold');
  const [selectedArrange, setSelectedArrange] = useState(''); //  정렬기준 *인기순 B / 거리순 E
  const [selectedType, setSelectedType] = useState(0);
  const [apiopen, setApigopen] = useState(false);
  function funcType(selected: number) {
    setSelectedType(selected);
  }
  function funcArrange(selected: string) {
    setSelectedArrange(selected);
  }
  function selectedalert() {
    if (selectedType === 0 || selectedArrange === '') {
      return alert('검색 조건을 모두 선택하여 주세요');
    } else {
      setApigopen(true);
    }
  }

  return (
    <>
      <h2>{props.selectedplace}의 주변장소 찾아보기</h2>
      <div className="controller">
        {/*슬라이더*/}
        <div className="slider-parent" onChange={() => setApigopen(false)}>
          0km
          <Slider />
          20 km
          <div className="buble">{slideValue}m</div>
        </div>
        {/*인기순거리순*/}
        <div className="order" onClick={() => setApigopen(false)}>
          <span
            onClick={() => funcArrange('B')}
            className="order_button"
            id={selectedArrange === 'B' ? 'selected' : 'unselected'}
          >
            인기순
          </span>
          <span
            onClick={() => funcArrange('E')}
            className="order_button"
            id={selectedArrange === 'E' ? 'selected' : 'unselected'}
          >
            거리순
          </span>
        </div>
        {/*카테고리*/}
        <div className="wrapper">
          <div className="category" onClick={() => setApigopen(false)}>
            <span onClick={() => funcType(12)}
                  className="category_button" id={selectedType === 12 ? 'selected' : 'unselected'}>
              관광지
            </span>
            <span onClick={() => funcType(14)}
                  className="category_button" id={selectedType === 14 ? 'selected' : 'unselected'}>
              문화시설
            </span>
            <span onClick={() => funcType(15)}
                  className="category_button" id={selectedType === 15 ? 'selected' : 'unselected'}>
              축제,공연,행사
            </span>
            <span onClick={() => funcType(28)}
                  className="category_button" id={selectedType === 28 ? 'selected' : 'unselected'}>
              레포츠
            </span>
            <span onClick={() => funcType(32)}
                  className="category_button" id={selectedType === 32 ? 'selected' : 'unselected'}>
              숙박
            </span>
            <span onClick={() => funcType(38)}
                  className="category_button" id={selectedType === 38 ? 'selected' : 'unselected'}>
              쇼핑
            </span>
            <span onClick={() => funcType(39)}
                  className="category_button" id={selectedType === 39 ? 'selected' : 'unselected'}>
              음식
            </span>
          </div>
        </div>
      </div>

      <div className="gobtn_outerdiv">
        <div className="gobtn">
          <button
            className="go"
            onClick={() => {
              selectedalert();
            }}
          >
            더 찾아보기
          </button>
        </div>
      </div>

      <div className="클래스명모하지">
        {apiopen && (
          <Tourapilist
            arrange={selectedArrange}
            distance={slideValue}
            type={selectedType}
            mapx={props.mapx}
            mapy={props.mapy}
            history={props.history}
          />
        )}
      </div>
    </>
  );
};

export default Controller;