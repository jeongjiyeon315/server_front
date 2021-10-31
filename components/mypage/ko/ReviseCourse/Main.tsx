import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import TodoTemplate from './TodoTemplate';

const Main = () => {
  var local = sessionStorage.getItem('memberid');
  const [state, setState] = useState(0);
  const [course, setCourese] = useState([] as any);
  const [name, setName] = useState('');
  const [idx, setIdx] = useState(-1);

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

  const onClick = (id: number, index: number, coursename: string) => {
    setState(id);
    setName(coursename);
    setIdx(index);
  };
  const courselist: any = course.map((v: string, index: number) => (
    <>
      <button
        id={idx === index ? 'clickedcourse' : 'notclickedcourse'}
        key={index}
        className="deletebutton"
        onClick={() => {
          onClick(course[index].courseid, index, course[index].name);
        }}
      >
        {course[index].name}
      </button>
    </>
  ));
  return (
    <>
      <div className="revisetitle" style={{ margin: '2vh 0 1vh' }}>
        수정할 코스를 선택해주세요
      </div>
      <div className="viewouter">{courselist}</div>

      {state !== 0 && (
        <>
          <div className="makecourse_div">
            <TodoTemplate courseid={state} coursename={name} setName={setName} setCourese={setCourese} />
          </div>
        </>
      )}
    </>
  );
};
export default Main;
