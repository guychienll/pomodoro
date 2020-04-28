import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #414141;
  color: #fcfcfc;
  min-width: 220px;
  border-bottom: 1px solid #333333;
  :hover {
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  width: 90%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
const List = (props: {
  headerIcon: JSX.Element;
  title: JSX.Element;
  actionBtn: JSX.Element;
  handleTaskOnClick: any;
  primaryKey: number;
}) => {
  return (
    <Wrapper
      onClick={() => {
        props.handleTaskOnClick(props.primaryKey);
      }}
    >
      <Left>
        {props.headerIcon}
        {props.title}
      </Left>
      <Right>{props.actionBtn}</Right>
    </Wrapper>
  );
};

export default List;
