import styled from "styled-components";

export const AccountTitle = styled.div`
  padding-top: 20px;
  font-size: 30px;
  font-weight: bold;
`;
export const AccountNumber = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
`;

export const FixTransactionHeader = styled.div``;

export const FixTransactionContainer = styled.div`
  background-color: white;
  margin: 5px 15px;
  padding: 4px 10px;
  border-radius: 10px;
`;

export const AllTransactionHeader = styled.div``;

export const AllTransactionContainer = styled.div`
  background-color: white;
  margin: 5px 15px;
  padding: 4px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ATStatus = styled.div`
  font-size: 20px;
  color: #4e78dd;
  font-weight: bold;
`;
export const ATContent = styled.div``;
export const ATMoney = styled.div``;
export const accountData = {
  id: 1,
  name: "농협 은행",
  balance: 50000,
  number: "1120-12-052927",
};
