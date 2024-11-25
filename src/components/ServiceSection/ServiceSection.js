import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { hclass, sliceStart = 0, sliceEnd = 3, showSectionTitle = true, AllServices = true } = props;
    return (
        <section className={hclass}>
            <div className="container">
                {showSectionTitle && (
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-12">
                            <SectionTitle title={"Departmental Services"} subtitle={"Our Medical Services"} />
                        </div>
                    </div>
                )}
                <div className="row">
                    {Services.slice(sliceStart, sliceEnd).map((servic, sky) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sky}>
                            <div className="service_card">
                                <div className="icon">
                                    <i className={servic.icon}></i>
                                </div>
                                <div className="content">
                                    <h2>{servic.title}</h2>
                                    <p>{servic.description}</p>
                                    <a href={`/${servic.slug}`} onClick={ClickHandler} ><i className="flaticon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                  

                </div>
            </div>
        </section>
    );
}

export default ServiceSection;




