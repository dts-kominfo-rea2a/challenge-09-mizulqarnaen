import './App.css';
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className='contact-list'>
        {/* Hardcode */}
        <Contact photo={contacts[0].photo} name={contacts[0].name} phone={contacts[0].phone} email={contacts[0].email} />
        <Contact photo={contacts[1].photo} name={contacts[1].name} phone={contacts[1].phone} email={contacts[1].email} />
        <Contact photo={contacts[2].photo} name={contacts[2].name} phone={contacts[2].phone} email={contacts[2].email} />
        <Contact photo={contacts[3].photo} name={contacts[3].name} phone={contacts[3].phone} email={contacts[3].email} />
        <Contact photo={contacts[4].photo} name={contacts[4].name} phone={contacts[4].phone} email={contacts[4].email} />
        <Contact photo={contacts[5].photo} name={contacts[5].name} phone={contacts[5].phone} email={contacts[5].email} />
      </div>
    </div>
  );
}

export default App;
