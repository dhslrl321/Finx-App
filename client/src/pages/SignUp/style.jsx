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

export const ButtonWrapper = styled.div`
  padding: 0 40px;
  margin-top: 100px;
`;

export const LoginButtonLink = styled(Link)``;

export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-left: -10px;
`;

export const FindInfoLink = styled.div`
  padding: 0 30px;
  font-size: 0.8rem;
`;
export const SignUpText = styled.div`
  color: white;
`;
export const SignUpLink = styled(Link)`
  padding: 0 30px;
  font-size: 0.8rem;
`;
