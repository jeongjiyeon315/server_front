import React, { useState } from 'react';
import MakeCourse from '@components/mypage/ko/ReviseCourse/MakeCourse';
import ViewMain from '../ViewCourse/EnMain';
import '@components/mypage/Button.scss';
import EnSearch from '../Search/EnSearch';
import EnMakeCourse from '../ReviseCourse/EnMakeCourse';
import EnViewMain from '../ViewCourse/EnMain';

const EnMypage = () => {
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
            Make Course
          </button>
          <button className={select === 2 ? 'mypagecourse_clicked' : 'mypagecourse'} onClick={onClickrevise}>
            Revise Course
          </button>
          <button className={select === 3 ? 'mypagecourse_clicked' : 'mypagecourse'} onClick={onClickview}>
            My Course
          </button>
        </div>
      </div>
      {select !== 0 && (select === 1 ? <EnSearch /> : select === 2 ? <EnMakeCourse /> : <EnViewMain />)}
    </>
  );
};

export default EnMypage;
