import * as React from "react";
import styled from "styled-components";

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const StyledCard = styled.div`
  border: 1px solid #e5e6eb;
  width: fit-content;
`;

const CardHeader = styled.div`
  padding: 8px 16px;
  position: relative;
  text-align: center;
  font-size: 20px;
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
const CardBody = styled.div`
  background: white;
  padding: 16px;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CardFooter = styled.div``;

const Card = ({ title, children }: Props) => {
  return (
    <StyledCard>
      <CardHeader>{title}</CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter></CardFooter>
    </StyledCard>
  );
};

export default Card;
