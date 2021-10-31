import React, { FC, useState } from 'react';
import '@components/mypage/Coursemap.css';
import EnTodoTemplate from './EnTodoTemplate';
import EnNone from '@components/mypage/en/MakeCoures/EnNone';
interface Props {
  start: any;
  startplacename: string;
}

const EnMakeCourse: FC<Props> = (props: Props) => {
  const [exist, setExist] = useState(false);

  const onClick = () => {
    setExist(true);
  };

  return (
    <>
      <div className="setstartbtn_div">
        <button onClick={onClick} className="setstartbtn">
          Depart from &lt;{props.startplacename}&gt;
        </button>
      </div>
      {exist && (
        <>
          <div className="makecourse_div">
            <EnTodoTemplate start={props.start} />
          </div>
          <div className="coursemap" style={{ position: 'relative' }}></div>
        </>
      )}
    </>
  );
};

export default EnMakeCourse;
