import React from 'react'
import { styled } from 'styled-components';
import Content from '../../Contents/Content';
import Recommmed from '../../Contents/Recommend';
import Comment from './Comment';

const WatchMovies = () => {
  return (
    
    <WatchMovieWrapper className='singlePage'>
            <div className='singleHeading'>
              <h1>Spider Man</h1> <span> | Youtube| </span> <span> HD </span>
            </div>
            <div className='container'>
            <iframe width="560" height="760" src="https://www.youtube.com/embed/mBrUx6M6R7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
              <div className='para'>
                <Comment/>
                <Recommmed/>

              </div>
              <div className='soical'>
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' alt='logo' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' alt='logo'/>
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' alt='logo'/>
              </div>
            </div>
            
          </WatchMovieWrapper>
          
          
          

  );
}

export default WatchMovies;

const WatchMovieWrapper = styled.section`
body {
  background-color: #141414;
  color: #fff;
}
.singleHeading {
  margin-top: 80px;
  background-color: #1e272d;
  padding: 15px 0;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.singleHeading h1 {
  text-transform: uppercase;
  font-size: 30px;
}
.singleHeading span {
  word-spacing: 5px;
  margin-left: 10px;
}
.singlePage .container {
  max-width: 80%;
  margin: auto;
}
iframe {
  width: 100%;
  margin: 50px 0;
}
.singlePage h3 {
  font-weight: 400;
}
.singlePage p {
  line-height: 25px;
  margin-top: 20px;
}
.soical {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 30px 0;
  border-top: 2px solid #575757;
  border-bottom: 1px solid #575757;
  padding: 8px 0;
}
.soical img {
  margin-left: 10px;
}

`;


