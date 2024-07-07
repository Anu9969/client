import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
//Pages
import Home from './Pages/Home';
import ArticleList from './Pages/ArticleList';
import Articles from './Pages/Articles';
import About from './Pages/About';

//Components
import NavBar from './Components/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="max-w-screen-md mx-auto my-auto pt-20">
        <Routes>
        {/* <Home/> */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path= '/articles/:name' Component={Articles}/>
        <Route path= '/articlelist' element={<ArticleList/>}/>
        </Routes>
   </div>
   </Router>
     
  );
}

export default App;
