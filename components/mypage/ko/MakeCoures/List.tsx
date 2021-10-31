import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from './TodoItemlist';
import Likelistscroll from '@components/mypage/ko/MakeCoures/Likelistscroll';
import '@components/mypage/List.scss';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import CoursemapRsp from '@components/mypage/ko/Course/CoursemapRsp';
import CourseInputSave from '@components/mypage/ko/MakeCoures/CourseInputSave';
import axios from 'axios';
import Map from '@components/mypage/ko/Search/Map';
import MapRsp from '@components/mypage/ko/Search/MapRsp';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
  start: any;
}

const List: FC<Props> = (props: Props) => {
  const [text, setText] = useState('코스');
  var local = sessionStorage.getItem('memberid');
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const onClick = () => {
    var name = text;
    var myplaceList = props.todos;

    if (myplaceList.length !== 0) {
      axios
        .post(process.env.REACT_APP_DB_HOST + `/api/course/add/${memberid}`, JSON.stringify({ name, myplaceList }), {
          headers,
        })
        .then(() => {})
        .catch((error) => {});

      alert('코스가 저장되었습니다!');

      location.reload();
    } else {
      alert('코스에 장소를 담아주세요!');
    }
  };

  return (
    <>
      <div className="coursetitle">코스를 만들어 보아요!</div>

      <div className="makecourselist">
        <TodoItemList todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
      </div>
      {/*코스저장save버튼*/}
      <CourseInputSave todos={props.todos} onRemove={props.onRemove} placeid={props.start} />

      <div className="myplacemap_div">
        <div className="coursemap" style={{ position: 'relative', width: '100%' }}>
          <Coursemap />
          <span className="likedlist" style={{ display: 'inline-block', position: 'absolute' }}>
            <Likelistscroll
              placelist={props.placelist}
              todos={props.todos}
              onClick={props.onClick}
              ondeleteClick={props.ondeleteClick}
              onRemove={props.onRemove}
              start={props.start}
            />
          </span>
        </div>

        <div className="coursemap_responsive" style={{ position: 'relative', width: '100%' }}>
          <CoursemapRsp />
          <div className="likedlist" style={{ display: 'inline-block', position: 'absolute' }}>
            <Likelistscroll
              placelist={props.placelist}
              todos={props.todos}
              onClick={props.onClick}
              ondeleteClick={props.ondeleteClick}
              onRemove={props.onRemove}
              start={props.start}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
