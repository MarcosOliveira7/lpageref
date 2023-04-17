import React from "react";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Curriculo from "./components/curriculo/Curriculo";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (

    <>

      <Header> </Header>

      <nav>
          <ul>
            <li className="button"><a href="#"> Currículo </a></li>
            <li className="button"><a href="pages/portfolio.html"> Portfolio </a></li>
            <li className="button"><a href="pages/contato.html"> Contato </a></li>
          </ul>
      </nav>
    
      <Curriculo></Curriculo>


      <Portfolio></Portfolio>

      <Footer></Footer>

    </>
  )
}

export default App;
