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

const Myplacemapdiv: FC<Props> = (props: Props) => {

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

  return (
    <>
      <div className="myplacemap_div">
        <div className="coursemap"  style={{ position: 'relative', width: '100%' }}>
          <Coursemap />
          <span className="likedlist" style={{ display: 'inline-block' , position:'absolute'}}>
           <Likelistscroll placelist={props.placelist} todos={props.todos} onClick={props.onClick} ondeleteClick={props.ondeleteClick} onRemove={props.onRemove} />
         </span>
        </div>

        <div className="coursemap_responsive" style={{ position: 'relative', width: '100%' }}>
          <CoursemapRsp />
          <div className="likedlist" style={{ display: 'inline-block' , position:'absolute'}}>
            <Likelistscroll placelist={props.placelist} todos={props.todos} onClick={props.onClick} ondeleteClick={props.ondeleteClick} onRemove={props.onRemove}/>
         </div>
        </div>


      </div>



    </>
  );
};

export default Myplacemapdiv;
