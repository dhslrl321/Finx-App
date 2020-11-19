import React, { useState } from "react";
import { SignInContainer, Title } from "./style";
import SignUpSubmitButton from "../../components/SignUpSubmitButton";
import SignUpInputForm from "../../components/SignUpInputForm";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log("클릭됨");
  };
  return (
    <SignInContainer>
      <Title>회원가입</Title>
      <SignUpInputForm
        inputs={inputs}
        changeInputs={changeInputs}
      ></SignUpInputForm>
      <SignUpSubmitButton></SignUpSubmitButton>
    </SignInContainer>
  );
};

export default SignUp;
