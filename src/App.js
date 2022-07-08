import "./App.css";
import NewContact from "./components/NewContact/NewContact";
import ListContact from "./components/ListContact/ListContact";
import { getDataObjectFromStorage, updateLocalStorage } from "./utils";
import React, { useState } from "react";

function App() {
  const INIT_CONTACT =  {
    id: null,
    name: "",
    phone: "",
    email: "",
  }

  const [contacts, setContacts] = useState(getDataObjectFromStorage());
  const [editContact, setEditContacts] = useState(INIT_CONTACT);
  const onNewContactHandler = (contact) => {
    setContacts((prevContact) => {
      const newContact = [...prevContact, contact];
      updateLocalStorage(newContact);
      return newContact;
    });
  };
  const onEditContactHandler = (editContact) => {
    setEditContacts(INIT_CONTACT);
    let contactsUpdated = contacts.map((contact) => {
      if (contact.id === editContact.id) {
        return editContact;
      }

      return contact;
    });
    setContacts(contactsUpdated);
    updateLocalStorage(contactsUpdated);
  };
  const onDeleteHandler = (id) => {
    let contactsAfterRemove = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(contactsAfterRemove);
    updateLocalStorage(contactsAfterRemove);
  };

  const onEditHandler = (contact) => {
    setEditContacts(contact);
  };
  return (
    <div className="container">
      <NewContact
        editContact={editContact}
        onEditContact={onEditContactHandler}
        onSaveNewContact={onNewContactHandler}
      />
      <ListContact
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
        contactDatas={contacts}
      />
    </div>
  );
}

export default App;
