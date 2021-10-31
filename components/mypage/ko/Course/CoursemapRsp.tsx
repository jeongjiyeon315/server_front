/*global kakao */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '@components/mypage/List.scss';

export default function CoursemapRsp() {
  const x = useRef(0);
  const y = useRef(0);
  const kakao = (window as any).kakao;
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [myplace, setMyplace] = useState([] as any);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/myplace/findall/${memberid}`)
      .then(async (response) => {
        setMyplace(response.data.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    mapscript();
  }, [myplace]);

  const mapscript = () => {
    let container = document.getElementById('myplacemapRsp');
    let options = {
      center: new kakao.maps.LatLng(37.55699327194725, 126.97267350572926),
      level: 10,
    };
    var top5map = new kakao.maps.Map(container, options);

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    function displayMarker(place: any) {
      if (place.category === '관광명소') {
        var id = 1;
      } else if (place.category === '음식점') {
        var id = 2;
      } else if (place.category === '카페') {
        var id = 3;
      } else {
        var id = 11;
      }
      var Src = `/src/icon/${id}.png`;
      var imageSrc = Src,
        imageSize = new kakao.maps.Size(36, 37),
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
        marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(place.location_y, place.location_x),
          image: markerImage,
        });

      marker.setMap(top5map);

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(`<span class="info-title">${place.name}</span>`);
        infowindow.open(top5map, marker);
        var infoTitle = document.querySelectorAll('.info-title');
        infoTitle.forEach(function (e: any) {
          var w = e.offsetWidth + 10;
          var ml = w / 2;
          e.parentElement.style.top = '62px';
          e.parentElement.style.left = '50%';
          e.parentElement.style.marginLeft = -ml + 'px';
          e.parentElement.previousSibling.style.display = 'none';
          e.parentElement.parentElement.style.border = '0px';
          e.parentElement.parentElement.style.background = 'unset';
        });
        infowindow.close();
        infowindow.open(top5map, marker);
      });
    }

    for (let j = 0; j < myplace.length; j++) {
      displayMarker(myplace[j]);
    }

    x.current = 0;
    y.current = 0;

    for (var i = 0; i < myplace.length; i++) {
      x.current += myplace[i].location_x;
      y.current += myplace[i].location_y;
    }

    var number = myplace.length;

    var Position = new kakao.maps.LatLng(y.current / number, x.current / number);

    top5map.setCenter(Position);
  };

  return (
    <>
      <div id="myplacemapRsp" style={{ width: '100%', height: '50vw' }}></div>
    </>
  );
}
