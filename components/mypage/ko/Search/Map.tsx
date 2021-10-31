import React, { FC, useEffect, useMemo, useState } from 'react';
import MakeCourse from '@components/mypage/ko/MakeCoures/MakeCourse';

interface Props {
  Place: string;
}

const Map: FC<Props> = ({ children, Place }) => {
  const kakao = (window as any).kakao;
  const [select, setSelect] = useState('');
  const [open, setOpen] = useState(false);
  const [map, setMap] = useState(null);
  const [startplacename, setStartplacename] = useState('');

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    setMap(new kakao.maps.Map(container, options));
  }, []);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(Place, placesSearchCB);

    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다');
        return;
      }
    }
    function displayMarker(place: any) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      kakao.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, marker);
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      });
      kakao.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close();
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
        setSelect(place);
        setStartplacename(place.place_name);
        setOpen(true);
      });
    }
  }, [Place]);

  return (
    <>
      <div id="myMap" style={{ width: '30vw', height: '30vw', margin: 'auto' }} />
      {open && <MakeCourse start={select} startplacename={startplacename} />}
    </>
  );
};

export default React.memo(Map);
