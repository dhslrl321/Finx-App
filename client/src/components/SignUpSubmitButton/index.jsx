import React from "react";
import {
  ButtonWrapper,
  AuthButton,
  SignUpButtonLink,
  SignUpButton,
} from "./style";
const SignUpSubmitButton = () => {
  return (
    <ButtonWrapper>
      <AuthButton>
        <a href="https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=kyMKwAZ7GWXJ81y8r7K2RXxZgCAA9WcIoqrogxgS&redirect_uri=http://127.0.0.1:7894/callback&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0">
          계좌 인증하기
        </a>
      </AuthButton>
      <SignUpButtonLink to="/sign-in">
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpButtonLink>
    </ButtonWrapper>
  );
};

export default SignUpSubmitButton;
