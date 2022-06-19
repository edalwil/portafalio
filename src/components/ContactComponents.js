import React from 'react';

// Componenst
import FormComponents from './FormComponents';



const ContactComponents = () => {
      return (
            <section id="contacto" className="contact container section full-lg-screm" >
                  <div className='container'>
                        <h2 className='section-title'>
                              ¿Interesado?
                        </h2>
                        <article className='contact-cards'>
                              <aside className='contact-card box-shadow-1'>
                                    <i className="fa-solid fa-house"></i>
                                    <h4>Ubicacion</h4>
                                    <small>Villavicencio - Colombia</small>
                              </aside>
                              <aside className='contact-card box-shadow-1'>
                                    <i className="fa-solid fa-phone-flip"></i>
                                    <h4>Telefono</h4>
                                    <small> +57 3107536054</small>
                              </aside>
                              <aside className='contact-card box-shadow-1'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <h4>Correo</h4>
                                    <small>edalwil@gmail.com</small>
                              </aside>
                              <aside className='contact-card box-shadow-1'>
                                    <i className="fa-solid fa-hashtag"></i>
                                    <h4>Sociales Media</h4>
                                    <div className='container-img-social-media'>
                                          <a href="https://linkedin.com/in/edwin-wilche-45b071177" target="_black" rel="noopener">
                                                <i class="fa-brands fa-linkedin"></i>
                                          </a>
                                          <a href="https://github.com/edalwil" target="_black" rel="noopener">
                                                <i class="fa-brands fa-github-square"></i>
                                          </a>
                                    </div>
                              </aside>
                        </article>
                        <FormComponents />
                  </div>
            </section>
      );
};

export default ContactComponents;