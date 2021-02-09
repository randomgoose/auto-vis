import * as React from "react";
import styled from "styled-components";

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
  subTitle?: React.ReactNode;
}

const StyledCard = styled.div`
  border: 1px solid #e5e6eb;
  width: fit-content;
`;

const CardHeader = styled.div`
  padding: 16px 16px 0 16px;
  position: relative;
  font-size: 16px;
`;

const Title = styled.div``;
const SubTitle = styled.div`
  color: lightgray;
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

const Card = ({ title, children, subTitle }: Props) => {
  return (
    <StyledCard>
      <CardHeader>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter></CardFooter>
    </StyledCard>
  );
};

export default Card;
