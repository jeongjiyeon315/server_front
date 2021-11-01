import React, { useEffect, useState } from 'react';
import CourseList from './CourseList';
import '@components/mypage/ViewCourse.scss';
import axios from 'axios';
import Main from '@components/mypage/ko/ReviseCourse/Main';
import None from '@components/mypage/ko/ReviseCourse/None';

const ViewMain = () => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [exist, setExsist] = useState(false);
  useEffect(() => {
    axios
      .get(process.env.REACT_DB_HOST + `/api/course/findall/${memberid}`)
      .then(async (response) => {
        if (response.data.data.length !== 0) {
          setExsist(true);
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {exist ? (
        <>
          <div className="revisetitle" style={{ margin: '2vh 0 1vh' }}>
            확인할 코스를 선택해주세요
          </div>
          <CourseList />
        </>
      ) : (
        <None />
      )}
    </>
  );
};
export default ViewMain;
