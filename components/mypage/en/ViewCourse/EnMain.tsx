import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import CourseList from './EnCourseList';
import EnNone from '@components/mypage/en/ReviseCourse/EnNone';

const EnViewMain = () => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [exist, setExsist] = useState(false);
  useEffect(() => {
    axios
      .get(process.env.REACT_DB_HOST + `/api/en/course/findall/${memberid}`)
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
            Please choose a course to check{' '}
          </div>
          <CourseList />
        </>
      ) : (
        <EnNone />
      )}
    </>
  );
};
export default EnViewMain;
