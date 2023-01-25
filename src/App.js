import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './component/Header/Header';
import { useState } from 'react';
import Singlecountry from './component/singlecountry/Singlecountry';


function App() {
  const[darkmode,setDarkmode]=useState(false);
  return (
    <BrowserRouter>
    <div className={`${darkmode? "Appchange": "" } App`}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
      <Routes>
        <Route path='/' element={<Home darkmode={darkmode} setDarkmode={setDarkmode}/>}/>
         <Route path=':name' element={<Singlecountry darkmode={darkmode} setDarkmode={setDarkmode}/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
