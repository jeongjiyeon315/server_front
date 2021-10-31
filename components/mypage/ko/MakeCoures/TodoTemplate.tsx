import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import List from './List';
interface Props {
  start: any;
}

const TodoTemplate: FC<Props> = (props: Props) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [placelist, setPlacelist] = useState([] as any);
  const [index, setIndex] = useState([] as any);
  const [todos, setTodos] = useState([] as any);
  const [id, setId] = useState();

  useEffect(() => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    var name = props.start.place_name;
    var location_x = props.start.x;
    var location_y = props.start.y;
    var address = props.start.address_name;
    var category = '출발지';
    var placeId = props.start.id;

    setTodos([]);
    setIndex([]);

    axios
      .post(
        process.env.REACT_APP_DB_HOST + `/api/myplace/addfromstart/${memberid}`,
        JSON.stringify({ name, category, location_x, location_y, address, placeId }),
        { headers },
      )
      .then((res) => {
        setTodos((prev: any) => [...prev, res.data.data]);
        setIndex((prev: any) => [...prev, res.data.data.id]);
        setId(res.data.data.id);
        console.log(res.data.data);
      })
      .catch((error) => {});
  }, [props.start]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/myplace/findall/${memberid}`)
      .then(async (response) => {
        setPlacelist(response.data.data);
      })
      .catch((error) => {});
  }, [props.start]);

  const onClick = (list: any) => {
    if (todos.length >= 10) {
      alert('코스는 10개를 넘을 수 없습니다!');
    } else {
      if (index.indexOf(list.id) === -1) {
        setTodos((prev: any) => [...prev, list]);
        setIndex((prev: any) => [...prev, list.id]);
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

  const onRemove = (id: number) => {
    setTodos(todos.filter((place: any) => place.id !== id));
    var idx = index.indexOf(id);
    index[idx] = 0;
  };

  return (
    <>
      {/*<div className="namelist" style={{ display: 'inline-block' }}>*/}
      <List
        placelist={placelist}
        todos={todos}
        onClick={onClick}
        ondeleteClick={ondeleteClick}
        onRemove={onRemove}
        start={id}
      />

      {/*</div>*/}
    </>
  );
};

export default TodoTemplate;
