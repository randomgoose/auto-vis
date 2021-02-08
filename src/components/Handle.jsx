import React from "react";
import styled from "styled-components";

const StyledHandle = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: crosshair;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: black;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: black;
  }
`;

export default function Handle() {
  return <StyledHandle />;
}
