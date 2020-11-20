import React, { useState } from "react";
import {
  HomeContainer,
  Title,
  ModalContainer,
  Modal,
  LogoImage,
  LogoText,
  ImageWrapper,
  ModalText,
} from "./style";
import Logo from "../../images/logo_02.png";
import AccountBox from "../../components/AccountBox";
import InspectButton from "../../components/InspectButton";
const Home = () => {
  const [accountDatas, setAccountDatas] = useState([
    {
      id: 1,
      fin: "199166708057887772866157",
      name: "NH농협은행",
      balance: "1,450,500",
      expected: "1,450,500",
      number: "199166708057887772866157",
    },
    {
      id: 2,
      fin: "199166708057887772847303",
      name: "신한은행",
      balance: "50,000",
      expected: "40,000",
      number: "19916670805788777284730",
    },
    {
      id: 3,
      fin: "199166708057887772847303",
      name: "신한은행",
      balance: "50,000",
      expected: "40,000",
      number: "19916670805788777284730",
    },
  ]);

  const handleInspectOnClick = () => {
    setToggle(!toggle);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <HomeContainer>
      <Title>김핀스 님의 계좌 내역</Title>

      <ModalContainer temp={toggle}>
        <Modal>
          <ModalText>분석중입니다...</ModalText>
          <ModalText>잠시만 기다려주세요!</ModalText>
          <ImageWrapper onClick={handleInspectOnClick}>
            <LogoImage src={Logo} />
            <LogoText>FinX</LogoText>
          </ImageWrapper>
        </Modal>
      </ModalContainer>

      {accountDatas.map((account) => (
        <AccountBox key={account.id} account={account} />
      ))}
      <InspectButton handleInspectOnClick={handleInspectOnClick} />
    </HomeContainer>
  );
};

export default Home;
