// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='card'>
            <img className='contact-photo' src={props.photo} alt='Foto Kontak'></img>
            <div className='contact-data'>
                <p className='name'>{props.name}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact;