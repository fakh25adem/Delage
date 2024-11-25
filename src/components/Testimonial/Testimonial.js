import React ,{useState} from 'react';
import Insta from '../../images/ReactNew/image1.jpg'


const AppointmentSection = () => {
   
   
    return (
        <div className="">
        <div className="row mx-5">
            {/* Image et description principale */}
            <div className="col-md-7 col-lg-7 mt-3">
            <div className="content">
            <h5
                            style={{
                                fontSize: "45px",
                                color: "#000B47",
                                margin: "0",
                                position: "relative",
                                fontFamily: "Katibeh",
                                fontWeight: "400",
                            }}
                            className="card-title"
                        >
                            Dental care
                        </h5>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                </p>


                            </div>
            </div>

            {/* Liste des services */}
            <div className="col-md-5 col-lg-5">
                <div className="">
                    <div className="card-body">
                      
                        <h5
                            style={{
                                fontSize: "45px",
                                color: "#000B47",
                                margin: "0",
                                position: "relative",
                                fontFamily: "Katibeh",
                                fontWeight: "400",
                            }}
                            className="card-title"
                        >
                            Instagram
                        </h5>
                        <hr style={{
                            border: 'none',
                            height: '4px',
                            background: 'linear-gradient(to right, #238bd6 30%, #f5f5f5 30%)'
                        }}></hr>
                         <div className="row">
                         <div className="col-md-6 col-lg-4 mt-3">
                         <img
                         
                        src={Insta}
                        className="card-img-top ImageInsta"
                        alt="Dental Care"
                     
                    />
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 ">
                         <img
                        src={Insta}
                        className="ImageInsta card-img-top"
                        alt="Dental Care"
                    />
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                         <img
                        src={Insta}
                        className="ImageInsta card-img-top"
                        alt="Dental Care"
                    />
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                         <img
                        src={Insta}
                        className=" ImageInsta card-img-top"
                        alt="Dental Care"
                    />
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                         <img
                        src={Insta}
                        className="ImageInsta card-img-top"
                        alt="Dental Care"
                    />
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                         <img
                        src={Insta}
                        className="ImageInsta card-img-top"
                        alt="Dental Care"
                    />
                    </div>
                    
                    
                           
                         </div>

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentSection;