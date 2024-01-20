import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './Container';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { addContact, removeContact, setFilter } from '../redux/contacts/contactsReducer'


const App = () => {


  const dispatch = useDispatch();

  const contacts = useSelector((store) => store.contacts.contacts);
  const filter = useSelector(store => store.contacts.filter);  

  const createContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
    ))
    {
      return alert(`${name} is already in phonebook`);
    }

    const action = addContact(contact);
    dispatch(action);
  };

  const deleteContact = contactId => {
    
    const action = removeContact(contactId)
    dispatch(action);
  }

  const changeFilter = event => {

    const action = setFilter(event.currentTarget.value);
    dispatch(action);
  }

  const getVisisbleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getVisisbleContacts();
  
  return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={createContact} />
        <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
      />
      </Container>
    );
};


export { App };