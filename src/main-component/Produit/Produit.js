import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/ReactNew/logoblanc.png'


const Produit = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Nos produits'} pagesub={'Nos produits'} />
            <About hclass={'about_section section-padding s4'} />
            <Footer hclass={'wpo-site-footer'} />
        </Fragment>
    )
};
export default Produit;
