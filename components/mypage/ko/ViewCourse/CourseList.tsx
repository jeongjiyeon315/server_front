import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coursemap from './Coursemap';

const CourseList = () => {
  var local = sessionStorage.getItem('memberid');
  const [course, setCourese] = useState([] as any);
  const [courseid, setCourseid] = useState();
  const [exist, setExist] = useState(false);

  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  useEffect(() => {
    setCourese([]);
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  }, []);

  const onClick = (id: number) => {
    if (window.confirm('코스를 삭제 하시겠습니까?')) {
      axios
        .delete(process.env.REACT_APP_DB_HOST + `/api/course/delete/${id}`)
        .then((response) => {})
        .catch((error) => {});
      alert('코스가 삭제 되었습니다!');
    }
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/course/findall/${memberid}`)
      .then(async (response) => {
        setCourese(response.data.data);
      })
      .catch((error) => {});
  };

  function Likelist({ list, name }: any) {
    console.log(list, name);
    return (
      <>
        <div className="viewbuttonlist">
          <button
            className="deletebutton"
            onClick={() => {
              setCourseid(list.courseid);
              setExist(true);
            }}
          >
            <p className="deletename">{name}</p>
          </button>
          <button
            className="viewimg"
            onClick={() => {
              onClick(list.courseid);
            }}
          >
            <img className="viewtrashbutton" src="/src/icon/delete-button.png" width="30" />
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="viewouter">
        {course.map((v: string, index: number) => (
          <Likelist list={course[index]} name={course[index].name} />
        ))}
      </div>
      {exist && <Coursemap courseid={courseid} />}
    </>
  );
};
export default CourseList;
