import "./App.css";
import NewContact from "./components/NewContact/NewContact";
import ListContact from "./components/ListContact/ListContact";
import React, { useState } from "react";

function App() {
  const INIT_CONTACT =  {
    id: null,
    name: "",
    phone: "",
    email: "",
  }
  const getDataObjectFromStorage = () => {
    let inputObjectString = localStorage.getItem("contactsInfo");
    if (inputObjectString == null) {
      inputObjectString = "[]";
    }

    return JSON.parse(inputObjectString);
  };
  const [contacts, setContacts] = useState(getDataObjectFromStorage());
  const [editContact, setEditContacts] = useState(INIT_CONTACT);
  const onNewContactHandler = (contact) => {
    setContacts((prevContact) => {
      const newContact = [contact, ...prevContact];
      localStorage.setItem("contactsInfo", JSON.stringify(newContact));
      return newContact;
    });
  };
  const onEditContactHandler = (inputData) => {
    setEditContacts(INIT_CONTACT);
    let contactsUpdated = contacts.map((contact) => {
      if (contact.id === inputData.id) {
        return inputData;
      }

      return contact;
    });
    setContacts(contactsUpdated);
    localStorage.setItem("contactsInfo", JSON.stringify(contactsUpdated));
  };
  const onDeleteHandler = (id) => {
    console.log(id);
    let contactsAfterRemove = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(contactsAfterRemove);
    localStorage.setItem("contactsInfo", JSON.stringify(contactsAfterRemove));
  };

  const onEditHandler = (contact) => {
    setEditContacts(contact);
  };
  return (
    <div className="container">
      <NewContact
        editContact={editContact}
        onEditContactHandler={onEditContactHandler}
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
