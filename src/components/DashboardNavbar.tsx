import React from "react";
import styled from "styled-components";
import ListUntoggledIcon from "../assets/icons/list_white.svg";
import AddUntoggledIcon from "../assets/icons/add_white.svg";
import RingtoneUntoggledIcon from "../assets/icons/ringtone_white.svg";
import AnalysisUntoggledIcon from "../assets/icons/analysis_white.svg";
import ListToggledIcon from "../assets/icons/list_red.svg";
import AddToggledIcon from "../assets/icons/add_red.svg";
import RingtoneToggledIcon from "../assets/icons/ringtone_red.svg";
import AnalysisToggledIcon from "../assets/icons/analysis_red.svg";
import TomatoColorfulIcon from "../assets/icons/tomato_small_color.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import PropTypes from "prop-types";
const Wrapper: any = styled.div<{ isDashboardOn: boolean }>`
  width: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #333333;
  border-right: ${props => {
    return props.isDashboardOn === true ? "1px solid #555555" : null;
  }};
  position: absolute;
  top: 0;
  right: ${props => {
    return props.isDashboardOn === false ? "0%" : "35%";
  }};
  transition: 0.3s ease-in-out;
`;

const Toggle: any = styled.div<{ toggledSrc: string; untoggledSrc: string }>`
  background-image: ${props => `url(${props.untoggledSrc})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 80px;
  :hover {
    background-image: ${props => `url(${props.toggledSrc})`};
    cursor: pointer;
  }
`;

const Tag = styled.div<{ tomato: string; arrow: string; isDashboardOn: boolean }>`
  position: absolute;
  bottom: 50px;
  right: 45px;
  width: 90px;
  height: 50px;
  border-radius: 25px 5px 5px 25px;
  background-color: #fcfcfc;
  display: flex;
  :hover {
    cursor: pointer;
  }
  .tomato {
    width: 45px;
    height: 100%;
    background-image: ${props => `url(${props.tomato})`};
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
  }
  .arrow {
    width: 45px;
    height: 100%;
    background-image: ${props => `url(${props.arrow})`};
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    transition: transform 0.5s;
    transform: ${props => {
      return props.isDashboardOn === true ? "rotate(0deg)" : "rotate(-180deg)";
    }};
  }
`;

const DashboardNavbar =props => {
  return (
    <Wrapper isDashboardOn={props.isDashboardOn}>
      {toggles.map((toggle, index) => {
        return (
          <Toggle
            key={index}
            onClick={e => {
              if (props.isDashboardOn === true) {
                return; // TODO: should change content or do nothing.
              }
              props.dashboardToggleHandler(e, !props.isDashboardOn);
            }}
            toggledSrc={toggle.toggledSrc}
            untoggledSrc={toggle.untoggledSrc}
          />
        );
      })}
      <Tag
        isDashboardOn={props.isDashboardOn}
        onClick={e => {
          props.dashboardToggleHandler(e, !props.isDashboardOn);
        }}
        tomato={TomatoColorfulIcon}
        arrow={ArrowIcon}
      >
        <div className="tomato" />
        <div className="arrow" />
      </Tag>
    </Wrapper>
  );
};
DashboardNavbar.prototype = {
  dashboardToggleHandler: PropTypes.func,
  isDashboardOn: PropTypes.bool,
};

export default DashboardNavbar;

const toggles: any = [
  {
    toggleName: "List",
    toggledSrc: ListToggledIcon,
    untoggledSrc: ListUntoggledIcon,
  },
  {
    toggleName: "Add",
    toggledSrc: AddToggledIcon,
    untoggledSrc: AddUntoggledIcon,
  },
  {
    toggleName: "Analysis",
    toggledSrc: AnalysisToggledIcon,
    untoggledSrc: AnalysisUntoggledIcon,
  },
  {
    toggleName: "Ringtone",
    toggledSrc: RingtoneToggledIcon,
    untoggledSrc: RingtoneUntoggledIcon,
  },
];
