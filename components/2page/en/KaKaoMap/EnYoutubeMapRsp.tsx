/*global kakao */
import EnLikeVlog from '@components/2page/ko/Like/LikeVlog';
import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import '../../Top5Mapevent.css';
import { History, LocationState } from 'history';

interface Props {
  videoid: any;
  history: History<LocationState>;
  vlogplaceid: any;
}

const EnYoutubeMapRsp: FC<Props> = ({ children, videoid, history, vlogplaceid }) => {
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  const [place, setPlace] = useState([] as any);
  const [name, setName] = useState([] as any);
  const [youtubemap2, setYoutubemap2] = useState(null);
  const [markers, setMarkers] = useState([] as any);
  const [placeurl, setPlaceurl] = useState([] as any);
  const [vlogid, setVlogid] = useState([] as any);
  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    let container = document.getElementById('youtubemap2');
    let options = {
      center: new kakao.maps.LatLng(37.55699327194725, 126.97267350572926),
      level: 10,
    };
    setYoutubemap2(new kakao.maps.Map(container, options));
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/en/vlog/findplace/${videoid}`)
      .then((response) => {
        setPlace(response.data.data);
        setName([]);
        setPlaceurl([]);
        setVlogid([]);
        for (var i = 0; i < response.data.data.length; i++) {
          setName((prev: any) => [...prev, response.data.data[i].name]);
          setPlaceurl((prev: any) => [...prev, response.data.data[i].placeUrl]);
          setVlogid((prev: any) => [...prev, response.data.data[i].placeId]);
        }
      })
      .catch((error) => {});
  }, [videoid]);
  useEffect(() => {
    if (place.length !== 0) {
      mapscript();
    }
  }, [place]);

  const mapscript = () => {
    removeMarker();

    x.current = 0;
    y.current = 0;
    for (var i = 0; i < place.length; i++) {
      x.current += place[i].location_x;
      y.current += place[i].location_y;
    }

    var Position = new kakao.maps.LatLng(y.current / place.length, x.current / place.length);
    youtubemap2.setCenter(Position);

    for (var i = 0; i < place.length; i++) {
      var placePosition = new kakao.maps.LatLng(place[i].location_y, place[i].location_x),
        marker = addMarker(placePosition, i, place[i].categoryId);
      var infowindow = new kakao.maps.InfoWindow({
        content: `<span class="info-title">${place[i].name}</span>`,
      });
      infowindow.open(youtubemap2, marker);

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(youtubemap2, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

      var infoTitle = document.querySelectorAll('.info-title');
      infoTitle.forEach(function (e: any) {
        var w = e.offsetWidth + 10;
        var ml = w / 2;
        e.parentElement.style.top = '82px';
        e.parentElement.style.left = '50%';
        e.parentElement.style.marginLeft = -ml + 'px';
        e.parentElement.style.width = w + 'px';
        e.parentElement.previousSibling.style.display = 'none';
        e.parentElement.parentElement.style.border = '0px';
        e.parentElement.parentElement.style.background = 'unset';
      });
      infowindow.close();
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(youtubemap2, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  };

  function addMarker(position: any, idx: any, id: any) {
    var imageSrc = `/src/icon/${id}.png`,
      imageSize = new kakao.maps.Size(36, 37),
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
      marker = new kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

    marker.setMap(youtubemap2);
    setMarkers((prev: any) => [...prev, marker]);
    return marker;
  }
  function makeOverListener(map: any, marker: any, infowindow: { open: (arg0: any, arg1: any) => void }) {
    return function () {
      infowindow.open(map, marker);
    };
  }
  function makeOutListener(infowindow: { close: () => void }) {
    return function () {
      infowindow.close();
    };
  }
  function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    setMarkers([]);
  }

  return (
    <div style={{ position: 'relative' }}>
      <div id="youtubemap2" style={{ width: '100%', height: '50%' }}></div>
      <div className="likevlog_div">
        <EnLikeVlog vlogplacename={name} vlogpid={videoid} history={history} vlogplaceid={vlogid} placeurl={placeurl} />
      </div>
    </div>
  );
};

export default EnYoutubeMapRsp;
