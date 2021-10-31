import React, { FC, useState } from 'react';
import '@components/3page/Controller.scss';
import { History, LocationState } from 'history';
import EnTourapilist from '../Tourapi/EnTourapilist';
import Tourapilist from '@components/3page/ko/LikeTourapi/LikeTourapi';

interface Props {
  mapx: any;
  mapy: any;
  selectedplace: any;
  history: History<LocationState>;
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

const EnController: FC<Props> = (props: Props) => {
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
      return alert('Please select all the search terms');
    } else {
      setApigopen(true);
    }
  }
  return (
    <>
      <h2>Find the surrounding places of {props.selectedplace}</h2>
      <div className="controller">
        <div className="slider-parent" onChange={() => setApigopen(false)}>
          0
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
            Order of Popularity
          </span>
          <span
            onClick={() => funcArrange('E')}
            className="order_button"
            id={selectedArrange === 'E' ? 'selected' : 'unselected'}
          >
            Order of Distance
          </span>
        </div>
        {/*카테고리*/}
        <div className="wrapper">
          <div className="category" onClick={() => setApigopen(false)}>
            <span onClick={() => funcType(76)} className="category_button" id={selectedType === 76 ? 'selected' : 'unselected'}>
              Attraction
            </span>
            <span onClick={() => funcType(78)} className="category_button" id={selectedType === 78 ? 'selected' : 'unselected'}>
              Cultural facilities
            </span>
            <span onClick={() => funcType(79)} className="category_button" id={selectedType === 79 ? 'selected' : 'unselected'}>
              Shopping
            </span>
            <span onClick={() => funcType(82)} className="category_button" id={selectedType === 82 ? 'selected' : 'unselected'}>
              Food
            </span>
            <span onClick={() => funcType(85)} className="category_button" id={selectedType === 85 ? 'selected' : 'unselected'}>
              Festivals, performances, events
            </span>
            <span onClick={() => funcType(75)} className="category_button" id={selectedType === 75 ? 'selected' : 'unselected'}>
              Leports
            </span>
            <span onClick={() => funcType(80)} className="category_button" id={selectedType === 80 ? 'selected' : 'unselected'}>
              Accommodation
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
            Find More Places !
          </button>
        </div>
      </div>

      <div className="클래스명모하지">
        {apiopen && (
          <EnTourapilist
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

export default EnController;
