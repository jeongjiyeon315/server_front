import React, { FC } from 'react';

interface Props {
  todos: any;
  id: any;
  onRemove: any;
}

const TodoItemList: FC<Props> = (props: Props) => {
  var imgsrc = './src/icon/star.png';
  return (
    <>
      <li className="courselist">{props.todos.name}</li>
      <button onClick={() => props.onRemove(props.id)}>
        <img src={imgsrc} width="30" />
      </button>
    </>
  );
};

export default TodoItemList;


//안써~~