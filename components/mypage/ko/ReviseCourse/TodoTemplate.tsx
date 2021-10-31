import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from '@components/mypage/ko/ReviseCourse/TodoItemlist';
import TodoTitle from './TodoTitle';
import '@components/mypage/Revisecss.scss';
import CourseInputSave from '@components/mypage/ko/ReviseCourse/CourseInputSave';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import Likelistscroll from '@components/mypage/ko/ReviseCourse/Likelistscroll';
import CoursemapRsp from '@components/mypage/ko/Course/CoursemapRsp';
interface Props {
  courseid: number;
  coursename: string;
  setCourese: any;
  setName: any;
}

const TodoTemplate: FC<Props> = (props: Props) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [namelist, setNamelist] = useState([] as any);
  const [placelist, setPlacelist] = useState([] as any);
  const [index, setIndex] = useState([] as any);
  const [todos, setTodos] = useState([] as any);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/myplace/findall/${memberid}`)
      .then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          setPlacelist(response.data.data);
          setNamelist((prev: any) => [...prev, response.data.data[i].name]);
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setTodos([]);
    setIndex([]);
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/myplacecourse/findall/${props.courseid}`)
      .then(async (response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          setTodos((prev: any) => [...prev, response.data.data[i].myplaceDto]);
          setIndex((prev: any) => [...prev, response.data.data[i].myplaceDto.placeId]);
        }
      })
      .catch((error) => {});
  }, [props.courseid]);

  const onClick = (list: any) => {
    if (todos.length >= 10) {
      alert('코스는 10개를 넘을 수 없습니다!');
    } else {
      if (index.indexOf(list.placeId) === -1) {
        setTodos((prev: any) => [...prev, list]);
        setIndex((prev: any) => [...prev, list.placeId]);
      }
    }
  };
  const ondeleteClick = (list: any) => {
    var myplaceid = list.id;
    setPlacelist(placelist.filter((place: any) => place.id !== myplaceid));
    setTodos(todos.filter((place: any) => place.id !== myplaceid));
    axios
      .delete(process.env.REACT_APP_DB_HOST + `/api/myplace/deletebymyplace/${memberid}/${myplaceid}`)
      .catch((error) => {});
  };

  const likedlist: any = namelist.map((v: string, index: number) => (
    <>
      <button id={v} key={index} onClick={() => onClick(placelist[index])}>
        {namelist[index]}
      </button>
    </>
  ));

  const onRemove = (id: number) => {
    setTodos(todos.filter((place: any) => place.id !== id));
    var idx = index.indexOf(id);
    index[idx] = 0;
  };

  return (
    <>
      <div className="coursetitle">코스이름을 수정할 수 있어요</div>
      <CourseInputSave todos={todos} onRemove={onRemove} courseid={props.courseid} coursename={props.coursename} />

      <div className="makecourselist">
        <TodoItemList todos={todos} onRemove={onRemove} onClick={onClick} ondeleteClick={ondeleteClick} />
      </div>

      <div className="myplacemap_div">
        <div className="coursemap" style={{ position: 'relative', width: '100%' }}>
          <Coursemap />
          <span className="likedlist" style={{ display: 'inline-block', position: 'absolute' }}>
            <Likelistscroll
              placelist={placelist}
              todos={todos}
              onClick={onClick}
              ondeleteClick={ondeleteClick}
              onRemove={onRemove}
            />
          </span>
        </div>

        <div className="coursemap_responsive" style={{ position: 'relative', width: '100%' }}>
          <CoursemapRsp />
          <div className="likedlist" style={{ display: 'inline-block', position: 'absolute' }}>
            <Likelistscroll
              placelist={placelist}
              todos={todos}
              onClick={onClick}
              ondeleteClick={ondeleteClick}
              onRemove={onRemove}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTemplate;
