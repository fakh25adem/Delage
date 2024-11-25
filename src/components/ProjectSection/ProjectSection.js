import React from 'react';

import Ab2 from '../../images/ReactNew/Historique22.jpg'

const ProjectSection = () => {
    return (
        <section style={{ background: '#144968' }} className="about_section_s3 pt-0  section-padding">
            
                <div style={{ background: '#144968' }} >
                    <div  className="row align-items-center">
                    <h3 style={{ color: 'white',fontSize:'75px',padding:'35px' }}>Le laboratoire Dentaltec</h3>

                        <div className="col-lg-6 col-12 mt-4 ">
                            <div className='content' >
                                <img className='ImageHistoire2' src={Ab2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mt-2  mt-4 ">
                            <div style={{ textAlign:'justify',padding:'15px' }} className='content' >
                               
                                <p style={{ color: 'white' }}> Monsieur Laurent Hupel avait fondé le Laboratoire Hupel à Montville en 1988, qu'il dirigea avec succès jusqu'en 2013. C’est avec l’arrivée de Monsieur Julien Finet en avril 2013 que le Laboratoire Dentaltec voit le jour. Ce dernier s'est rapidement imposé comme un acteur clé dans la fabrication de prothèses adjointes et conjointes. Dentaltec, fruit de cette expertise, a poursuivi cette tradition d’excellence, alliant savoir-faire artisanal et technologies modernes. Le laboratoire a été racheté en juillet 2023.</p>


                            </div>
                        </div>

                    </div>
                </div>
            
        </section>
    );
};

export default ProjectSection;