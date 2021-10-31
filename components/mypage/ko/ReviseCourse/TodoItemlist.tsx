import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
interface Props {
  todos: any;
  onRemove: any;
  courseid: any;
  coursename: any;
  setCourese: any;
}

const TodoItemList: FC<Props> = (props: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(props.coursename);
  }, [props.courseid]);

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
        .put(
          process.env.REACT_APP_DB_HOST + `/api/course/update/${memberid}/${props.courseid}`,
          JSON.stringify({ name, myplaceList }),
          { headers },
        )
        .then(() => {
          alert('코스가 수정되었습니다!');
          axios
            .get(process.env.REACT_APP_DB_HOST + `/api/course/findall/${memberid}`)
            .then(async (response) => {
              props.setCourese(response.data.data);
            })
            .catch((error) => {});
        })
        .catch((error) => {});
    } else {
      alert('코스에 장소를 담아주세요!');
    }
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>수정하기</button>
      {props.todos.map((todo: any) => (
        <TodoItem todos={todo} id={todo.id} onRemove={props.onRemove} />
      ))}
    </>
  );
};

export default TodoItemList;
