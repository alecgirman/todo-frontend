import { useState } from "react";
import styled from "styled-components";

export const TodoActionButton = (props) => {
  const [hover, setHover] = useState(false);

  // background-color: ${hover ? props.hoverColor : "transparent"};
  const ActionButton = styled.button`
    border: 2px solid ${props.color};
    border-radius: 5px;
    margin: 5px;
    clear: both;
    background-color: ${hover ? props.color + "20" : "transparent"};
    color: ${hover ? props.color : "#d0d0d0"};
  `;

  return (
    <ActionButton
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {props.text}
    </ActionButton>
  );
};
