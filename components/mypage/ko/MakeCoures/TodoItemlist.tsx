import React, { FC, useState } from 'react';
interface Props {
  todos: any;
  onRemove: any;
  placeid: any;
}

const TodoItemList: FC<Props> = (props: Props) => {

  var imgsrc = './src/icon/x-mark.png';

  return (
    <>
      <ul className="courselist_ul">
        {props.todos.map((todo: any, i:number) => (
          <>
            { i===0 ?
              <li className="courselist">
                {todo.name}
                <button className="xmark_button" onClick={() => props.onRemove(todo.id)}>
                  <img className="xmarkimg" src={imgsrc} width="15" />
                </button>
              </li>
              :
              <li className="courselist">
                &nbsp;➜ {todo.name}
                <button className="xmark_button" onClick={() => props.onRemove(todo.id)}>
                  <img className="xmarkimg" src={imgsrc} width="15" />
                </button>
              </li>
            }
          </>
        ))}
      </ul>
    </>
  );
};

export default TodoItemList;
