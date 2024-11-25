import React from 'react';
import maps from '../../images/ReactNew/mapsss.png'
const LocationSection = () => {
  return (
    <div className=" py-5" style={{ backgroundColor: '#eaf6ff' }}>
      <div className="row align-items-center">
       
        <div className="col-md-6 text-center text-md-start">
        <center>
          <h2 className="mb-4" style={{ fontSize:'80px', color: '#003366', fontWeight: 'bold' }}>
            Où nous trouver ?
          </h2>
          <div
            className="p-3 "
          
          >
            <p style={{ fontSize:'17px', color: 'black' }} className="mb-2">
            Rue Gustave Eiffel,
              <br />
              76230 Bois-Guillaume
            </p>
            <p style={{ fontSize:'17px', color: 'black' }} className="mb-1">
              Téléphone : 02 35 61 20 45 
            </p>
            <p style={{ fontSize:'17px', color: 'black' }}className="mb-0">
              Email :  secretariat@laboratoire-delage.fr
              
              
            </p>
          </div>
          </center>
        </div>
        {/* Bloc droit : Carte */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={maps} // Remplacez cette URL par l'URL de votre carte
            alt="Carte"
            className="img-fluid rounded shadow-sm ImageMaps"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
