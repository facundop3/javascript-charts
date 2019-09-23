import React from "react";
import styled from "styled-components";

export const Box = styled.div`
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 1em;
  padding: 0.5em;
  height: ${(props: { height?: number }) =>
    props.height ? props.height + "px" : "auto !important"};
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = (props: { children: any }) => (
  <ModalContainer>
    <Box>{props.children}</Box>
  </ModalContainer>
);
