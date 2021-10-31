import React, { FC } from 'react';
import '@components/mypage/List.scss';

interface Props {
  placelist: any;
  todos: any;
  onClick: any;
  ondeleteClick: any;
  onRemove: any;
  start: any;
}

const EnLikelistscroll: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="Likelistname">My Place list</div>
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

export default EnLikelistscroll;
