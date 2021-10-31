import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import CourseList from './EnCourseList';

const EnViewMain = () => {
  return (
    <>
      <h3 className="viewtitle">View my course list</h3>
      <CourseList />
    </>
  );
};
export default EnViewMain;
