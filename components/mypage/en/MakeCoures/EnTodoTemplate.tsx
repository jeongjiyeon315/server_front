import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import EnList from '@components/mypage/en/MakeCoures/EnList';
interface Props {
  start: any;
}

const EnTodoTemplate: FC<Props> = (props: Props) => {
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
    var name = props.start.name;
    var location_x = props.start.location_x;
    var location_y = props.start.location_y;
    var address = '';
    var category = 'start';
    var placeId = props.start.id;

    setTodos([]);
    setIndex([]);

    axios
      .post(
        process.env.REACT_APP_DB_HOST + `/api/en/myplace/addfromstart/${memberid}`,
        JSON.stringify({ name, category, location_x, location_y, address, placeId }),
        { headers },
      )
      .then((res) => {
        setTodos((prev: any) => [...prev, res.data.data]);
        setIndex((prev: any) => [...prev, res.data.data.id]);
        setId(res.data.data.id);
      })
      .catch((error) => {});
  }, [props.start]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/en/myplace/findall/${memberid}`)
      .then(async (response) => {
        setPlacelist(response.data.data);
      })
      .catch((error) => {});
  }, [props.start]);

  const onClick = (list: any) => {
    if (todos.length >= 10) {
      alert('You can only save up to ten');
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
      .delete(process.env.REACT_APP_DB_HOST + `/api/en/myplace/deletebymyplace/${memberid}/${myplaceid}`)
      .catch((error) => {});
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((place: any) => place.id !== id));
    var idx = index.indexOf(id);
    index[idx] = 0;
  };

  return (
    <>
      <EnList
        placelist={placelist}
        todos={todos}
        onClick={onClick}
        ondeleteClick={ondeleteClick}
        onRemove={onRemove}
        start={id}
      />
    </>
  );
};

export default EnTodoTemplate;
