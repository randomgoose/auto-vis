import React from "react";
import PropType from "prop-types";
import styled from "styled-components";
import { FaCaretUp } from "react-icons/fa";

const StyledStatistic = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
`;

const Title = styled.div`
  margin: 0;
  color: lightgray;
  margin-bottom: 8px;
  font-size: 14px;
`;

const Data = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 16px;
  margin-left: 4px;
  color: red;
`;

const Unit = styled.span`
  font-size: 12px;
  align-self: flex-end;
  margin-left: 4px;
  transform: translateY(-4px);
`;

export default function Statistic({ title, data }) {
  const dataRef = React.useRef(null);

  return (
    <StyledStatistic className={"Statistic"}>
      <Title>{title}</Title>
      <Data>
        {data}
        <Unit>times</Unit>
        <Icon>
          <FaCaretUp />
        </Icon>
      </Data>
    </StyledStatistic>
  );
}

Statistic.propType = {
  title: PropType.string,
  data: PropType.number
};
