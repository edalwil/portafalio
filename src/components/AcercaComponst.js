import React from "react";

//styles css
import "../App.css";
import "../styles/AcercaStyles.css";

//cv y images
import pdf from "../assets/hojadevidaedwinwilche.pdf";
import profilePicture from "../assets/perfil-2.png";

const AcercaComponst = () => {
  return (
    <section id="acerca" className="about section container full-lg-screm">
      <article className="title-desktop-rigth">
        <aside className="title-about-center title-desktop-rigth">
          <h1>Edwin Wilche</h1>
          <h5>Programador Web Full-Stack</h5>
        </aside>
        <p>
          {" "}
          Soy Tecnólogo en automatización industrial con conocimiento en
          programación de PLC, con experiencia más de 4 años en mundo
          industrial.
        </p>
        <p>
          Actualmente me encuentro estudiando Programación Web Full-Stack en
          Academlo, Con conocimiento en JAVASCRIPTS, HTML, CSS, REACTS, NODEJS,
          con toda la aptitud de aprender todo sobre este hermoso mundo de la
          programación web.
        </p>
        <div className="title-about-center title-desktop-left">
          <a className="btn" href={pdf} target="_blank" rel="nooper noreferrer">
            DESCARGA MI CV
          </a>
        </div>
      </article>
      <article>
        <img
          src={profilePicture}
          className="profilePicture"
          alt="foto perfil"
        />
      </article>
      <article>
        <h2 className="title-about-center title-desktop-left ">
          Mis Habilidades
        </h2>
        <div className="progress">
          <p>
            <b>JavaScript</b>
            <b>80%</b>
          </p>
          <progress value="80" min="0" max="100"></progress>
          <p>
            <b>HTML</b>
            <b>80%</b>
          </p>
          <progress value="80" min="0" max="100"></progress>
          <p>
            <b>CSS</b>
            <b>85%</b>
          </p>
          <progress value="85" min="0" max="100"></progress>
          <p>
            <b>React</b>
            <b>90%</b>
          </p>
          <progress value="90" min="0" max="100"></progress>
          <p>
            <b>NodeJs</b>
            <b>85%</b>
          </p>
          <progress value="85" min="0" max="100"></progress>
        </div>
      </article>
    </section>
  );
};

export default AcercaComponst;
