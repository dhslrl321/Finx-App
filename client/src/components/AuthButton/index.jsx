import React from "react";
import { AuthButton, AuthA, Inside } from "./style";
const AuthSubmitButton = () => {
  return (
    <>
      <AuthButton>
        <AuthA href="https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=kyMKwAZ7GWXJ81y8r7K2RXxZgCAA9WcIoqrogxgS&redirect_uri=http://127.0.0.1:3000/sign-up&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0">
          <Inside>계좌 인증하기</Inside>
        </AuthA>
      </AuthButton>
    </>
  );
};

export default AuthSubmitButton;
