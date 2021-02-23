import { useState } from "react";
import styled from "styled-components";

import { TodoActionButton } from "./TodoActionButton";

export const TodoItem = (props) => {
  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);

  const theme = {
    containerBackground: "#404050",
    checkboxBorder: "#505060",
    checkboxBackgroundNormal: "#454555",
    checkboxBackgroundHover: "#606070",
    // checkboxBackgroundNormal: "#404050",
    // checkboxBackgroundHover: "#454555",
    checkedboxBackgroundNormal: "#406050",
    checkedboxBackgroundHover: "#408040",
    normalTextColor: "#d0d0d0",
    hoverTextColor: "#90d0b0",
    checkedTextColor: "#50c050",
  };

  const ItemLabel = styled.p`
    color: ${hover
      ? theme.hoverTextColor
      : checked
      ? theme.checkedTextColor
      : theme.normalTextColor};
    margin-left: 10px;
    text-decoration: ${checked ? "line-through" : "none"};
    font-family: Fira Code, monospace;
    font-weight: 700;
  `;

  // border: 2px solid ${theme.checkboxBorder};
  // background-color: ${hover
  //   ? checked
  //     ? theme.checkedboxBackgroundHover
  //     : theme.checkboxBackgroundHover
  //   : checked
  //   ? theme.checkedboxBackgroundNormal
  //   : theme.checkboxBackgroundNormal};
  const CheckBox = styled.button`
    border: none;
    background-color: transparent;
  `;

  const TodoItemContainer = styled.div`
    padding: 5px;
  `;

  const ActionButtonContainer = styled.div`
    display: flex;
    padding: 5px;
  `;

  const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${checked
      ? theme.checkedboxBackgroundNormal
      : theme.containerBackground};
  `;

  return (
    <FlexContainer
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <TodoItemContainer>
        <CheckBox>
          <ItemLabel>{"  " + props.text}</ItemLabel>
        </CheckBox>
      </TodoItemContainer>
      <ActionButtonContainer>
        <TodoActionButton
          color="#e0e010"
          text={<span class="mdi mdi-pencil"></span>}
        />
        <TodoActionButton
          color="#e01010"
          text={<span class="mdi mdi-trash-can-outline"></span>}
        />
      </ActionButtonContainer>
    </FlexContainer>
  );
};
