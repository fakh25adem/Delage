import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Footer from '../../components/footer/Footer';
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Logo from '../../images/ReactNew/logoblanc.png'


const ServicePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Pourqoui travailler avec nous ? '} pagesub={'pourquoi travailler avec nous  ?'} />
            <BlogSingle  />
            <Footer hclass={'wpo-site-footer'} />

        </Fragment>
    )
};
export default ServicePage;
