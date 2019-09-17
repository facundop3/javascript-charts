import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  ${(props: { isResizable: boolean }) =>
    props.isResizable &&
    `resize: both;
     overflow: auto;`}

  min-width: 400px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  /* border: solid 1px red; */

  &::-webkit-resizer {
    background-color: transparent;
  }
`;

const ResizableContainer = () => {
  const [isResizable, setIsResizable] = useState(false);
  const toggleRezise = () => {
    setIsResizable(true);
    setTimeout(() => {
      setIsResizable(false);
    }, 2000);
  };

  return (
    <Container
      onClick={toggleRezise}
      draggable={true}
      isResizable={isResizable}
    >
      {" "}
      jejej{" "}
    </Container>
  );
};

export default ResizableContainer;
