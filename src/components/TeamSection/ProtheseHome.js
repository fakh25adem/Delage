import React from 'react';
function Protheses() {
  return (
   
      <div className="row" style={{padding:'20px'}}>
        {/* Bloc 1 */}
        <div className="col-md-6 col-lg-4 ">
        <a href='/conjointes'>   <div
            className="prothese-card  d-flex align-items-center justify-content-center text-center"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
             
              color: 'white',
              fontWeight: 'bold',
            }}
          >

            <h3  style={{
              color: 'white', fontSize:'40px'
            }} >Prothèses Conjointes</h3>
           
          </div>
          </a>
        </div>

        {/* Bloc 2 */}
        <div className="col-md-6 col-lg-4 ">
        <a href='/adjointes'><div
            className="prothese-card2  d-flex align-items-center justify-content-center text-center"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',             
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            <h3 style={{
              color: 'white',fontSize:'40px'
            }}>Prothèses Adjointes</h3>
          </div>
          </a>
        </div>

        {/* Bloc 3 */}
        <div className="col-md-6 col-lg-4">
        <a href='/orthodontiques'><div
            className="prothese-card3  d-flex align-items-center justify-content-center text-center"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            <h3 style={{
              color: 'white',fontSize:'40px'
            }}>Appareils Orthodontiques</h3>
          </div>
          </a>
        </div>
      </div>
   
  );
}

export default Protheses;
