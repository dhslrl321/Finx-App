import React from "react";
import { FormWrap, Input, InputDesc } from "./style";
const SignInInputForm = ({ inputs, changeInputs }) => {
  const { email, password } = inputs;

  return (
    <>
      <FormWrap>
        <InputDesc>이메일 주소</InputDesc>
        <Input type="text" value={email} name="email" onChange={changeInputs} />
      </FormWrap>
      <FormWrap>
        <InputDesc>비밀번호</InputDesc>
        <Input
          type="password"
          value={password}
          name="password"
          onChange={changeInputs}
        />
      </FormWrap>
    </>
  );
};

export default SignInInputForm;
