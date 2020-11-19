import React, { useState, useEffect } from "react";
import {
  SignInContainer,
  Title,
  SignUpStage1,
  SignUpStage2,
  AuthText,
  AuthNext,
  StageContainer,
} from "./style";
import SignUpSubmitButton from "../../components/SignUpSubmitButton";
import SignUpInputForm from "../../components/SignUpInputForm";
import AuthSubmitButton from "../../components/AuthButton";
import queryString from "query-string";

const SignUp = ({ location }) => {
  const [stage, setStage] = useState(false);
  const [qs, setQs] = useState({
    code: null,
    scope: null,
    state: null,
    auth: false,
  });
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
  };

  const toggle = () => {
    setStage(!stage);
  };

  useEffect(() => {
    const query = queryString.parse(location.search);
    const { code, scope, state } = query;
    console.log("code 값: ", code);

    if (query.code !== undefined) {
      setQs({
        code,
        scope,
        state,
        auth: true,
      });
    }
  }, []);

  return (
    <SignInContainer>
      <Title>회원가입</Title>
      <StageContainer>
        <SignUpStage1 stage={stage}>
          <AuthSubmitButton />
          <AuthText>{qs.auth ? "인증 성공" : "인증을 완료해주세요!"}</AuthText>
          <AuthNext auth={qs.auth} onClick={toggle}>
            넘어가기
          </AuthNext>
        </SignUpStage1>
        <SignUpStage2 stage={stage}>
          <SignUpInputForm inputs={inputs} changeInputs={changeInputs} />
          <SignUpSubmitButton />
        </SignUpStage2>
      </StageContainer>
    </SignInContainer>
  );
};

export default SignUp;
