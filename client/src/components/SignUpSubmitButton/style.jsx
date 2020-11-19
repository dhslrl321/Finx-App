import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.div`
  padding: 0 40px;
  margin-top: 100px;
`;
export const SignUpButtonLink = styled(Link)``;

export const SignUpButton = styled.button`
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
