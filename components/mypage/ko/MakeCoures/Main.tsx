import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodoTemplate';
interface Props {
  start: any;
}

const Main: FC<Props> = (props: Props) => {
  return (
    <>
      <TodoTemplate start={props.start} />
    </>
  );
};
export default Main;
