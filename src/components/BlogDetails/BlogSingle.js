import React from 'react';

import Ab2 from '../../images/ReactNew/image4.jpg'
import PageBaground from '../../components/PageBaground/PageBaground'
import Ab3 from '../../images/ReactNew/image5.jpg'

const aboutS3 = () => {
    return (
        <section className="about_section_s3 pt-0 service_section_s3 section-padding">
            <div className="container mb-3">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6  col-12 mt-4 ">
                            <div >
                                <img className='ImageTravaille' src={Ab3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6  col-12 mt-2 about_left " >
                            <div className="content">
                                <p>Le laboratoire Delage, fort de ses 63 ans d'expérience, est un partenaire de confiance pour les praticiens dentaires recherchant qualité et fiabilité. Nous sommes à l'écoute de vos besoins, offrant un accompagnement sur mesure pour chaque projet. Notre expertise nous permet de proposer des prises de teintes directement au laboratoire, garantissant des prothèses parfaitement adaptées aux spécificités de chaque patient. Toujours disponibles et réactifs, nous sommes joignables par téléphone, par mail, et même sur WhatsApp, afin de vous offrir un service client accessible et personnalisé.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <PageBaground  />
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6  col-12 mt-4 " >
                            <div className="content">
                            <p>Plus de quarante chirurgiens-dentistes nous font déjà confiance. Nous sommes également engagés dans une démarche éco-responsable, avec des pratiques telles que le tri sélectif et la réduction de notre consommation d'énergie. Nous croyons en une approche durable de notre métier, en minimisant notre impact sur la Terre.</p>

                                <p>Notre engagement va au-delà de la simple fabrication de prothèses. En tant que sponsor du bateau Milaï lors de la transat Jacques Vabre, nous incarnons l'esprit de défi et de dépassement. Choisir de travailler avec le laboratoire Delage, c'est s'associer à un partenaire expérimenté et innovant, dévoué à la réussite de votre cabinet, tout en contribuant à un avenir plus respectueux de l'environnement.
                                </p>


                            </div>
                        </div>

                        <div className="col-lg-6  col-12 mt-4 about_left  ">
                            <div >
                                <img className='ImageTravaille1' src={Ab3} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default aboutS3;