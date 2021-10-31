import React from 'react';
import './Style.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer_contents" style={{fontSize:'12px', color:'rgb(186 186 186)', paddingLeft:'10vw'}}>
        <span className="Title" style={{padding:'20px 0px 10px 0px', display:'inline-block', margin:'0', color:'rgb(92 88 88)'}}>U SPOT</span>
        <div style={{fontSize:'13px'}}>
          © 2021 GANGGANG All rights reserved.
        </div>
        <div style={{fontSize:'12px'}}>
          <br/>
          문예완 mool1997@naver.com
          <br/>
          이예진 yejin9487@daum.net
          <br/>
          정지연 jung_j_yeon@naver.com
          <br/>
          노하늘 gksmf001105@naver.com
          <br/>
          윤주리 dbswnfl2@naver.com
          <br/>
        </div>
        <br/>
        <br/>
      </div>
    </footer>
  );
};

export default Footer;
