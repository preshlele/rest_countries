import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import Country from './components/Country'

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
      <Route exact path={"/"} element={<Countries />}>
      </Route>
      <Route exact path={"/:name"} element={<Country/>}></Route>

      </Routes>
      
    </Router>
  );
}

export default App;
