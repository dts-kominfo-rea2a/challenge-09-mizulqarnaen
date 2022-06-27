// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='card'>
            <img className='profile-photo' src={props.photo} alt='Foto Profil'></img>
        </div>
    )
}

export default Contact;