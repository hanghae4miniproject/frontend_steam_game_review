import React from "react";
import styled from "styled-components";

const SignUpInfo = () => {
  return (
    <div>
      <LoginContainer>
        <div>
          <h1>Sign Up</h1>
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
            Email : <input placeholder="Email을 입력해주세요"></input>
          </div>
          <div>
            <button> 회원가입 </button>
          </div>
          <div>
            <button> 이전으로 </button>
          </div>
        </FormBox>
      </LoginContainer>
    </div>
  );
};

export default SignUpInfo;

const LoginContainer = styled.div`
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
