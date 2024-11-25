import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        prenom: '',
        object: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                prenom: '',
                object: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
            <div className="row">
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
                    Nous Contacter
                </h5>
                <div className="col-lg-6">
                    <div className="form-field">
                        <input
                            style={{ borderColor: '#e6f7fb' }}
                            value={forms.name}
                            type="text"
                            name="nom"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Nom"
                        />
                        {validator.message('nom', forms.name, 'required|alpha_space')}
                    </div>
                    <div className="form-field mt-3">
                        <input
                            style={{ borderColor: '#e6f7fb' }}
                            value={forms.prenom}
                            type="text"
                            name="prenom"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Prénom"
                        />
                        {validator.message('prenom', forms.prenom, 'required|alpha_space')}
                    </div>
                    <div className="form-field mt-3">
                        <input
                            style={{ borderColor: '#e6f7fb' }}
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Email"
                        />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>

                {/* Partie droite */}
                <div className="col-lg-6">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.object}
                        type="text"
                        name="object"
                        placeholder="Object"
                        className="form-control"
                        style={{ height: '90%',borderColor: '#e6f7fb' }}
                    />
                    {validator.message('object', forms.object, 'required')}
                </div>
            </div>

            {/* Bouton envoyer */}
            <div className="submit-area mt-4">
                <button type="submit" className="theme-btn">Envoyer</button>
            </div>
        </form>

    )
}

export default ContactForm;