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
            fontSize: '60px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: 'white',
            
        },
     
        link: {
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none',
        },
        linkHover: {
            textDecoration: 'underline',
        },
    };
    return (
        <div className="wpo-breadcumb-area3 mt-2" >

            <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-12">
                 
                        <div style={styles.section}>
                            <div style={styles.container}>
                                <div style={styles.content}>
                                    <h2 style={styles.title}>Pourquoi travailler avec nous  ?</h2>
                                    
                                    <p className='text-fuild'>
                                    Avec 63 ans d’expertise, le laboratoire Delage est le partenaire de confiance des chirurgiens-dentistes : qualité, précision, et accompagnement personnalisé, avec un engagement fort pour un avenir éco-responsable.
                                    </p>
                                    
                                    <a href="/travaille" style={styles.link}>
                                        En savoir plus ...
                                    </a>
                                </div>
                            </div>
                      
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                   
                </div>

            </div>
        </div>

    );
};

export default TeamSection;