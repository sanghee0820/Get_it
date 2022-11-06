import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    : hover {
        backgroud: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-weight: pre-wrap;
`;

function CommentListItem(props){
    const {comment} = props;

    return(
        <Wrapper>
            <ContentText>{comment.comment}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;