import React from "react";
import PropType from "prop-types";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const StyledStatistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  margin: 0;
  color: lightgray;
  margin-bottom: 4px;
  font-size: 14px;
`;

const Data = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 12px;
  margin-left: 4px;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Unit = styled.span`
  font-size: 12px;
  align-self: flex-end;
  margin-left: 4px;
  transform: translateY(-4px);
`;

const Trend = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: green;
`

export default function Statistic({ title, data, trend, unit }) {
  const dataRef = React.useRef(null);

  return (
    <StyledStatistic className={"Statistic"}>
      <Title>{title}</Title>
      <Trend>
        Falling (23%)
          <Icon>
          <FaArrowRight />
        </Icon>
      </Trend>
      <Data>
        {data}
        <Unit>times</Unit>
      </Data>
    </StyledStatistic>
  );
}

Statistic.propType = {
  title: PropType.string,
  data: PropType.number
};
