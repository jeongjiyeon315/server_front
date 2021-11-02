import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import '@components/2page/Thumbnail.scss';
import EnYoutubeMapevent from '@components/2page/en/KaKaoMap/EnYoutubeMapevent';
import { History, LocationState } from 'history';

interface Props {
  selectedcity: any;
  selectedcategory: string;
  btn_pic: number;
  history: History<LocationState>;
  selectedplace: any;
}

const EnThumbnail: FC<Props> = ({ children, selectedcity, selectedcategory, btn_pic, history, selectedplace }) => {
  const [vloglist, setVloglist] = useState([] as any);
  const [map, setMap] = useState(false);
  const [id, setId] = useState(null);
  const [vlogplaceid, setVlogplaceid] = useState([] as any);
  var dic: { [key: string]: number } = {
    gapyeong: 1,
    goyaong: 9,
    suwon: 11,
    gangneung: 15,
    chuncheon: 16,
    cheonan: 33,
    danyang: 36,
    cheongju: 37,
    suncheon: 45,
    jeonju: 57,
    hadong: 65,
    gyeongju: 73,
    andong: 85,
    incheon: 87,
    daejeon: 88,
    daegu: 89,
    busan: 90,
    gwangju: 92,
  };
  var dic_category: { [key: string]: number } = {
    관광명소: 1,
    음식점: 2,
    카페: 3,
  };
  useEffect(() => {
    setVloglist([]);
    axios
      .get(
        process.env.REACT_APP_DB_HOST + `/api/en/place/findtop5/${dic[selectedcity]}/${dic_category[selectedcategory]}`,
      )
      .then((response) => {
        if (response.data.data[btn_pic - 1].vlog_list.length >= 5) {
          var number = 5;
        } else {
          number = response.data.data[btn_pic - 1].vlog_list.length;
        }
        for (var j = 0; j < number; j++) {
          setVlogplaceid((prev: any) => [...prev, response.data.data[j].id]);
          setVloglist((prev: any) => [...prev, response.data.data[btn_pic - 1].vlog_list[j].url]);
        }
      })
      .catch((error) => {});
  }, [btn_pic]);

  const [clickedvlog, setClickedvlog] = useState(-1);

  return (
    <>
      <div className="thumbnail_text">View more vlogs in {selectedplace}!</div>
      <div className="youtube_all" style={{ overflowY: 'hidden' }}>
        {vloglist !== [] &&
          vloglist.map((datas: any, i: any) => (
            <div key={i} className="youtube_each">
              <iframe
                width="336"
                height="188"
                src={`https://www.youtube.com/embed/${datas}?controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                className="underline-hover-btn"
                onClick={() => {
                  setMap(true);
                  setId(datas);
                  setClickedvlog(i);
                }}
              >
                <div className="gomap" id={clickedvlog === i ? 'clickedvlog' : 'notclickedvlog'}>
                  More places in this video
                </div>
              </button>
            </div>
          ))}
      </div>
      <br />
      {map && (
        <>
          <div className="youtubemapevent" style={{ position: 'relative', width: '100%' }}>
            <EnYoutubeMapevent videoid={id} history={history} vlogplaceid={vlogplaceid} />
          </div>
        </>
      )}
    </>
  );
};

export default EnThumbnail;
