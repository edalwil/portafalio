import React from 'react';

//images
import progracionWeb from "../assets/service-code.svg"
import reactLogo from "../assets/react.png"
import nodeLogo from "../assets/NODE.jpg"
import javaScripLogo from "../assets/JAVASCRIPT.png"
import cssLogo from "../assets/CSS.png"
import htmlLogo from "../assets/HTML.png"
//styles
import "../App.css";
import "../styles/ServiciosStyles.css"


const ServiciosComponst = () => {
    return (
        <section id="servicios" className="services section gb-gray-light full-lg-screm" >
            <div className="container">
                <h2 className="section-title">
                    Habilidades
                </h2>
                <article className="service-card">
                    <div className='container-title-programing-web'>
                        <img src={progracionWeb} alt="Programacion web" className='img-programming-web' />
                        <h3>Programacion Web</h3>
                        <div>
                            <p>Desarrollo sitios y aplicaciones para plataformas Web. Te ayudo a construir tu proyecto de principio a fin: Frontend, Backend y Base de Datos.</p>
                        </div>
                    </div>
                    <div className='box-card'>
                        <div className='container-tecnology div-1'>
                            <h3> React</h3>
                            <div>
                                <img src={reactLogo} alt="logo react" className='img-logo' />
                            </div>
                        </div>
                        <div className='container-tecnology div-2'>
                            <h3>NodeJS</h3>
                            <div>
                                <img src={nodeLogo} alt="logo nodejs" className='img-logo ' />
                            </div>
                        </div>
                        <div className='container-tecnology div-3'>
                            <h3>JavaScrip</h3>
                            <div>
                                <img src={javaScripLogo} alt="logo nodejs" className='img-logo ' />
                            </div>
                        </div>
                        <div className='container-tecnology div-4'>
                            <h3>CSS</h3>
                            <div>
                                <img src={cssLogo} alt="logo nodejs" className='img-logo ' />
                            </div>
                        </div>
                        <div className='container-tecnology div-5'>
                            <h3>HTML</h3>
                            <div>
                                <img src={htmlLogo} alt="logo nodejs" className='img-logo SS' />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ServiciosComponst;