import React from "react";
import { FormWrap, InputDesc, Input } from "./style";
const SignUpInputForm = ({ inputs, changeInputs }) => {
  const { email, password } = inputs;
  return (
    <>
      <FormWrap>
        <InputDesc>이메일</InputDesc>
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
      <FormWrap>
        <InputDesc>비밀번호 확인</InputDesc>
        <Input type="password" />
      </FormWrap>
    </>
  );
};

export default SignUpInputForm;
