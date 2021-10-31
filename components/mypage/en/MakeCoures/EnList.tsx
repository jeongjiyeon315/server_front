import React, { FC, useEffect, useRef, useState } from 'react';
import '@components/mypage/List.scss';
import axios from 'axios';
import EnTodoItemList from './EnTodoItemlist';
import EnCourseInputSave from './EnCourseInputSave';
// import EnCoursemap from '../Course/EnCoursemap';
import EnCoursemap from '@components/mypage/en/Course/EnCoursemap';
import EnLikelistscroll from './EnLikelistscroll';
import EnCoursemapRsp from '@components/mypage/en/Course/EnCoursemapRsp';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
  start: any;
}

const EnList: FC<Props> = (props: Props) => {
  const [text, setText] = useState('코스');
  var local = sessionStorage.getItem('memberid');

  return (
    <>
      <div className="coursetitle">Make your course!</div>

      <div className="makecourselist">
        <EnTodoItemList todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
      </div>
      <EnCourseInputSave todos={props.todos} onRemove={props.onRemove} placeid={props.start} />
      <div className="myplacemap_div">
        <div className="coursemap"  style={{ position: 'relative', width: '100%' }}>
          <EnCoursemap />
          <span className="likedlist" style={{ display: 'inline-block', position: 'absolute' }}>
            <EnLikelistscroll
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
          <EnCoursemapRsp />
          <div className="likedlist" style={{ display: 'inline-block' , position:'absolute'}}>
            <EnLikelistscroll placelist={props.placelist} todos={props.todos} onClick={props.onClick} ondeleteClick={props.ondeleteClick} onRemove={props.onRemove} start={props.start} />
          </div>
        </div>

      </div>
    </>
  );
};

export default EnList;