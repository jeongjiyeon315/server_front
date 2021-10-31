import React, { useState } from 'react';
import MakeCourse from '@components/mypage/ko/ReviseCourse/MakeCourse';
import Search from '../Search/Search';
import ViewMain from '../ViewCourse/Main';
import '@components/mypage/Button.scss';
import '@components/mypage/Coursemap.css'

const Mypage = () => {
  const [select, setSelect] = useState(0);

  const onClickadd = () => {
    setSelect(1);
  };
  const onClickrevise = () => {
    setSelect(2);
  };
  const onClickview = () => {
    setSelect(3);
  };
  return (
    <>
      <div className="displaycourse">
        <div className="btncourse">
          <button className={select === 1 ? 'mypagecourse_clicked' : 'mypagecourse'} onClick={onClickadd}>
            코스 만들기
          </button>
          <button className={select === 2 ? 'mypagecourse_clicked' : 'mypagecourse'} onClick={onClickrevise}>
            코스 수정하기
          </button>
          <button className={select === 3 ? 'mypagecourse_clicked' : 'mypagecourse'} onClick={onClickview}>
            내코스
          </button>
        </div>
      </div>
      {select !== 0 && (select === 1 ? <Search /> : select === 2 ? <MakeCourse /> : <ViewMain />)}
    </>
  );
};

export default Mypage;
