import React from 'react';

import { Container } from './Container';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

const App = () => {
  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Container>
  );
};


export { App };