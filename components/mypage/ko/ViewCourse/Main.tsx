import React from 'react';
import CourseList from './CourseList';
import '@components/mypage/ViewCourse.scss';

const ViewMain = () => {
  return (
    <>
      <h3 className="viewtitle">코스 한눈에 보기</h3>
      <CourseList />
    </>
  );
};
export default ViewMain;
