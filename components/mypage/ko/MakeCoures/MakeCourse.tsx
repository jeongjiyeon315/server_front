import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Coursemap from '@components/mypage/ko/Course/Coursemap';
import CoursemapRsp from '@components/mypage/ko/Course/CoursemapRsp';
import '@components/mypage/Coursemap.css'
import TodoTemplate from '@components/mypage/ko/MakeCoures/TodoTemplate';
import None from '@components/mypage/ko/MakeCoures/None';
interface Props {
  start: any;
  startplacename : string;
}

const MakeCourse: FC<Props> = (props: Props) => {
  const [exist, setExist] = useState(false);

  const onClick = () => {
    setExist(true);
  };

  return (
    <>
      <div className="setstartbtn_div">
        <button onClick={onClick} className="setstartbtn"> &lt;{props.startplacename}&gt;에서 출발하기</button>
      </div>
      {exist && (
        <>
          <div className="makecourse_div">
            <TodoTemplate start={props.start} />
          </div>
          <div className="coursemap" style={{position:'relative'}}>
          </div>
        </>
      ) }
    </>
  );
};

export default MakeCourse;
