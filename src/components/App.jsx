import React, { useEffect } from "react";
import { Form } from "./FormComp/Form";
import { Filter } from "./Filter/Filter";
import ConractList from "./ContactList/ContactList";
import css from './app.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const formData = data => {
  if (contacts.find(({ name }) => name === data.name)) {
    return toast.info(`${data.name} is already in contacts`);
  };
    
  setContacts(prevState => ([...prevState, data]));
  }

  const filterInput = data => {
    setFilter(data);
  };

  const deletContact = name => {
    let i = contacts.findIndex(contact => contact.name === name);
    contacts.splice(i, 1);
    if (contacts === []) {
      return setContacts([]);
    }
    setContacts([...contacts]);
  }

  function filterContact(array) {
    return array.filter(({ name }) => (name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
  };

  return (
      <>
        <h1 className={css['text']}>Phonebook</h1>

        <Form onSubmit={formData} />
        
        <h2 className={css['text']}>Contacts</h2>
        
        <Filter onChange={filterInput} />
        
        {contacts.length > 0 && (<ConractList arr={filterContact(contacts)}
          onDeletContact={deletContact} />)}
        
        <ToastContainer />

      </>
    )
}