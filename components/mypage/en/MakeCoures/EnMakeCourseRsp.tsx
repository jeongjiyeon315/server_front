import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import '@components/mypage/Coursemap.css';
import EnCoursemapRsp from '../Course/EnCoursemapRsp';
interface Props {
  start: any;
  startplacename: string;
}

const EnMakeCourseRsp: FC<Props> = (props: Props) => {
  const [exist, setExist] = useState(false);

  const onClick = () => {
    setExist(true);
  };

  return (
    <>
      <button onClick={onClick} className="setstartbtn">
        "{props.startplacename}"에서 출발하기
      </button>
      {exist && (
        <>
          <div className="coursemap_responsive" style={{ position: 'relative' }}>
            <EnCoursemapRsp />
          </div>
        </>
      )}
    </>
  );
};

export default EnMakeCourseRsp;
