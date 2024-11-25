import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'
import CtaSection from '../../components/CtaSection/CtaSection.js';
import BlocAdjointe from '../../components/BlocAdjointe/BlocAdjointe.js'
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import Logo from '../../images/ReactNew/logoblanc.png'
import PageTitle from '../../components/pagetitle/PageTitle.js'
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2.js';
import AppointmentSection from '../../components/AppointmentSection/AppointmentSection.js'
import Testimonial from '../../components/Testimonial/Testimonial.js'
import ContactForm from '../../components/ContactFromAdjointe/ContactFormAdjointe.js';
const Adjointe = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
             {/* <Hero hclass={'static-hero'} /> */}
    
            <PageTitle pageTitle={'Les prothèses orthodontiques'} pagesub={'Les prothèses orthodontiques'} />

            <AppointmentSection />
            <Testimonial />  

            <ProjectSectionS2 hclass={'project_section_s2 section-padding'} />
          
            <CtaSection tClass={'cta_section mb-5'} />
            <BlocAdjointe tClass={'cta_section mt-5 mb-5'} />
            <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        
                        
                        <div className="contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
         
        </section>
           
            <Footer hclass={'wpo-site-footer'} />
          
        </Fragment>
    )
};
export default Adjointe;