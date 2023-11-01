
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

import { nanoid } from 'nanoid';

import css from './App.module.css'


export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

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
  
  

  const handleAddContact = (name, number) => {

     if (contacts.find(contact => contact.name === name)) {
      alert(`${name}  is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  
    setContacts(prevState => [...prevState, contact]);
  };


  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId))
  };

const changeFilter = filter => {
  setFilter(filter);
  };

  const visibleContacts = () => {
    // const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  // const { filter } = filter;
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