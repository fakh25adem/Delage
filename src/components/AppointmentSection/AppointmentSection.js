import React ,{useState} from 'react';
import Image from '../../images/ReactNew/image3.jpg'


const AppointmentSection = () => {
    const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche
    const services = [
        "Dental Care",
        "Orthopedic",
        "Pharmacology",
        "Genealogy",
        "Rehabilitation",
        "Heart Surgery",
    ]; // Liste des services

    // Fonction pour gérer la saisie dans la barre de recherche
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtrer les services en fonction du texte saisi
    const filteredServices = services.filter((service) =>
        service.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="container my-5">
        <div className="row align-items-center">
            {/* Image et description principale */}
            <div className="col-md-8 col-lg-8">
                <div >
                    <img
                        src={Image}
                        className="card-img-top ImageService"
                        alt="Dental Care"
                    />

                </div>
            </div>

            {/* Liste des services */}
            <div className="col-md-4 col-lg-4">
                <div className="">
                    <div className="card-body">
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Rechercher un service..."
                            style={{
                                padding: '12px',
                                background: 'white',
                                border:'none',
                                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)', // Box-shadow corrigé
                                borderRadius: '10px',
                              }}                                    value={searchTerm}
                            onChange={handleSearch} // Mise à jour du texte recherché
                        />
                        <h5
                            style={{
                                fontSize: "40px",
                                color: "#000B47",
                                margin: "0",
                                position: "relative",
                                fontFamily: "Katibeh",
                                fontWeight: "400",
                            }}
                            className="card-title"
                        >
                            Services
                        </h5>
                        <hr style={{
                            border: 'none',
                            height: '4px',
                            background: 'linear-gradient(to right, #238bd6 30%, #f5f5f5 30%)'
                        }}></hr>

                        <ul className="list-group list-group-flush mt-3">
                            {filteredServices.length > 0 ? (
                                filteredServices.map((service, index) => (
                                    <li style={{fontSize:'14px'}} key={index} className="mt-3">
                                        {service}
                                    </li>
                                ))
                            ) : (
                                <li className="">Aucun service trouvé</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentSection;