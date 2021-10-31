import React from 'react';
import CourseList from './CourseList';
import '@components/mypage/ViewCourse.scss';

const ViewMain = () => {
  return (
    <>
      <div className="revisetitle" style={{margin:'2vh 0 1vh'}}>확인할 코스를 선택해주세요</div>

      <CourseList />
    </>
  );
};
export default ViewMain;
