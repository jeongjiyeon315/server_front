import React, { FC } from 'react';
import Main from './Main';
interface Props {
  start: any;
}

const Likedlist: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="Likedlist">
        <div>[하트 누른 장소들 목록]</div>
        <Main start={props.start} />
      </div>
    </>
  );
};

export default Likedlist;
