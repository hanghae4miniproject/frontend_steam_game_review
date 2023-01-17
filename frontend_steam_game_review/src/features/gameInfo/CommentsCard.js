import React from "react";
import styled from "styled-components";

const CommentsCard = ({ comment }) => {
  return (
    <>
      <STcard>
        <div>{comment.id}</div>
        <div>{comment.comment}</div>
      </STcard>
    </>
  );
};

export default CommentsCard;

const STcard = styled.div`
  border: 1px solid white;
  gap: 5px;
`;
