import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import CourseList from './EnCourseList';

const EnViewMain = () => {
  return (
    <>
      <div className="revisetitle" style={{margin:'2vh 0 1vh'}}>Please choose a course to check      </div>
      <CourseList />
    </>
  );
};
export default EnViewMain;
