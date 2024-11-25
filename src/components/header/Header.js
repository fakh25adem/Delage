import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons";


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;


    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-4 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={props.Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1  " >
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link style={{ color: 'white' }} onClick={ClickHandler} to="/">ACCUEIL</Link>

                                        </li>
                                        <li><Link style={{ color: 'white' }} onClick={ClickHandler} to="/produit">NOS PRODUITS</Link></li>
                                        <li><Link style={{ color: 'white' }} onClick={ClickHandler} to="/histoire">NOTRE HISTOIRE</Link></li>

                                        <li><Link style={{ color: 'white' }} onClick={ClickHandler} to="/contact">CONTACT</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-2">
                                <div className="header-right">

                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button
                                                //onClick={() => setMenuState(!menuActive)}
                                                className="profile-toggle-btn"
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                <FontAwesomeIcon style={{ color: 'white' }}  icon={faUser } />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);