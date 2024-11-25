import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/ReactNew/logoblanc.png'


const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Contact'} pagesub={'Contact'} />
            <Contactpage />
            <Footer hclass={'wpo-site-footer_s2'} />
            {/* <Scrollbar /> */}
        </Fragment>
    )
};
export default ContactPage;

