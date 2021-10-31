import axios from 'axios';
import React, { FC, useState } from 'react';
import '@components/mypage/List.scss';

interface Props {
  todos: any;
  onRemove: any;
  placeid: any;
}

const EnCourseInputSave: FC<Props> = (props: Props) => {
  const [text, setText] = useState('course');
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
        .post(process.env.REACT_APP_DB_HOST + `/api/en/course/add/${memberid}`, JSON.stringify({ name, myplaceList }), {
          headers,
        })
        .then(() => {})
        .catch((error) => {});

      alert('Successfully saved!');

      location.reload();
    } else {
      alert('Please add the place on your course!');
    }
  };

  return (
    <>
      <div className="courseinputsave">
        <form className="inputForm">
          <span id="inputsave_text">Save your course!</span>
          <input onChange={onChange} className="save_input" placeholder="Make your course name" />
          <button onClick={onClick} className="save_button" type="submit">
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default EnCourseInputSave;
