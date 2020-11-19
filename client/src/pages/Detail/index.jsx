import React, { useState } from "react";
import { MdCheckBox } from "react-icons/md";
import {
  ATContent,
  AccountNumber,
  ATStatus,
  AccountTitle,
  AllTransactionContainer,
  Header,
  FixTransactionContainer,
  ExpectedMoney,
  AvailableMoney,
} from "./style";

export const FixTransactionDummyData = [
  {
    id: 0,
    content: "넷플릭스 정기 구독",
    money: 14500,
    payment_date: "2020-10-26",
    account_id: 1,
  },
  {
    id: 0,
    content: "월세",
    money: 400000,
    payment_date: "2020-10-26",
    account_id: 1,
  },
];

export const AllTransactionDummyData = [
  {
    id: 0,
    content: "비바퍼블리카",
    money: 9500,
    payment_date: "2020-10-26",
    account_id: 1,
    status: false,
  },
  {
    id: 1,
    content: "CU 편의점 사당점",
    money: 500,
    payment_date: "2020-10-26",
    account_id: 1,
    status: false,
  },
];

const FixColumn = ({ content, money }) => {
  return (
    <div>
      <MdCheckBox /> {content} {money}
    </div>
  );
};

const FixTransaction = ({ transaction }) => {
  return (
    <>
      <FixColumn content={transaction.content} money={transaction.money} />
    </>
  );
};

const AllTransaction = ({ transaction }) => {
  return (
    <AllTransactionContainer>
      <div>
        <ATStatus>{transaction.status ? "출금" : "입금"}</ATStatus>
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
};

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
};

const Detail = ({ match }) => {
  const [account, setAccount] = useState({
    id: 1,
    useNum: "199166708057887772866157",
    name: "NH농협은행",
    balance: "1,445,500",
    expected: "1,238,920",
    number: "199166708057887772866157",
  });
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
};

export default Detail;
