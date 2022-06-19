import React from 'react';

// images
import pokeApi from "../assets/poke-api.png"
import rickAndMorty from "../assets/rick-and-morty-api.png"
import proyectNodeJs from "..//assets/proyect-api-node.jpg"

const PortafolioComponents = () => {
	return (
		<>
			<section id="portafolio" className="portfolio container section full-lg-screm">
				<div className='container-portfolio '>
					<h2 className='section-title'>Mis Proyectos</h2>
					<a href="#proyect-1" className='portfolio-card box-shadow-1' >
						<div className='text-center'>
							<img src={pokeApi} alt="poke api" />
						</div>
						<aside className='portfolio-card-inf'>
							<div>
								<h3>
									Proyecto Poke Api
								</h3>
								<p>
									Proyecto donde se realizo una front end consumiendo la api de Poke Api,
								</p>
							</div>
						</aside>
					</a>
					<a href="#proyect-2" className='portfolio-card box-shadow-1' >
						<div className="text-center">
							<img src={rickAndMorty} alt="rick and morty" />
						</div>
						<aside className='portfolio-card-inf'>
							<div>
								<h3>
									Rick and morty Api
								</h3>
								<p>
									Proyecto donde se realizo una front end consumiendo la api de Poke Api,
								</p>
							</div>
						</aside>
					</a>
					<a href="#proyect-3" className='portfolio-card box-shadow-1' >
						<div className='text-center'>
							<img src={proyectNodeJs} alt="poke api" />
						</div>
						<aside className='portfolio-card-inf'>
							<div>
								<h3>
									Api Meals and restaurants
								</h3>
								<p>
									Creacion de una api, para un restaraurantes
								</p>
							</div>
						</aside>
					</a>
					<a href="#proyect-4" className='portfolio-card box-shadow-1'>
						<div className='text-center'>
							<img src={proyectNodeJs} alt="poke api" />
						</div>
						<aside className='portfolio-card-inf'>
							<div>
								<h3>
									Api computer reapir
								</h3>
								<p>
									Creacion de una api, para una empresa de reparaciones de equipos de computo
								</p>
							</div>
						</aside>
					</a>
				</div>
			</section>
			<article className="modal" id='proyect-1'>
				<div className="model-content">
					<article className='proyect-modal'>
						<a href="#close" className='model-close'>
							<i className="fa-solid fa-circle-xmark"></i>
						</a>
						<div className='container-img-modal'>
							<img src={pokeApi} alt="proyecto 1" />
						</div>
						<div className='proyect-inf'>
							<h3>Front end consumiendo la api de pokemon</h3>
							<p>se realiza un proyecto de front end donde se consumio la api de pokemon.
								el proyecto era realizar un pagina mostrado todos pokemon, sus habilidades, tipo de pokemon...
							</p>
							<aside className='proyect-details'>
								<small>
									<b>	Cliente</b>
								</small>
								<small>Academlo</small>
								<small>
									<b>Fecha</b>
								</small>
								<small>28-03-2022</small>
								<small>
									<b>Tipo</b>
								</small>
								<small>Diseño de front end</small>
								<small>
									<b>Enlace</b>
								</small>
								<small>
									<a href="https://jocular-starburst-7c7db4.netlify.app/" target="_black" rel='noopener'>
										https://acortar.link/GYWQvn
									</a>
								</small>
							</aside>
						</div>
					</article>
				</div>
			</article>
			<article className="modal" id='proyect-2'>
				<div className="model-content">
					<article className='proyect-modal'>
						<a href="#close" className='model-close'>
							<i className="fa-solid fa-circle-xmark"></i>
						</a>
						<div className='container-img-modal'>
							<img src={rickAndMorty} alt="proyecto 1" />
						</div>
						<div className='proyect-inf'>
							<h3>Front end consumiendo la api de Rick y Morty</h3>
							<p>se realiza un proyecto de front end donde se consumio la api de Rick y Morty.
								el proyecto era realizar un pagina mostrado todos pokemon, sus habilidades, tipo de pokemon...
							</p>
							<aside className='proyect-details'>
								<small>
									<b>	Cliente</b>
								</small>
								<small>Academlo</small>
								<small>
									<b>Fecha</b>
								</small>
								<small>28-03-2022</small>
								<small>
									<b>Tipo</b>
								</small>
								<small>Diseño de front end</small>
								<small>
									<b>Enlace</b>
								</small>
								<small>
									<a href="https://zen-wing-e58347.netlify.app" target="_black" rel='noopener'>
										https://acortar.link/GYWQvn
									</a>
								</small>
							</aside>
						</div>
					</article>
				</div>
			</article>
			<article className="modal" id='proyect-3'>
				<div className="model-content">
					<article className='proyect-modal'>
						<a href="#close" className='model-close'>
							<i className="fa-solid fa-circle-xmark"></i>
						</a>
						<div className='container-img-modal'>
							<img src={proyectNodeJs} alt="proyecto 1" />
						</div>
						<div className='proyect-inf'>
							<h3>Back and para empresa de un restaurantes</h3>
							<p>proyecto escolar donde se realiza un proyecto back and  a un resturante, donse se utiliza la tecnologia Nodejs
							</p>
							<aside className='proyect-details'>
								<small>
									<b>	Cliente</b>
								</small>
								<small>Academlo</small>
								<small>
									<b>Fecha</b>
								</small>
								<small>28-03-2022</small>
								<small>
									<b>Tipo</b>
								</small>
								<small>Diseño de front end</small>
								<small>
									<b>Enlace</b>
								</small>
								<small>
									<a href="https://github.com/edalwil/APP-MEALS" target="_black" rel='noopener'>
										https://acortar.link/GYWQvn
									</a>
								</small>
							</aside>
						</div>
					</article>
				</div>
			</article>
			<article className="modal" id='proyect-4'>
				<div className="model-content">
					<article className='proyect-modal'>
						<a href="#close" className='model-close'>
							<i className="fa-solid fa-circle-xmark"></i>
						</a>
						<div className='container-img-modal'>
							<img src={proyectNodeJs} alt="proyecto 1" />
						</div>
						<div className='proyect-inf'>
							<h3>Front end consumiendo la api de pokemon</h3>
							<p>proyecto escolar donde se realiza un proyecto back and para un empresa de computadores, donse se utiliza la tecnologia Nodejs
							</p>
							<aside className='proyect-details'>
								<small>
									<b>	Cliente</b>
								</small>
								<small>Academlo</small>
								<small>
									<b>Fecha</b>
								</small>
								<small>28-03-2022</small>
								<small>
									<b>Tipo</b>
								</small>
								<small>Diseño de front end</small>
								<small>
									<b>Enlace</b>
								</small>
								<small>
									<a href="https://github.com/edalwil/proyect-app-reparts" target="_black" rel='noopener'>
										https://acortar.link/GYWQvn
									</a>
								</small>
							</aside>
						</div>
					</article>
				</div>
			</article>



		</>
	);
};

export default PortafolioComponents;