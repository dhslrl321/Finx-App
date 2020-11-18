import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import analysis from "../../image/analysis.png";
import { bankingApi } from "../../util/api";
import Logo from "../../image/logo_02.png";
import styled from "styled-components";
import axios from "axios";
import {
  CardContainer,
  CardContainerColumn,
  Title,
  ButtonContainer,
  Img,
  FindFixText,
  InspectText,
  InfoButton,
  AnalysisButton,
  ModalBox,
  ModalImage,
  OverlapBackground,
} from "./style";

const BankCard = ({ account }) => {
  return (
    <CardContainer className="card-container">
      <CardContainerColumn>
        <div className="name">{account.name}</div>
        <div className="balance">총 잔고: {account.balance} 원</div>
      </CardContainerColumn>
      <CardContainerColumn>
        <div className="number">{account.number}</div>
      </CardContainerColumn>
      <CardContainerColumn>
        <div className="expected">예상 잔고: {account.expected} 원</div>
      </CardContainerColumn>
      <CardContainerColumn>
        <Link to={`account/${account.id}`}>
          <InfoButton>자세히 보기</InfoButton>
        </Link>
      </CardContainerColumn>
    </CardContainer>
  );
};

const MyModal = ({ handleDisableOnClick }) => {
  return (
    <>
      <OverlapBackground />
      <ModalBox onClick={handleDisableOnClick}>
        <div className="text">분석중입니다...</div>
        <div className="text">잠시만 기다려주세요!</div>
        <div className="logo">
          <ModalImage src={Logo} />
          <span>Finx</span>
        </div>
      </ModalBox>
    </>
  );
};

const PushMessage = styled.div`
  background: #bacbf3;
  width: 100%;
  height: 90px;
  border: 1px solid;
  position: absolute;
  text-align: left;
  font-size: 12px;
  padding-left: 70px;
  padding-top: 10px;
  .text {
    font-weight: bold;
    font-size: 13px;
  }
  button {
    border: 1px solid #3a56bf;
    border-radius: 5px;
    color: #3a56bf;
    margin-top: 5px;
    margin-left: 20px;
    :first-child {
      margin-left: 70px;
    }
  }
  transition: transform 0.5s easy-in-out;
`;

const MyPush = ({ enrollYes }) => {
  return (
    <>
      <PushMessage>
        핀스의 계좌 분석 결과 1건의 고정 지출을 확인했습니다!
        <div className="text">[유튜브 프리미엄] 14,900원</div>
        계속해서 구독할 계획이면 확인을 눌러주세요
        <div className="text">확인을 누르시면 고정 지출에 등록됩니다.</div>
        <div>
          <button>취소</button>
          <button onClick={enrollYes}>확인</button>
        </div>
      </PushMessage>
    </>
  );
};

const Account = () => {
  const [modalState, setModalState] = useState(false);
  const [pushState, setPushState] = useState(false);
  const [accountDatas, setAccountDatas] = useState([
    {
      id: 1,
      useNum: "199166708057887772866157",
      name: "NH농협은행",
      balance: "1,450,500",
      expected: "1,450,500",
      number: "199166708057887772866157",
    },
    {
      id: 2,
      useNum: "199166708057887772847303",
      name: "신한은행",
      balance: "50,000",
      expected: "40,000",
      number: "19916670805788777284730",
    },
  ]);

  useEffect(async () => {
    try {
      // 다른 계좌 상세 API 조회 해서 총 잔고랑 예상 잔고 줘야 함
      //const data = await bankingApi.postBalance(window.sessionStorage.getItem("token"));
      const nhData = await bankingApi.postBalance1(
        window.sessionStorage.getItem("token")
      );
      const shinhanData = await bankingApi.postBalance1(
        window.sessionStorage.getItem("token")
      );
      console.log(nhData);
      console.log(shinhanData);

      // user_name
      // res_list(객체 배열): fintech_use_num(계좌 번호),bank_name(은행 이름)
    } catch {
      console.log("통신 실패");
    }
  }, []);

  const toggleModal = () => {
    setModalState(!modalState);
  };
  const togglePush = () => {
    setPushState(!pushState);
  };

  const handleInspectOnClick = () => {
    toggleModal();
  };

  const handleDisableOnClick = () => {
    toggleModal();
    togglePush();
  };

  const enrollYes = () => {
    togglePush();
    setAccountDatas(
      accountDatas.map((account) =>
        account.id === 1
          ? { ...account, balance: "1,445,500", expected: "1,238,920" }
          : account
      )
    );
  };

  const modal = modalState ? (
    <MyModal handleDisableOnClick={handleDisableOnClick} />
  ) : null;
  const push = pushState ? <MyPush enrollYes={enrollYes} /> : null;
  return (
    <>
      {push}
      <Title>김핀스님의 계좌 내역</Title>
      <div>
        {accountDatas.map((account, index) => (
          <BankCard key={index} account={account} />
        ))}
      </div>
      <ButtonContainer>
        <Img src={analysis} />
        <AnalysisButton onClick={handleInspectOnClick}>
          {modal}
          <FindFixText>핀스만의 고정 지출 찾기</FindFixText>
          <InspectText>검사하기</InspectText>
        </AnalysisButton>
      </ButtonContainer>
    </>
  );
};

export default Account;
