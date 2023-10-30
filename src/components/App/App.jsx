import React, {Component} from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import { nanoid } from 'nanoid';

import css from './App.module.css'


class App extends Component {state = {
contacts: [],
filter: '',
  };

componentDidMount() {
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });

    }
  }
  
  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
}
  
  

  handleAddContact = (contact) => {
    const isContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  

    if (isContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  }
  
 visibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };



changeFilter = event => {
    this.setState({ filter: event.target.value });
  };


removeContact = contactId => {
    this.setState(prevState => {
  return {
   contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };



  render() {
    const { filter } = this.state;
    const visContacts = this.visibleContacts();

  return (
    <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit ={this.handleAddContact} />
            <h2 className={css.titleContacts}>Contacts</h2>
           {this.state.contacts.length > 0 ? (
        <Filter value={filter} onChangeFilter={this.changeFilter} />
              ) : (
          <p className={css.noContacts}>&#128064;Add your first contact! Your phonebook is empty.&#128064;</p>
               )}
              {this.state.contacts.length > 0 && (
        <ContactList
            contacts={visContacts}
            onRemoveContact={this.removeContact}
          />
        )}
    </div>
    )
  }
};

export default App;