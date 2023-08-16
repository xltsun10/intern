import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useViewport } from "../../../hooks";
import { getSeachMovies, setMovieDetails } from "../../store/actions";
import MovieDetailsPage from "../MovieDetails";
import Recommmed from "../../Contents/Recommend";

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;

const useQuery = () => new URLSearchParams(useLocation().search);
const movies = [
  "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
  "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
  "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
  "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
  "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
  "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
  "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
  "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
  "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
  "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
];
function SearchPage(props) {
  const dispatch = useDispatch();
  const { SearchMovies, MovieDetails } = useSelector((state) => state.infoMovies);  
  const keywords = useQuery().get("keywords");
  const [windowDimensions] = useViewport();

  useEffect(() => {
    if (keywords) dispatch(getSeachMovies(keywords));
  }, [keywords, dispatch]);

  return (
    <>
    <SearchWrap className='singlePage'>
    <div className='box'>
      <Recommmed/>
        <div className='coverImage'>
          <img src="{cover}" alt='dsd' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>namejsjd</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>12</label>
              <span>GP</span>
              <label>121</label>
            </div>
            <p>13</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                13242
              </h4>
              <h4>
                <span>Genres </span>
                sdsadad
              </h4>
              <h4>
                <span>Tags </span>
                adadad
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> PLAY NOW
            </button>
          </div>
          <div className='palyButton row'>
            {/* <Link to={`/singlepage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </SearchWrap>
      

    </>
  );
}

export default SearchPage;

const SearchWrap = styled.div`
.home {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  color: #fff;
}
.homeContainer {
  position: relative;
}
.coverImage {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
}
.coverImage img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.homeContainer .content {
  padding: 100px;
}
.homeContainer h1 {
  margin-top: 80px;
  font-size: 90px;
  text-transform: uppercase;
  font-weight: 800;
  background-image: url("../../../public/images/texure.jpg");
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.coverImage::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 88;
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
}
.homeContainer .rating {
  margin: 30px 0;
}
.rating i {
  color: #e50813;
  margin-right: 5px;
}
.rating label {
  margin: 0 20px;
}
.rating span {
  background-color: #6c757d;
  padding: 5px;
  color: #fff;
  font-weight: bold;
}
.homeContainer .cast {
  margin: 30px 0;
}
.cast h4 {
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 17px;
}
.cast h4 span {
  color: #e50813;
}
.palyButton {
  display: flex;
  align-items: center;
  justify-content: center;
}
.palyButton .img {
  position: relative;
}
.change {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.palyButton img {
  width: 90px;
  height: 90px;
  margin-right: 20px;
}
.palyButton button:hover .change {
  opacity: 1;
}
.palyButton button {
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s;
}
.mragin {
  margin-top: 50%;
}
@media only screen and (max-width: 768px) {
  .homeContainer h1 {
    font-size: 50px;
    margin: 0;
  }
  .home {
    position: relative;
    margin: 0;
    height: 60vh !important;
  }
  .coverImage img {
    width: 100vw;
    height: 70vh !important;
  }
  .home .content {
    flex-direction: column;
    padding: 50px;
  }
  .home .row {
    width: 100%;
  }
  .home .palyButton {
    display: none;
  }
  .mragin {
    margin-top: 0% !important;
  }
}
`;
