import axios from 'axios';
import React, { FC, useState } from 'react';
import TodoItem from './TodoItem';
import '@components/mypage/List.scss';

interface Props {
  todos: any;
  onRemove: any;
  placeid: any;
}

const CourseInputSave: FC<Props> = (props: Props) => {
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
      <div className="courseinputsave">
        <form className="inputForm">
          <span id="inputsave_text">내 코스로 저장해보세요!</span>
          <input onChange={onChange} className="save_input" placeholder="코스 이름을 지어주세요" />
          <button onClick={onClick} className="save_button" type="submit">
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default CourseInputSave;
