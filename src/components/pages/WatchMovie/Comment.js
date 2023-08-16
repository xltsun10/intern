import React from 'react'
import { styled } from 'styled-components';

const Comment = () => {
  return (
    <CommentWrapper>
        <div class="comment">
        <div class="comment-header">
          <img class="avatar" src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Favatar&psig=AOvVaw39P66UzV8qLYoWVbq6KNH1&ust=1692281194787000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjN0-2s4YADFQAAAAAdAAAAABAD" alt="Avatar"/>
          <h4 class="username">John Doe</h4>
        </div>
        <p class="text">Good film.</p>
        <span class="timestamp">10 minutes ago</span>
      </div>
    </CommentWrapper>
    
      
    
  );
}

export default Comment;
const CommentWrapper = styled.section`
.comment {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    }

    .comment-header {
    display: flex;
    }

    .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    }

    .username {
    margin: 0;
    }

    .text {
    margin-top: 5px;
    }

    .timestamp {
    font-size: 12px;
    color: gray;
    margin-top: 5px;
    }
`;
