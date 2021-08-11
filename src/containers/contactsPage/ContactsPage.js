import React, { useState, useEffect } from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  // Add prop values
  const contacts = props.contacts;
  const addContact = props.addContact;
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isDuplicate, setIsDuplicate] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(!isDuplicate) {
      addContact(name, phone, email);
      // clear data after success submission
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect( () => {
    if(contacts) {
      contacts.map((contact, i) => {
        if (name === contact.name) {
          setIsDuplicate(true);
        }
        return;
      });
    }

  });

  return (
    <div>
      <section>
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          objArr={props.contacts}
        />
      </section>
    </div>
  );
};
