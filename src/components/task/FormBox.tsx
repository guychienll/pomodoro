import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: Lato;
  margin-top: 25px;
  .form-title {
    color: #acacac;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #fcfcfc;
    outline: none;
    font-size: 19px;
    color: #333333;
    padding-left: 10px;
  }
`;

const FormBox: (props: any) => JSX.Element =props => {
  return (
    <Wrapper>
      <div className="form-title">{props.title}</div>
      {props.children}
    </Wrapper>
  );
};

FormBox.prototype = {
  title: PropTypes.string,
};

export default FormBox;
