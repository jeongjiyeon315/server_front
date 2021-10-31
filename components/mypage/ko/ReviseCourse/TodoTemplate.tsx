import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import TodoItemList from './TodoItemlist';
import TodoTitle from './TodoTitle';
import '@components/mypage/Revisecss.scss';
interface Props {
  courseid: number;
  coursename: string;
  setCourese: any;
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
      <div className="revisemyplace" style={{ display: 'inline-block' }}>
        {likedlist}
      </div>
      <TodoTitle>코스를 수정해 보아요!</TodoTitle>
      <TodoItemList
        todos={todos}
        onRemove={onRemove}
        courseid={props.courseid}
        coursename={props.coursename}
        setCourese={props.setCourese}
      />
    </>
  );
};

export default TodoTemplate;
