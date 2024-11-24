// src/app/Home.js
import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import '/styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faCloud } from '@fortawesome/free-solid-svg-icons';
import Profile from '/components/perfiles'; // Asegúrate de que la ruta sea correcta

const Home = () => {
    const profiles = [];
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-7">
                            <div className="image-wrapper">
                                <Image 
                                    src="/anime.png" 
                                    alt="Descripción de la imagen"
                                    width={5376} 
                                    height={3075} 
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className="fade-overlay"></div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <h1 className="title mb-3">Nova Enterprise Online (NEO)</h1>
                            <h2 className="subtitle">Si puedes imaginarlo, puedes programarlo</h2>
                            <p>
                                En Nova Enterprise Online (NEO), nos especializamos en brindar soluciones de desarrollo web y programación personalizadas que se adaptan a las necesidades de cada cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        <div className="column is-4">
                            <div className="card hover-card has-text-centered">
                                <div className="card-content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <h3 className="subtitle">Desarrollo Web</h3>
                                    <p>
                                        Creamos sitios web atractivos y funcionales que impulsan tu presencia en línea.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card hover-card has-text-centered">
                                <div className="card-content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faCogs} />
                                    </span>
                                    <h3 className="subtitle">Programación Personalizada</h3>
                                    <p>
                                        Desarrollamos soluciones de software a medida que se ajustan a tus necesidades específicas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card hover-card has-text-centered">
                                <div className="card-content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faCloud} />
                                    </span>
                                    <h3 className="subtitle">Soluciones Tecnológicas</h3>
                                    <p>
                                        Ofrecemos asesoría en tecnología y soluciones innovadoras para tu negocio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="separator-line "></div> {/* Línea separadora */}
                    <div className="container">
                        <h2 className="subtitle">Nuestro equipo</h2>
                        <div className='columns is-1'>
                            <Profile profiles={profiles} /> {/* Pasando los profiles correctamente */}
                        </div>
                    </div>
                <div className="separator-line"></div> 
            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;
