import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import '@components/2page/Thumbnail.scss';
import YoutubeMapevent from '@components/2page/ko/KaKaoMap/YoutubeMapevent';
import { History, LocationState } from 'history';
import YoutubeMapRsp from '../KaKaoMap/YoutubeMapRsp';

interface Props {
  selectedcity: any;
  selectedcategory: string;
  btn_pic: number;
  history: History<LocationState>;
  selectedplace: any;
}

const Thumbnail: FC<Props> = ({ children, selectedcity, selectedcategory, btn_pic, history, selectedplace }) => {
  const [vloglist, setVloglist] = useState([] as any); //브이로그 id들 저장할 배열
  const [map, setMap] = useState(false);
  const [id, setId] = useState(null);
  var dic: { [key: string]: number } = {
    가평군: 1,
    고양시: 9,
    수원시: 11,
    강릉시: 15,
    춘천시: 16,
    천안시: 33,
    단양군: 36,
    청주시: 37,
    순천시: 45,
    전주시: 57,
    하동군: 65,
    경주시: 73,
    안동시: 85,
    인천: 87,
    대전: 88,
    대구: 89,
    부산: 90,
    울산: 91,
    광주: 92,
  };
  var dic_category: { [key: string]: number } = {
    관광명소: 1,
    음식점: 2,
    카페: 3,
  };
  useEffect(() => {
    setVloglist([]);
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/place/findtop5/${dic[selectedcity]}/${dic_category[selectedcategory]}`)
      .then((response) => {
        if (response.data.data[btn_pic - 1].vlog_list.length >= 5) {
          var number = 5;
        } else {
          number = response.data.data[btn_pic - 1].vlog_list.length;
        }
        for (var j = 0; j < number; j++) {
          setVloglist((prev: any) => [...prev, response.data.data[btn_pic - 1].vlog_list[j].url]);
        }
      })
      .catch((error) => {});
  }, [btn_pic]);

  const [clickedvlog, setClickedvlog] = useState(-1);

  return (
    <>
      <div className="thumbnail_text">{selectedplace}에 방문한 유튜브 vlog 보기 !</div>
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
                  영상 속 장소 더보기
                </div>
              </button>
            </div>
          ))}
      </div>
      <br />
      {map && (
        <>
          <div className="youtubemapevent" style={{ position: 'relative', width: '100%' }}>
            <YoutubeMapevent videoid={id} history={history} />
          </div>
          {/*<div className="youtubemapevent_response" style={{ position: 'relative', width: '100%' }}>*/}
          {/*  <YoutubeMapRsp videoid={id} history={history} />*/}
          {/*</div>*/}
        </>
      )}
    </>
  );
};

export default Thumbnail;
