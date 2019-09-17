import React from "react";
import styled from "styled-components";

interface SlideContainerProps {
  odd: boolean;
}
const SlideContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: SlideContainerProps) =>
    props.odd ? "#282c34;" : "#FFF"};
  color: ${(props: SlideContainerProps) => (props.odd ? "#FFF;" : "#000")};
`;

export const Slide = (props: { children: React.ReactChild; odd: boolean }) => (
  <SlideContainer odd={props.odd}>
    <div>{props.children}</div>
  </SlideContainer>
);
