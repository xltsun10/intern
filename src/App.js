import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Intro from './components/Intro/Intro';
// import Menus from './components/Menus/Menus';
import {Route, BrowserRouter, Routes } from "react-router-dom";
// //import Contents from './components/Contents/Contents';
// import Content from './components/Contents/Content';
//import MovieDetailsPage from './components/pages/MovieDetails';
import Home from './components/pages/Home';
import SearchPage from "./components/pages/Search";
// import MovieDetailsPage from './components/pages/MovieDetails';
// import { useSelector } from 'react-redux';
// import MovieRow from './components/Contents/MovieRow';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Navbar />          
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/search" element={<SearchPage/>} />
          </Routes>
        </BrowserRouter>

        
      </div>
  );
}

export default App;
