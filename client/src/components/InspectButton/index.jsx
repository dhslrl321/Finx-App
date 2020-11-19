import React from "react";
import Analysis from "../../images/analysis.png";
import {
  ButtonContainer,
  Img,
  AnalysisButton,
  FindFixText,
  InspectText,
} from "./style";
const InspectButton = ({ handleInspectOnClick }) => {
  return (
    <ButtonContainer onClick={handleInspectOnClick}>
      <Img src={Analysis} />
      <AnalysisButton>
        <FindFixText>핀스만의 고정 지출 찾기</FindFixText>
        <InspectText>검사하기</InspectText>
      </AnalysisButton>
    </ButtonContainer>
  );
};

export default InspectButton;
