import styled from "styled-components";
import { Link } from "react-router-dom";
export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #9cc3fa 20%, #0b03fc 140%);
  color: white;
`;

export const Title = styled.h1`
  margin-top: 150px;
  margin-bottom: 50px;
  font-size: 2rem;
  padding: 0 40px;
`;

export const StageContainer = styled.div`
  display: flex;
  width: 100%;
  transition: 1s ease;
  justify-content: center;
`;
export const SignUpStage1 = styled.div`
  position: absolute;
  transition: 0.5s ease-in-out;
  top: 100;
  width: ${({ stage }) => (stage ? "0%" : "50%")};
  opacity: ${({ stage }) => (stage ? "0%" : "100%")};
  z-index: ${({ stage }) => (stage ? "0" : "1")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthText = styled.div`
  color: wheat;
  font-size: 1.3rem;
  transition: 1s ease;
`;
export const AuthNext = styled.button`
  border: none;
  color: wheat;
  background: transparent;
  font-size: 1.3rem;
  margin-top: 100px;
  transition: 1s ease;
  display: ${({ auth }) => (auth ? "block" : "none")};
  opacity: ${({ auth }) => (auth ? "100" : "0")};
`;
export const SignUpStage2 = styled.div`
  position: absolute;
  transition: 1s ease-in-out;
  width: ${({ stage }) => (stage ? "100%" : "0%")};
  opacity: ${({ stage }) => (stage ? "100%" : "0%")};
  z-index: ${({ stage }) => (stage ? "1" : "0")};
`;
