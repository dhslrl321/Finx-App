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
      <SignUpButtonLink to="/sign-in">
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpButtonLink>
    </ButtonWrapper>
  );
};

export default SignUpSubmitButton;
