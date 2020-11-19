import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 90%;
  margin: 15px 15px;
  padding: 4px 0px;
  height: 140px;
  border-radius: 10px;
`;
export const CardContainerColumn = styled.div`
  margin: 10px 20px;
  :first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .name {
      font-size: 20px;
      font-weight: bold;
    }
    .balance {
      color: font-weight;
    }
  }
  :nth-child(2) {
    margin-right: auto;
    .number {
      font-size: 13px;
      color: gray;
    }
  }
  :nth-child(3) {
    margin-top: -7px;
    margin-left: auto;
  }
  :last-child {
    margin-left: auto;
  }
`;

export const InfoButton = styled.div`
  padding: 5px 20px;
  display: inline;
  border: 1px solid;
  background: linear-gradient(135deg, #7bbbea, #4682de, #407cdd);
  color: white;
  font-size: 14px;
  border-radius: 101px;
`;
