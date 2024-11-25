import React from 'react';

import Ab2 from '../../images/ReactNew/Notre7Histoire.jpg'

const aboutS3 = () => {
    return (
        <section className="about_section_s3 pt-0 service_section_s3 section-padding">
          
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 mt-2 ">
                            <div className="content">
                                <h3 style={{padding:'22px',fontSize:'75px'}}>Le laboratoire Loir</h3>
                                <p style={{padding:'22px',textAlign:'justify' ,marginTop:'-20px'}}>Le Laboratoire Loir, fondé en 2003 par Christophe Loir, était spécialisé dans la prothèse conjointe, l’esthétique et l’implantologie. Avec une structure à taille humaine de trois personnes, le laboratoire s'est distingué par son approche artisanale et ses travaux sur mesure, répondant aux besoins spécifiques des praticiens et de leurs patients. Avant de créer son propre laboratoire, Christophe Loir a acquis une expertise précieuse en tant que chef de produit à la Société des Cendres, où il a collaboré étroitement avec des prothésistes de renom. Cette expérience a façonné son savoir-faire. Le Laboratoire Loir a été racheté en octobre 2023, marquant un tournant dans son histoire.</p>
                                
                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mt-4 ">
                            <div >
                                <img className='ImageHistoire' src={Ab2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default aboutS3;