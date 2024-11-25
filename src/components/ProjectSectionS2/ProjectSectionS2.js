import React from "react";
import { Link } from "react-router-dom";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Projects from "../../api/projects";


const ProjectSectionS2 = (props) => {
    // const settings = {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     responsive: [
    //         {
    //             breakpoint: 1499,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 dots: true,
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 dots: true,
    //                 slidesToShow: 1,
    //                 centerMode: false,
    //             }
    //         },
            

    //     ]
    // };

    return (
        <section className={"" + props.hclass}>
          
            <div className="project_wrapper project_section_slider ">
                <div className="project_slider">
                    <div className="container">
                   <div className="row">
                        {Projects.slice(0, 4).map((project, pitem) => (
                            <div className=" mb-5 col-md-3 col-lg-3 mt-2" key={pitem}>
                             <img className="ImageProjection"  src={project.pimg1} alt="" />
                            
                            </div>
                        ))}
                        </div>
                        </div>
                </div>
            </div>
           
        </section>
    )
}
export default ProjectSectionS2;





