import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userApi } from "../../util/api";
import cookie from "react-cookie";
import { useSetToken, useTokenData } from "../../util/context";
import {
  RootContainer, Partition, InputForm,
  Label, LoginButton, LogoText,
} from "./style";

const Login = () => {

  const setToken = useSetToken();

  const [inputs, setInputs] = useState({
    userEmail: "",
    userPassword: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: [value]
    })
  }

  const handleOnClick = async (e) => {

    try {
      const { data: token } = await userApi.postLogin("finx@naver.com", "finx12345");
      // setToken({
      //   bearerToken
      // })
      window.sessionStorage.setItem("token", token);
      console.log(token);

    } catch {
      alert("통신 실패");
    }
  }

  return (
    <RootContainer>
      <Partition>
        <LogoText>로그인</LogoText>
      </Partition>
      <Partition>
        <div>
          <Label>이메일 주소</Label>
          <InputForm type="text" name="userEmail" onChange={handleOnChange} />
        </div>
        <div>
          <Label>비밀번호</Label>
          <InputForm type="password" name="userPassword" onChange={handleOnChange} />
        </div>
      </Partition>
      <Partition>
        <Link to="/account">
          <LoginButton onClick={handleOnClick}>로그인 하기</LoginButton>
        </Link>
      </Partition>
    </RootContainer>
  );
}

export default Login;