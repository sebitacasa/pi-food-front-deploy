import './App.css';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import Detail from './Components/RecipeDetail';
import RecipeCreate from './Components/RecipeCreate';
import { Route, Routes, BrowserRouter} from "react-router-dom";
//import Cards from './Components/Cards';




function App() {
  return (
    
    <div>
      <BrowserRouter>
       <Routes>
         <Route  path = '/' element = {<LandingPage/>} />
         <Route exact path = '/home' element = {<Home/>}/>
         <Route exact path = '/recipes/:id' element = {<Detail/>}/>
         <Route  exact path = '/recipes/post' element = {<RecipeCreate/>}/>
       </Routes>
      </BrowserRouter>
    </div>
       
       
      
       
       
       
      
   
   
  );
}

export default App;
