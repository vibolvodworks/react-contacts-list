import NewContactForm from "./NewContactForm";

const NewContact = ({ editContact, onEditContact, onSaveNewContact }) => {
  const onSaveContactHandler = (contact) => {
    onSaveNewContact(contact);
  };
  const onEditContactHandler = (contact) => {
    onEditContact(contact);
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <NewContactForm
          id={editContact.id}
          name={editContact.name}
          email={editContact.email}
          phone={editContact.phone}
          onEditContact={onEditContactHandler}
          onSaveContact={onSaveContactHandler}
        />
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default NewContact;
