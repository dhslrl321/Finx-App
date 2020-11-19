import React, { useState } from "react";
import { SignInContainer, Title } from "./style";
import SignInInputForm from "../../components/SignInInputForm";
import SignInButton from "../../components/SignInButton";
const SignIn = () => {
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
      <Title>로그인</Title>
      <SignInInputForm inputs={inputs} changeInputs={changeInputs} />
      <SignInButton />
    </SignInContainer>
  );
};

export default SignIn;
