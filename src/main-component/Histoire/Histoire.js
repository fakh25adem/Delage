import React, { Fragment } from 'react';
import Logo from '../../images/ReactNew/logoblanc.png'
import AboutS2 from '../../components/aboutS2/aboutS2.js';
import AboutS3 from '../../components/aboutS3/aboutS3.js';
import Navbar from '../../components/Navbar/Navbar';

import ProjectSection from '../../components/ProjectSection/ProjectSection.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import PageTitle from '../../components/pagetitle/PageTitle.js'

const historyData = [
    {
      year: "1961",
      description:
        "En 1961, le Laboratoire Delage incarne l’héritage d’un savoir-faire d’exception, transmis de génération en génération. Fondé par Roger Delage dans un atelier situé rue Camille Saint-Saëns à Rouen, le laboratoire s’est rapidement forgé une réputation pour la qualité et la précision de ses prothèses dentaires.",
      alignment: "left",
    },
    {
      year: "1974",
      description:
        "En 1974, le laboratoire déménage rue de Fontenelle, toujours à Rouen, pour accompagner sa croissance.",
      alignment: "right",
    },
    {
      year: "1988",
      description:
        "En 1988, un nouveau chapitre s’ouvre avec l’arrivée de Monsieur Christophe Moyaux à la tête de l’entreprise. Visionnaire et déterminé, il poursuit l’œuvre de son prédécesseur tout en apportant une dynamique nouvelle.",
      alignment: "left",
    },
    {
      year: "1992",
      description:
        "En 1992, sous son impulsion, les nouveaux locaux du laboratoire sont construits, permettant d’élargir les capacités de production tout en intégrant des technologies de pointe.",
      alignment: "right",
    },
    {
      year: "2023",
      description:
        "La dernière étape marquante de cette histoire est la fusion en fin 2023 avec deux autres acteurs majeurs du secteur : Dentaltec et Labo Loir.",
      alignment: "left",
    },
  ];

const Histoire = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Notre histoire'} pagesub={'Notre histoire'} />
            <>
      {historyData.map((item, index) => (
        <section
          key={index}
          className="about_section_s3 pt-0 service_section_s3 section-padding"
        >
          <div className="container">
            <div className="wrapper">
              <div className="row align-items-center">
                {item.alignment === "left" ? (
                  <>
                    <div className="col-lg-2 col-12 mt-2">
                      <div className="content">
                        <h3>{item.year}</h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-5">
                      <div className="content">
                        <p style={{textAlign:'justify'}}>{item.description}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-4">
                      <div className="about_left">
                        <p></p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-6 col-12 mt-4">
                      <div className="about_left">
                        <p></p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-5">
                      <div className="content">
                        <p style={{textAlign:'justify'}}>{item.description}</p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-2">
                      <div className="content">
                        <h3>{item.year}</h3>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
            <AboutS3 />        
            <ProjectSection hclass={'project_section_s3 section-padding'} />
            <AboutS2 />   
            <Footer hclass={'wpo-site-footer'} />
            {/* <Scrollbar /> */}
        </Fragment>
    )
};
export default Histoire;