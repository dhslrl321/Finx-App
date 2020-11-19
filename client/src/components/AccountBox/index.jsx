import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardContainerColumn, InfoButton } from "./style";
const AccountBox = ({ account }) => {
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

export default AccountBox;
