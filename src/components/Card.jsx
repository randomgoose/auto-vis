import * as React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #e5e6eb;
  width: fit-content;
`;

const CardHeader = styled.div`
  padding: 16px 16px 0 16px;
  position: relative;
  font-size: 16px;
  font-weight: 600;

  /* &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background: #e5e6eb;
  } */
`;

const Title = styled.div``

const SubTitle = styled.div`
  font-size: 12px;
`

const CardBody = styled.div`
  background: white;
  padding: 16px;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CardFooter = styled.div``;

const Card = ({ title, children }) => {
  return (
    <StyledCard>
      {/* <CardHeader>{title}</CardHeader> */}
      <CardBody>{children}</CardBody>
      <CardFooter></CardFooter>
    </StyledCard>
  );
};

export default Card;
