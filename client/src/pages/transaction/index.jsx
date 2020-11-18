import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { bankingApi } from "../../util/api";
import { useTokenData } from "../../util/context";
import styled from "styled-components";
import {
  AllTransactionContainer, ATStatus, ATContent, AccountNumber,
  AccountTitle, accountData, FixTransactionContainer
} from "./style";
import { MdAccountBalance, MdCheckBox } from 'react-icons/md';

export const FixTransactionDummyData = [
  { id: 0, content: "넷플릭스 정기 구독", money: 14500, payment_date: "2020-10-26", account_id: 1 },
  { id: 0, content: "월세", money: 400000, payment_date: "2020-10-26", account_id: 1 },
  { id: 0, content: "후불 교통 카드", money: 114500, payment_date: "2020-10-26", account_id: 1 },
  { id: 0, content: "멜론 뮤직", money: 6500, payment_date: "2020-10-26", account_id: 1 },
  { id: 0, content: "유튜브 프리미엄", money: 14500, payment_date: "2020-10-26", account_id: 1 },
]

export const AllTransactionDummyData = [
  { id: 0, content: "비바퍼블리카", money: 9500, payment_date: "2020-10-26", account_id: 1, status: false },
  { id: 1, content: "CU 편의점 사당점", money: 500, payment_date: "2020-10-26", account_id: 1, status: false },
  { id: 2, content: "인생네컷", money: 19500, payment_date: "2020-10-26", account_id: 1, status: false },
  { id: 3, content: "비바퍼블리카", money: 239500, payment_date: "2020-10-26", account_id: 1, status: true },
  { id: 4, content: "GS 편의점", money: 900, payment_date: "2020-10-26", account_id: 1, status: false },
  { id: 5, content: "우아한형제들", money: 95200, payment_date: "2020-10-26", account_id: 1, status: false },
  { id: 6, content: "비바퍼블리카", money: 19500, payment_date: "2020-10-26", account_id: 1, status: true },
  { id: 7, content: "카카오 페이", money: 9500, payment_date: "2020-10-26", account_id: 1, status: true },
  { id: 8, content: "돈까스", money: 19500, payment_date: "2020-10-26", account_id: 1, status: false },

]

const Circle = styled.div`
  width: 30px;
  height: 30px;
`;

const FixColumn = ({ content, money }) => {
  return (
    <div>
      <MdCheckBox /> {content} {money}
    </div>
  );
}

const FixTransaction = ({ transaction }) => {
  return (
    <>
      <FixColumn content={transaction.content} money={transaction.money} />
    </>
  );
}

const AllTransaction = ({ transaction }) => {
  return (
    <AllTransactionContainer>
      <div>
        <ATStatus>
          {transaction.status ? "출금" : "입금"}
        </ATStatus>
        <ATContent>
          <div>{transaction.content}</div>
        </ATContent>
      </div>
      <div>
        <div>{transaction.payment_date}</div>
        <div>{transaction.money}</div>
      </div>
    </AllTransactionContainer>
  );
}

const AvailableMoney = styled.div`
  font-weight: bold;
`;

const ExpectedMoney = styled.div`
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AccountInfo = ({ account }) => {
  const { name, balance, number, expected } = account;
  return (
    <Header>
      <div>
        <AccountTitle>{name}</AccountTitle>
        <AccountNumber>{number}</AccountNumber>
      </div>
      <div>
        <AvailableMoney>사용 가능 잔고: {balance}</AvailableMoney>
        <ExpectedMoney>예상 잔여 잔고: {expected}</ExpectedMoney>
      </div>
    </Header>
  );
}



const Detail = () => {

  const [account, setAccount] = useState({
    id: 1,
    useNum: "199166708057887772866157",
    name: "NH농협은행",
    balance: "1,445,500",
    expected: "1,238,920",
    number: "199166708057887772866157"
  })
  const { id } = useParams();

  return (
    <>
      <div>
        <AccountInfo className="class" account={account} />
      </div>
      <div>
        <div>
          <span>이번달에 예정된 고정 지출</span>
          <span>icon</span>
        </div>
        <FixTransactionContainer>
          {FixTransactionDummyData.map((transaction, index) => (
            <FixTransaction key={index} transaction={transaction} />
          ))}
        </FixTransactionContainer>
      </div>
      <div>
        이번달 지출 금액
        {AllTransactionDummyData.map((transaction, index) => (
        <AllTransaction key={index} transaction={transaction} />
      ))}
      </div>
    </>
  );
}
export default Detail;