import React from 'react';

//styles css
import "../App.css";
import "../styles/HomeStyles.css"




const Home = () => {
    return (
        <section section id="inicio" className="home ">
            <article className='hero-image' >
                <aside className='hero-image-opacity'>
                    <div className="hero-image-content">
                        <h2 className="hero-image-title">
                            Bienvenid@S <br />a mi sitio
                        </h2>
                        <a href="#contacto" className='btn'>CONTACTAME</a>
                    </div>
                </aside>
            </article>
        </section>
    );
};

export default Home;