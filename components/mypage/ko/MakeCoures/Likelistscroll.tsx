import React, { FC } from 'react';
import '@components/mypage/List.scss';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
}

const Likelistscroll: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="Likelistname">마이플레이스 목록</div>
      {props.placelist.map((v: string, index: number) => (
        <div className="mypagelist">
        <button className="listbtn" onClick={() => props.onClick(props.placelist[index])}>
          <img className="add" src="/src/icon/more.png" />
        </button>
        <span className="likedplacename" onClick={() => props.onClick(props.placelist[index])}>
          {props.placelist[index].name}
        </span>
        <button className="listbtn" onClick={() => props.ondeleteClick(props.placelist[index])}>
          <img className="trash" src="/src/icon/trash.png" />
        </button>
      </div>
        ))}
    </>
  );
};

export default Likelistscroll;
