import React from 'react';
import Ctaimg from '../../images/cta.png'
import Services from "../../api/Services";
import { Link } from 'react-router-dom'

const CtaSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      
      <section className="section-padding related-service bg-blue-dent">
  <div className="container">
<center>
          <h2
            style={{
              backgroundColor: '#fff', // Fond blanc
              padding: '20px', // Espace intérieur
              borderRadius: '10px', // Coins arrondis
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Ombre
              display: 'inline-block', // Nécessaire pour centrer uniquement le texte
              color: '#000b47', // Couleur du texte
              fontSize: '40px', // Taille du texte
              marginBottom: '40px', // Espacement en bas
            }}
            className="section-title"
          >
            Related Service
          </h2>
        </center>    <div className="row">
      {Services.slice(0, 3).map((servic, sky) => (
        <div className=" col-lg-4 col-md-6 col-sm-6  col-12" key={sky}>
          <div className="service_card_adjoint mx-5">
            <div className="icon">
              <i className={servic.icon}></i>
            </div>
            <div className="content mt-5">
              <h3 className="service-title">{servic.title}</h3>
              <p >{servic.description}</p>
              <Link onClick={ClickHandler} to={`/service-single/${servic.slug}`} className="arrow-link">
                <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
                 
                
              
    );
};

export default CtaSection;