import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Menus from './components/Menus/Menus';
//import Contents from './components/Contents/Contents';
import Content from './components/Contents/Content';
// import MovieRow from './components/Contents/MovieRow';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      {/* <MovieRow/> */}
      {/* <Contents/> */}
      <Content/>
      <Menus/>
      
    </div>
  );
}

export default App;
