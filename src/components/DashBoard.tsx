import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div<{ isDashboardOn: boolean }>`
  height: 100%;
  background-color: #333333;
  width: ${props => {
    return props.isDashboardOn === false ? "0%" : "35%";
  }};
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s ease-in-out;
`;

const Dashboard =props => {
  return <Wrapper isDashboardOn={props.isDashboardOn}></Wrapper>;
};

Dashboard.prototype = {
  isDashboardOn: PropTypes.bool,
};

export default Dashboard;
