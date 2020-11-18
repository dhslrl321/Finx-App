import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const RootContainer = styled.div`
  background: linear-gradient( 135deg, #9CC3FA 1%, #0b03fc 99%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopLogo = styled.img`
  width: 100px;
  margin-top: 15px;
  margin-left: 100px;
`;

export const Text = styled.div`
  font-size: 30px;
  color: white;
  font-weight: none;
  padding: 4px;
  :nth-child(3) {
    font-weight: bolder;
  }
`;

export const BottomLogo = styled.img`
  width: 22%;
`;

export const TextLogo = styled.div`
  font-size: 190%;
  font-weight: bold;
  padding-left: 4px;
  color: white;
`;

export const BottomContainer = styled.div`
  padding-top: 64%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const NextIcon = styled(MdKeyboardArrowRight)`
  margin-left: 250px;
  font-size: 30px;
  color: white;
`;