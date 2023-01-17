import React from "react";
import styled from "styled-components";

const GameInfo = () => {
  return (
    <GameInfoContainer>
      <Wrap>
        <ImgContainer>
          <TitleBox>TitleBox</TitleBox>
          <ImgBox>이미지 자리</ImgBox>
        </ImgContainer>
        <ContentsContainer>
          <TitleBox>contents</TitleBox>
          <ContentsBox>contents text</ContentsBox>
        </ContentsContainer>
      </Wrap>
      <Wrap>
        <CommentContainer>
          <div>commentbox</div>
        </CommentContainer>
      </Wrap>
    </GameInfoContainer>
  );
};

export default GameInfo;

const GameInfoContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
const ImgContainer = styled.div`
  border: 1px solid white;

  width: 500px;
  height: 250px;

  margin: 10px auto;
`;
const TitleBox = styled.div`
  width: 200px;
  height: 30px;

  font-size: 30px;

  margin-top: 5px;
  margin-left: 5px;

  border: 1px solid white;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 200px;

  margin: 2px auto;

  border: 1px solid white;

  background-color: wheat;
`;
const ContentsContainer = styled.div`
  border: 1px solid white;

  width: 350px;
  height: 250px;

  margin: 10px auto;
`;
const ContentsBox = styled.div`
  border: 1px solid white;

  width: 350px;
  height: 200px;

  margin: 5px auto;
  background-color: wheat;
`;
const CommentContainer = styled.div`
  border: 1px solid white;

  width: 100%;
  height: 350px;

  margin: 20px auto;
`;
