import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding: 14px;
  position: absolute;
  z-index: 1;
`;

export const AnalysisButton = styled.button`
  background: inherit;
  width: 90%;
  height: 70px;
  position: absolute;
  border: none;
  z-index: 2;
`;
export const FindFixText = styled.span`
  font-size: 18px;
  color: #535353;
  position: absolute;
  z-index: 3;
  left: 16px;
  top: 10px;
`;

export const InspectText = styled.span`
  position: absolute;
  z-index: 3;
  color: #8b8b8b;
  left: 16px;
  top: 43px;
`;
