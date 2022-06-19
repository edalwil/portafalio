import axios from 'axios';
import React from 'react';
import { useState } from 'react';

// importamo useForm 
import { useForm } from 'react-hook-form';


// images
import loading from "../assets/loader.svg"

const FormComponents = () => {

      const { register, handleSubmit, reset } = useForm();
      const [thanks, setThanks] = useState(false);


      const submit = (event, e) => {
            e.preventDefault()

            const mensage = {
                  name: event.name,
                  email: event.email,
                  comment: event.comment
            }

            setThanks(true)
            reset()

            axios
                  .post("https://getform.io/f/dde595a9-ab1b-44c2-a0b9-0b9fc6750b3e", {
                        message: mensage,
                  })
                  .then(response => console.log(response))
                  .catch(error => console.log(error))
      }

      return (
            <>
                  <form className="contact-form box-shadow-1" onSubmit={handleSubmit(submit)}>
                        <input
                              type="text"
                              name='name'
                              placeholder='ingresa tu nombre'
                              title='Nombre solo acepta letras y espacios en blanco'
                              pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'
                              required
                              {...register("name")}
                        />
                        <input
                              type="email"
                              name='email'
                              placeholder='ingresa tu correo*'
                              title='Email incorrecto'
                              pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
                              {...register("email")}
                              required
                        />
                        <textarea
                              name="comment"
                              cols="50"
                              rows="10"
                              placeholder='dejame tu comentarios*'
                              {...register("comment")}
                              required >
                        </textarea>
                        <div className="contact-form-loader text-center none">
                              <img src={loading} alt="" />
                        </div>
                        <input className='btn' id='gracias' type="submit" value="ENVIAR MENSAJE" />
                  </form>
                  <article id='gracias' className={`${thanks ? "modalOn" : "modal"}`}>
                        <div className="modal-content">
                              <article className="contact-form-response">
                                    <h3>
                                          Muchas gracias
                                          <br />por tu comentarios
                                    </h3>
                                    <i className="fa-solid fa-face-laugh-beam"></i>
                                    <button onClick={() => setThanks(false)}>
                                          <i className="fa-solid fa-circle-xmark"></i>
                                    </button>
                              </article>
                        </div>
                  </article>
            </>
      );
};

export default FormComponents;