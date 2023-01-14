import React from "react";
import styled from "styled-components";

const LoginInfo = () => {
  return (
    <div>
      <LoginContainer>
        <div>
          <h1>login</h1>
        </div>
        <FormBox
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            ID : <input placeholder="아이디를 입력해주세요"></input>
          </div>
          <div>
            PassWord : <input placeholder="비밀번호를 입력해주세요"></input>
          </div>
          <div>
            <button> 로그인 </button>
          </div>
        </FormBox>
      </LoginContainer>
    </div>
  );
};

export default LoginInfo;

const LoginContainer = styled.div`
  border: 1px solid white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80vh;
`;

const FormBox = styled.form`
  width: 400px;
  height: 250px;

  border: 1px solid white;

  background-color: #171a21;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: white;
`;
