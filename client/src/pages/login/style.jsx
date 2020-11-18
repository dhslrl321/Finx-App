import styled from 'styled-components';

export const RootContainer = styled.div`
  background: linear-gradient( 135deg, #9CC3FA 1%, #0b03fc 99%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Partition = styled.div`
  height: 100px;
  width: 80vw;
  margin: 3vw;
  
  :first-child {
    margin-top: 25%;
    margin-left: 51px;
    margin-right: 50px;
  }
  :nth-child(2) {
    div {
      margin-top: 30px;
    }
  }
  :nth-child(3) {

  }
  :last-child {

  }
`;

export const InputForm = styled.input`
  background: inherit;
  width: 100%;
  border: 1px none;
  padding: 10px;
  border-bottom: 1px solid white;
  color: white;
`;

export const LogoText = styled.div`
  color: white;
  font-size: 32px;
`;

export const Label = styled.span`
  color: white;
  font-size: 13px;
`;
export const LoginButton = styled.button`
  background: white;
  margin-top: 100px;
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 8px;
`;