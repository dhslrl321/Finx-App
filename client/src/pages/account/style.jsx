import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  margin: 15px 15px;
  padding: 4px 0px;
  height: 140px;
  border-radius: 10px;
`;
export const CardContainerColumn = styled.div`
  margin: 10px 20px;
  :first-child{
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
  border-radius: 6px;
  background: linear-gradient( 135deg, #7BBBEA, #4682DE, #407CDD);
  color: white;
  font-size: 14px;
`;
export const ButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Img = styled.img`
  width :100%;
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
  color: #8B8B8B;
  left: 16px;
  top: 43px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 40px;
  padding-left: 15px;
  padding-bottom: 30px;
`;
export const OverlapBackground = styled.div`
  width: 100vw;
  height: 1010px;
  background: gray;
  opacity: 0.3;
  position: absolute;
  left: -20px;
  bottom: -260px;
  z-index: -1;
`;

export const ModalBox = styled.div`
  width: 250px;
  height: 100px;
  background: linear-gradient( 135deg, #7BBBEA, #4682DE, #407CDD);
  background-color: wheat;
  color: white;
  position: absolute;
  left: 45px;
  bottom: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  .text {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      padding: 5px;
      font-size: 20px;
    }
  }
`;

export const ModalImage = styled.img`
  margin-top: 1px;
  width: 40px;
`;