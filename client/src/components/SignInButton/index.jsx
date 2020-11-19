import React from "react";
import {
  ButtonWrapper,
  LoginButton,
  LoginButtonLink,
  LinkWrapper,
  SignUpLink,
  SignUpText,
  FindInfoLink,
} from "./style";
const SignInButton = () => {
  return (
    <ButtonWrapper>
      <LoginButtonLink to="/sign-in">
        <LoginButton>Sign In</LoginButton>
      </LoginButtonLink>
      <LinkWrapper>
        <FindInfoLink>아이디 / 비밀번호 찾기</FindInfoLink>
        <SignUpLink to="/sign-up">
          <SignUpText>회원가입</SignUpText>
        </SignUpLink>
      </LinkWrapper>
    </ButtonWrapper>
  );
};

export default SignInButton;
