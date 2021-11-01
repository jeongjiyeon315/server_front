import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Style.css';

const LogoutHeader = () => {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', JSON.stringify('KO'));
  } // 혹시모를 기본값 설정

  const onClickKo = () => {
    localStorage.removeItem('language');
    localStorage.setItem('language', JSON.stringify('KO'));
    location.reload();
  };
  const onClickEn = () => {
    localStorage.removeItem('language');
    localStorage.setItem('language', JSON.stringify('EN'));
    location.reload();
  };
  var local = localStorage.getItem('language');
  var language = local.split('"');

  return (
    <header className="Header">
      <div className="Contents">
        <Link className="logo" to="/" style={{ textDecoration: 'none', color: '#000000' }}>
          <img className="uspotlogo" src="/src/icon/USPOT로고1.png" alt="USPOT" width="120" height="70" />
        </Link>
        <nav className="Navigation">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                <img className="header_category" src="/src/icon/home.png" alt="home" width="30" height="30" />
                <div className="header_text">HOME</div>
              </Link>
            </li>
            <li>
              <Link to="/mypage" style={{ textDecoration: 'none', color: '#000000' }}>
                <img className="header_category" src="/src/icon/location.png" alt="myplace" width="30" height="30" />
                <div className="header_text">MYPLACE</div>
              </Link>
            </li>
            <li>
              <button
                id="logout"
                onClick={() => {
                  if (language[1] === 'KO') {
                    alert('로그아웃 되셨습니다!');
                  } else {
                    alert('Log Out Success');
                  }
                  <Redirect to="/login" />;
                  sessionStorage.removeItem('memberid');
                  location.reload();
                }}
              >
                <img className="header_category" src="/src/icon/mypage.png" alt="logout" width="30" height="30" />
                <div className="header_text">LOGOUT</div>
              </button>
            </li>
            <div id="btn">
              <li>
                <button
                  className="language"
                  onClick={onClickKo}
                  id={language[1] === 'KO' ? 'selectedlanguage' : 'notselectedlanguage'}
                >
                  KOR
                </button>
              </li>
              <li>
                <button
                  className="language"
                  onClick={onClickEn}
                  id={language[1] === 'EN' ? 'selectedlanguage' : 'notselectedlanguage'}
                >
                  ENG
                </button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LogoutHeader;
