import React from 'react';
import { useState } from 'react';
import JSONDATA from './info.json';
import '@components/1page/Container.scss';

const Container = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const selectCity = (value: any) => {
    if (value.id === 1) {
      props.setGyeongitoggle(true);
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 2) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(true);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 3) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(true);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 4) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(true);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 5) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(true);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 6) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(true);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 7) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(true);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 8) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(true);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 9) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(true);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 10) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(true);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 11) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(true);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    } else if (value.id === 12) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(true);
    } else if (value.id === 13) {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(false);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(true);
      props.setBusantoggle(false);
    } else {
      props.setMap(value.cityLink);
      props.setSelectedcity(value.name);
      props.setGyeongitoggle(false);
      props.setGangwontoggle(false);
      props.setIncheontoggle(false);
      props.setChungbuktoggle(false);
      props.setChungnamtoggle(false);
      props.setDaejeontoggle(false);
      props.setJeonbuktoggle(false);
      props.setJeonnamtoggle(false);
      props.setGwangjutoggle(true);
      props.setGyeonbuktoggle(false);
      props.setGyeonnamtoggle(false);
      props.setDaegutoggle(false);
      props.setUlsantoggle(false);
      props.setBusantoggle(false);
    }
  };

  return (
    <div className="Searchinput">
      <input
        type="text"
        placeholder="어디로 떠나실건가요?"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="container">
        {JSONDATA.filter((val: any) => {
          if (searchTerm == '') {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val: any, key: any) => {
          return (
            <div className="contry" key={key}>
              <p onClick={() => selectCity(val)}>{val.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
