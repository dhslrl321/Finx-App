import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../images/logo_01.png";
import Logo2 from "../../images/logo_02.png";
import {
  RootContainer,
  Text,
  TopLogo,
  TextLogo,
  BottomContainer,
  BottomLogo,
  NextIcon,
} from "./style";

const Entry = () => {
  return (
    <RootContainer>
      <div>
        <Text>똑똑한 지출</Text>
        <Text>편리한 관리</Text>
        <Text>금융을 분석하다</Text>
        <TopLogo src={Logo1} />
      </div>

      <BottomContainer>
        <BottomLogo src={Logo2} />
        <TextLogo>FinX</TextLogo>
      </BottomContainer>
      <Link to="/sign-in">
        <NextIcon />
      </Link>
    </RootContainer>
  );
};

export default Entry;
