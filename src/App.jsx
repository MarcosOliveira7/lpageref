import React from "react";
import './App.css';
import Header from './components/header/Header';
import Rodape from './components/rodape/Rodape';
import Curriculo from "./components/curriculo/Curriculo";
import Portfolio from "./components/portfolio/Portfolio";
import Contato from "./components/contato/Contato";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <>

      <Header> </Header>


    
      <BrowserRouter> 

      <nav>
          <ul>
            <li className="button"><Link to="/">Currículo</Link></li> 
            <li className="button"><Link to="/portfolio">Portfolio</Link></li>
            <li className="button"><Link to="/contato">Contato</Link></li> 
            
          </ul>
      </nav>



        <Routes> 
          <Route index element = {<Curriculo />} />
          <Route path= "portfolio" element={<Portfolio />} />
          <Route path= "contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>


      <Rodape></Rodape>

    </>
  )
}

export default App;
