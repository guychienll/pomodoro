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

const Wrapper: any = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const DashBoard = () => {
  return (
    <Wrapper>
      {toggles.map((toggle, index) => {
        return (
          <Toggle
            key={index}
            toggledSrc={toggle.toggledSrc}
            untoggledSrc={toggle.untoggledSrc}
          />
        );
      })}
    </Wrapper>
  );
};

export default DashBoard;

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
