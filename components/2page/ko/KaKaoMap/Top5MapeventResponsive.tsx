/*global kakao */
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
  const latt = useRef(0);
  const long = useRef(0);
  const kakao = (window as any).kakao;
  useEffect(() => {
    props.top5data !== [] && mapscript();
  }, [props.top5data]);

  const mapscript = () => {
    props.top5data.forEach((el: any) => {
      latt.current += el.location_y;
      long.current += el.location_x;
    });
    props.stationlist.forEach((el: any) => {
      latt.current += el.location_y;
      long.current += el.location_x;
    });
    let container = document.getElementById('maprspId');
    let length = props.stationlist.length + props.top5data.length;
    let options = {
      center: new kakao.maps.LatLng(latt.current / length, long.current / length),
      level: 10,
    };
    const top5map = new kakao.maps.Map(container, options);
    props.stationlist.forEach((el: any) => {
      var imageSrc = '/src/icon/0.png';
      var imageSize = new kakao.maps.Size(30, 30),
        imageOption = { offset: new kakao.maps.Point(27, 69) };
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(el.location_y, el.location_x),
        image: markerImage,
      });

      marker.setMap(top5map);

      var infowindow = new kakao.maps.InfoWindow({
        content: `<span class="info-title">${el.name}</span>`,
      });
      infowindow.open(top5map, marker);
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
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(top5map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    });
    props.top5data.forEach((el: any) => {
      var imageSize = new kakao.maps.Size(30, 30),
        imageOption = { offset: new kakao.maps.Point(27, 69) };
      const markerImage = new kakao.maps.MarkerImage(props.imageSrc, imageSize, imageOption);
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(el.location_y, el.location_x),
        image: markerImage,
      });

      marker.setMap(top5map);
      var infowindow = new kakao.maps.InfoWindow({
        content: `<span class="info-title">${el.name}</span>`,
      });
      infowindow.open(top5map, marker);
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
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(top5map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    });

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
