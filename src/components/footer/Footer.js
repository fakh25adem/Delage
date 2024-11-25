import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/ReactNew/logo.png'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {

    return (
        <footer className={"" + props.hclass}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={logo} alt="blog" />
                                </div>
                                <p style={{textAlign:'justify'}}>Chez Delage, nous allions expertise et innovation pour créer des prothèses dentaires qui offrent confort et précision. Chez Delage, nous allions expertise et innovation pour créer des prothèses dentaires qui offrent confort et précision. </p>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Accès direct</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Accueil</Link></li>
                                    <li><Link onClick={ClickHandler} to="/produit">Nos produits</Link></li>
                                    <li><Link onClick={ClickHandler} to="/histoire">Notre histoire</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Maps</h3>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26244797.485615324!2d2.2137499!3d46.2276381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b1bb%3A0xd6574c9e0e83c700!2sFrance!5e0!3m2!1sfr!2stn!4v1600000000000!5m2!1sfr!2stn"
                                        width="90%"
                                        height="250px"
                                        style={{ border: '0' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Carte France"
                                    ></iframe>
                                </div>

                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contactez nous</h3>
                                </div>
                                <ul>
                                    <li><i className="flaticon-email"></i><span>secretariat@laboratoire-delage.fr</span>
                                    </li>
                                    <li> <i className="flaticon-telephone"></i><span>(+33)  2 35 60 01 89
                                    </span></li>
                                    <li><i className="flaticon-location-1"></i><span>Rue Gustave Eiffel,

                                        76230 <br /> Bois-Guillaume</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2024 Delage</p> 
                        </div>
                        <div className="col col-lg-6 col-12">
                            {/* <ul>
                                <li><Link onClick={ClickHandler} to="/privace">Privace & Policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/terms">Terms</Link></li>
                                <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;







