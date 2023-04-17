import React from 'react';
import marcosAvatar from "../../assets/marcos-avatar.webp"

function Header() {

    return (

      <header>
    
        <img src={marcosAvatar} alt="Foto de Marcos" />
        <h1 id="nome perfil"> Marcos Oliveira</h1>
        <h1 id="eventoSubtitulo"> Desenvolvedor de Software</h1>
  
      </header >

    )


}

export default Header;