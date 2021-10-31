import React, { FC, useState } from 'react';
import '@components/mypage/Coursemap.css'
import TodoTemplate from '@components/mypage/ko/MakeCoures/TodoTemplate';
interface Props {
  start: any;
  startplacename: string;
}

const MakeCourse: FC<Props> = (props: Props) => {
  const [exist, setExist] = useState(false);

  const onClick = () => {
    setExist(true);
  };

  return (
    <>
      <div className="setstartbtn_div">
        <button onClick={onClick} className="setstartbtn">
          &lt;{props.startplacename}&gt;에서 출발하기
        </button>
      </div>
      {exist && (
        <>
          <div className="makecourse_div">
            <TodoTemplate start={props.start} />
          </div>
        </>
      )}
    </>
  );
};

export default MakeCourse;
