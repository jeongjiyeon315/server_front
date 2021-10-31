import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import EnTodoItem from './EnTodoItem';
interface Props {
  todos: any;
  onRemove: any;
  courseid: any;
  coursename: any;
  setCourese: any;
}

const EnTodoItemList: FC<Props> = (props: Props) => {
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
          process.env.REACT_APP_DB_HOST + `/api/en/course/update/${memberid}/${props.courseid}`,
          JSON.stringify({ name, myplaceList }),
          { headers },
        )
        .then(() => {
          alert('The course has been modified!');
          axios
            .get(process.env.REACT_APP_DB_HOST + `/api/en/course/findall/${memberid}`)
            .then(async (response) => {
              props.setCourese(response.data.data);
            })
            .catch((error) => {});
        })
        .catch((error) => {});
    } else {
      alert('Please put the location on the course!');
    }
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>Fix it</button>
      {props.todos.map((todo: any) => (
        <EnTodoItem todos={todo} id={todo.id} onRemove={props.onRemove} />
      ))}
    </>
  );
};

export default EnTodoItemList;
