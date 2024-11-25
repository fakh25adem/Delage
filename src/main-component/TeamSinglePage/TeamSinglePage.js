import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom'
import Teams from '../../api/team';
import Navbar from '../../components/NavbarHome/NavbarHome'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import logo from '../../images/ReactNew/logo.png'
import Bloc1 from '../../components/TeamSection/TeamSection'
import Bloc2 from '../../components/TeamSection/TeamSection copy 2'
import Bloc3 from '../../components/TeamSection/TeamSection copy 3'
import Protheses from './../../components/TeamSection/ProtheseHome';
import Contact from '../../components/TeamSection/Contact';


const progressData = [
    { label: 'Successful Surgery', value: 85 },
    { label: 'Satisfied Patients', value: 50 },
    { label: 'Infection Prevention', value: 95 },
    { label: 'Client Rating', value: 70 },
];



const TeamSinglePage = (props) => {

    const { slug } = useParams()
    const TeamSingles = Teams.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <Bloc1></Bloc1>
            <Bloc2></Bloc2>
            <Bloc3></Bloc3>
            <Protheses></Protheses>
            <Contact></Contact>
            <Footer hclass={'wpo-site-footer_s2'} />
            {/* <Scrollbar /> */}
        </Fragment>
    )
};
export default TeamSinglePage;
