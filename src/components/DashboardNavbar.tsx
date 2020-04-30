import React from "react";
import styled from "styled-components";
import TomatoColorfulIcon from "../assets/icons/tomato_small_color.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import { dashboardNavBarProps } from "../typeAlias/dashboardNavBarProps";
import { enumDashboardToggleType } from "../enum/enumDashboardToggleType";

const Wrapper: any = styled.div<{ isDashboardOn: boolean }>`
  min-width: 80px;
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
const Toggle: any = styled.button<{ imgSrc: string }>`
  background-image: ${props => `url(${props.imgSrc})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 80px;
  :hover {
    background-image: ${props => `url(${props.imgSrc})`};
    cursor: pointer;
  }
`;
const Tag: any = styled.button<{ tomato: string; arrow: string; isDashboardOn: boolean }>`
  position: absolute;
  bottom: 50px;
  right: 45px;
  width: 90px;
  height: 50px;
  border-radius: 25px 5px 5px 25px;
  background-color: #fcfcfc;
  display: flex;
  .tomato {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 45px;
    height: 100%;
    background-image: ${props => `url(${props.tomato})`};
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
  }
  .arrow {
    position: absolute;
    top: 0px;
    right: 0px;
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

const DashboardNavbar: (props: dashboardNavBarProps) => JSX.Element =props => {
  const { isDashboardOn, dashboards, handleDashboardToggleOnClick } = props;
  return (
    <Wrapper isDashboardOn={isDashboardOn}>
      {dashboards.map(dashboard => {
        return (
          <Toggle
            name={enumDashboardToggleType.NavButton}
            key={dashboard.type}
            onClick={(e: any) => {
              handleDashboardToggleOnClick(e, dashboard.type);
            }}
            imgSrc={dashboard.status ? dashboard.toggledSrc : dashboard.untoggledSrc}
          />
        );
      })}
      <Tag
        isDashboardOn={isDashboardOn}
        name={enumDashboardToggleType.Tag.toString()}
        tomato={TomatoColorfulIcon}
        arrow={ArrowIcon}
        onClick={(e: any) => {
          handleDashboardToggleOnClick(e);
        }}
      >
        <button
          className="tomato"
          name={enumDashboardToggleType.Tag.toString()}
          onClick={(e: any) => {
            handleDashboardToggleOnClick(e);
          }}
        />
        <button
          className="arrow"
          name={enumDashboardToggleType.Tag.toString()}
          onClick={(e: any) => {
            handleDashboardToggleOnClick(e);
          }}
        />
      </Tag>
    </Wrapper>
  );
};

export default DashboardNavbar;
