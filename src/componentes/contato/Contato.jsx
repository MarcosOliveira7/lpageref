import React, { useState } from "react";

import "./Contato.css";

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    

    function enviarFormulario(event) {
            event.preventDefault();

            console.log("Formulario enviado");

            const texto = 'Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}';

            const numeroWhatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;

            const linkWhatsapp = 'https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}';

            window.open(linkWhatsapp, '_blank');

            console.log(texto)
            console.log(numeroWhatsapp)
    }
    return (

        

            <form onSubmit= {enviarFormulario} >

                <fieldset>
                    <label htmlFor="input-name">Nome</label>
                    <input 
                        type="text" 
                        name="input-name" 
                        id="input-nome" 
                        required minLength="2"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        />
                </fieldset>

                <fieldset>

                    <label htmlFor="input-email">E-mail</label>
                    <input 
                        type="email" 
                        name="input-email" 
                        id="input-email" 
                        required 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />

                </fieldset>

                <fieldset>

                    <label htmlFor="input-tel">Telefone</label>
                    <input 
                            type="tel" 
                            name="input-tel" 
                            id="input-tel" 
                            placeholder="(99) 99999-9999"
                            required pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                            maxLength="15"
                            value={telefone}
                            onChange={(event) => setTelefone(event.target.value)}
                        />
                </fieldset>


                <fieldset>

                    <label htmlFor="input-msg">Mensagem</label>
                    <textarea 
                            name="input-msg" 
                            id="input-msg" 
                            cols="30" 
                            rows="10"
                            value={mensagem}
                            onChange={(event) => setMensagem(event.target.value)}
                        >
                        
                    </textarea>

                </fieldset>

                <center>
                    <input type="submit" value="ENVIAR" className="button" />
                </center>


            </form>

        

    )


}

export default Contato;