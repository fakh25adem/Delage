import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';


import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
          

            {/* <Testimonial tClass={'testimonial_section testimonial_section_slider section-padding'} />
            <FunFactS2 hclass={'funfact_section_s2'} />
            <TeamSection hclass={'team_section_s2 section-padding'} />
            <CtafromSection hclass={'ctafrom_section_s2'} />
            <BlogSection tClass={'blog_section section-padding'} /> */}
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;