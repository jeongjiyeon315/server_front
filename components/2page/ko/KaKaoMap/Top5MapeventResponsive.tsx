/*global kakao */
import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import '../../Top5Mapevent.css';
import Liketop5 from '@components/2page/ko/Like/Liketop5';
import { History, LocationState } from 'history';

interface Props {
  top5data: any;
  top5name: any;
  imageSrc: any;
  top5placeid: any;
  placeurl: any;
  history: History<LocationState>;
  stationlist: any;
}

const Top5MapeventResponsive: FC<Props> = (props: Props) => {
  const x = useRef(0);
  const y = useRef(0);
  const kakao = (window as any).kakao;

  useEffect(() => {
    props.top5data !== [] && mapscript();
  }, [props.top5data]);

  const mapscript = () => {
    let container = document.getElementById('maprspId');
    let options = {
      center: new kakao.maps.LatLng(37.55699327194725, 126.97267350572926),
      level: 10,
    };
    var top5map = new kakao.maps.Map(container, options);

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    function displayMarker(place: any) {
      var imageSrc = props.imageSrc,
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
    function displayMarker_s(place: any) {
      var imageSrc = '/src/icon/0.png',
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
          e.parentElement.style.width = w + 'px';
          e.parentElement.previousSibling.style.display = 'none';
          e.parentElement.parentElement.style.border = '0px';
          e.parentElement.parentElement.style.background = 'unset';
        });
        infowindow.close();
        infowindow.open(top5map, marker);
      });
    }

    for (let i = 0; i < props.stationlist.length; i++) {
      displayMarker_s(props.stationlist[i]);
    }

    for (let j = 0; j < props.top5data.length; j++) {
      displayMarker(props.top5data[j]);
    }

    x.current = 0;
    y.current = 0;

    for (var i = 0; i < props.stationlist.length; i++) {
      x.current += props.stationlist[i].location_x;
      y.current += props.stationlist[i].location_y;
    }

    for (var j = 0; j < props.top5data.length; j++) {
      x.current += props.top5data[j].location_x;
      y.current += props.top5data[j].location_y;
    }

    var number = props.stationlist.length + props.top5data.length;

    var Position = new kakao.maps.LatLng(y.current / number, x.current / number);

    top5map.setCenter(Position);
  };

  return (
    <>
      <div id="maprspId" style={{ width: '100%', height: '50%' }}></div>
      <div className="liketop5_div">
        <Liketop5
          top5name={props.top5name}
          top5placeid={props.top5placeid}
          history={props.history}
          placeurl={props.placeurl}
        />
      </div>
    </>
  );
};

export default Top5MapeventResponsive;
