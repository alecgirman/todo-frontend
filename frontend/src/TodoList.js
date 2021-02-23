import React, { useState } from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const TodoContainer = styled.div`
    margin: 1%;
    justify-content: center;
    font-family: "Fira Code", monospace;
  `;

  return (
    <TodoContainer>
      <TodoItem text="Test item 0" />
      <TodoItem text="Test item 1" />
      <TodoItem text="Test item 2" />
      <TodoItem text="Test item 3" />
      <TodoItem text="very long text item (testing css)" />
    </TodoContainer>
  );
};

export default TodoList;
