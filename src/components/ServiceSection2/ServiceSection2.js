import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";
import BlogList from '../../components/BlogList/BlogList.js'
import { TextField } from '@mui/material/TextField';



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={"" + props.hclass}>
           
               
                <div className="row">
                    {Services.slice(0, 3).map((servic, sky) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sky}>
                            <div className="service_card">
                                <div className="icon">
                                    <i className={servic.icon}></i>
                                </div>
                                <div className="content">
                                    <h2 >{servic.title}</h2>
                                    <p  >{servic.description}</p>
                                    <Link onClick={ClickHandler} to="#"><i className="flaticon-right-arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
           
        </section>
    );
}

export default ServiceSection;




