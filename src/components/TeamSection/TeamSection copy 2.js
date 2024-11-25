import React from 'react';


const TeamSection = () => {
    const styles = {
        section: {
          background: 'url(/path/to/background-image.jpg) no-repeat center center / cover',
          padding: '60px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          padding: '30px',
          textAlign: 'left',
          position: 'relative',
        },
        logoContainer: {
          fontSize: '50px',
          color: '#003366',
          marginBottom: '20px',
          textAlign: 'left',
        },
        logo: {
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
        },
        title: {
          fontSize: '50px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#003366',
        },
        text: {
          fontSize: '15px',
          textAlign:'justify',
         color: '#003366',
          lineHeight: '1.8',
          marginBottom: '20px',
        },
        link: {
          color: '#003366',
          fontWeight: 'bold',
          textDecoration: 'none',
        },
        linkHover: {
          textDecoration: 'underline',
        },
      };
    return (
        <div className="wpo-breadcumb-area2 mt-2" >
          
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        
                            <div style={styles.section}>
                                <div style={styles.container}>
                                    <div style={styles.content}>
                                        <h2 style={styles.title}>Nos valeurs</h2>
                                        {/* <div style={styles.logoContainer}>
                                            <span style={styles.logo}>“</span>
                                        </div> */}
                                        <p style={styles.text}>
                                            Au Laboratoire Delage, chaque sourire est une histoire de qualité, d'engagement et d'innovation.
                                            Nous travaillons main dans la main avec les praticiens pour offrir des prothèses sur mesure
                                            qui allient précision et esthétique.
                                        </p>
                                        <p style={styles.text}>
                                            Découvrez comment nos valeurs font la différence au quotidien.
                                        </p>
                                        <a href="#" style={styles.link}>
                                            En savoir plus ...
                                        </a>
                                    </div>
                                </div>
                            </div>
                      
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                      
                    </div>

                </div>
            </div>

    );
};

export default TeamSection;