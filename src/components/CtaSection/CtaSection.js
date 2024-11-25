import React from 'react';
import Ctaimg from '../../images/ReactNew/senna.png'

const CtaSection = (props) => {
    return (
        <section className={"" + props.tClass }>
            <div className="container">
                <div className="cta_wrapper">
                    <div className="content">
                        <div className="icon">
                            <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="text">
                            <h2>Contactez-nous</h2>
                            <h3 style={{fontSize:'48px'}}>(+33) 2 35 60 0189</h3>
                        </div>
                    </div>
                    <div className="shape-icon">
                        <i className="flaticon-24-7"></i>
                    </div>
                    <div className="image">
                        <img src={Ctaimg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;