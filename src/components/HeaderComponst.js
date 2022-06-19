//hooks {useState}
import React, { useState } from 'react';

//imagenes
import menuBars from "../assets/menu-bars.svg"
import menuClose from "../assets/menu-close.svg"

//styles css
import "../App.css";
import "../styles/HeaderComponstStyles.css"


const HeaderComponst = () => {

   //cambio de clasNameen el menu hamburguesa 
   const [onMenu, setOnMenu] = useState(true);

   //constate para resteo del useState
   const buttonMenuHamburguesa = () => {
      setOnMenu(!onMenu)
   }

   return (
      <header className="header">
         <section className="container">
            <div className="logo">
               <a href="https://www.linkedin.com/in/edwin-wilche-45b071177/" target="_blank" rel="nooper noreferrer">Edwin Wilche</a>
            </div>
            <button className='menu-btn' onClick={buttonMenuHamburguesa}>
               <img src={menuBars} alt="menu" className={`${onMenu ? "" : "none"}`} />
               <img className={`${onMenu ? "none" : ""}`} src={menuClose} alt="menuClose" />
            </button>
            <div className={`${onMenu ? "menu" : "menu is-active"}`}>
               <a href="#inicio" onClick={buttonMenuHamburguesa}>Inicio</a>
               <a href="#acerca" onClick={buttonMenuHamburguesa}>Acerca</a>
               <a href="#servicios" onClick={buttonMenuHamburguesa}>Habilidades</a>
               <a href="#portafolio" onClick={buttonMenuHamburguesa}>Portafolio</a>
               <a href="#contacto" onClick={buttonMenuHamburguesa}>Contacto</a>
            </div>
         </section>
      </header >
   );
};

export default HeaderComponst;