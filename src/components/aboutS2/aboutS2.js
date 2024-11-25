import React from 'react';

import Ab2 from '../../images/ReactNew/historique33.jpg'

const aboutS3 = () => {
    return (
        <section className="about_section_s3 pt-0 service_section_s3 section-padding">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-9  col-12 mt-2 ">
                            <div className="content">
                                <h3 style={{ fontSize:'75px',padding:'22px' }}>La fusion</h3>
                                <p style={{padding:'22px',textAlign:'justify' ,marginTop:'-20px'}}>Les Laboratoires Delage, Loir et Dentaltec ont fusionné en 2023 pour créer un partenariat stratégique, renforçant leur expertise collective dans le domaine de la prothèse dentaire. Cette alliance permet de combiner les forces complémentaires des trois laboratoires : l'innovation technologique, la précision artisanale, et une spécialisation en esthétique, implantologie, ainsi que dans les prothèses conjointes et adjointes. En unissant leurs compétences, ils offrent désormais aux praticiens une solution globale, plus performante et sur mesure, tout en garantissant un niveau de qualité inégalé et une réactivité accrue.</p>
                                
                                
                            </div>
                        </div>
                        <div className="col-lg-3  col-12 mt-4 ">
                            <div >
                                <img className='ImageHistoire3' src={Ab2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default aboutS3;