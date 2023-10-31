
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

import { nanoid } from 'nanoid';

import css from './App.module.css'


export const App = () => {

  const [contacts, setContacts] = useState('');

// componentDidMount() {
    
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });

//     }
//   }
  
//   componentDidUpdate(prevProps, prevState) {

//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
//     }
// }
  
  

  const handleAddContact = (contact) => {
    const isContacts = contacts.some(
      ({ text }) => text.toLowerCase() === contact.text.toLowerCase()
    );
  

    if (isContacts) {
      alert(`${contact.text} is already in contacts`);
      return;
    }
    setContacts(prevContacts => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevContacts],
    }));
  }
  
 const visibleContacts = (contact) => {
   return contact;
   
  };



const changeFilter = event => {
   setContacts({ filter: event.target.value });
  };


const removeContact = contactId => {
    setContacts(prevContacts=> {
  return {
   contacts: prevContacts.filter(({ id }) => id !== contactId),
      };
    });
  };


if (contacts!== setContacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
 

    const visContacts = visibleContacts();

  return (
    <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit ={handleAddContact} />
            <h2 className={css.titleContacts}>Contacts</h2>
           {contacts.length > 0 ? (
        <Filter onChangeFilter={changeFilter} />
              ) : (
          <p className={css.noContacts}>&#128064;Add your first contact! Your phonebook is empty.&#128064;</p>
               )}
              {contacts.length > 0 && (
        <ContactList
            contacts={visContacts}
            onRemoveContact={removeContact}
          />
        )}
    </div>
    )
  }
