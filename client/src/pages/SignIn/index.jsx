import React, { useState } from "react";
import { SignInContainer, Title } from "./style";
import { userApi } from "../../apis/api";
import { useUserData, useUserFns } from "../../context/GlobalContext";
import SignInInputForm from "../../components/SignInInputForm";
import SignInButton from "../../components/SignInButton";

/*
  로그인 버튼 클릭하면 서버에
*/

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

  const handleLogin = async () => {
    // 서버 통신 로직
    const { email, password } = inputs;
    try {
      const { data } = await userApi.postSignIn(email, password); // 결과로 받아야함.
    } catch {
      alert("통신 실패");
    }
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
