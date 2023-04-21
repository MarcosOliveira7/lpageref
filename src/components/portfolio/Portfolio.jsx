import React from "react";
import "./Portfolio.css";

import capaAcademy from "../../assets/whatsapppng.jpg";

function Portfolio() {

    const portfolios = [
        {
            link: "https://web.whatsapp.com/",
            image: "../../assets/whatsapppng.jpg",
            title: "Marcos Lan"
        },

        {
            link: "https://web.whatsapp.com/",
            image: "../../assets/whatsapppng.jpg",
            title: "App whatsapp2"
        },

        {
            link: "https://web.whatsapp.com/",
            image: "../../assets/whatsapppng.jpg",
            title: "Portfolio3"
        },
    ];
    return (
        <main>


           { portfolios.map(
                (portfolio) => 
                    <div className="item-portfolio">
                        <a href={portfolio.link} target="_blank">
                            <img src={capaAcademy} alt="Capa do whatsapp2" />
                            <p>{portfolio.title}</p>
                        </a>
                    </div>

           )}

        </main>


    )


}

export default Portfolio;