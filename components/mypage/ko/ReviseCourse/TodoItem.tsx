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
      <li>{props.todos.name}</li>
      <button onClick={() => props.onRemove(props.id)}>
        <img src={imgsrc} width="30" />
      </button>
    </>
  );
};

export default TodoItemList;
