import React from "react";
import ContactElement from "../ContactElement/ContactElement";

import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <div className={css.contactContainer}>
  <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <ContactElement
          key={id}
          name={name}
          number={number}
          id={id}
          onRemoveContact={onRemoveContact}
        />
    ))}
    </ul>
  </div>
);

export default ContactList;

