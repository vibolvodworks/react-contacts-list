import NewContactForm from "./NewContactForm";

const NewContact = (props) => {
  const onSaveContactHandler = (contact) => {
    props.onSaveNewContact(contact);
  };
  const onEditContactHandler = (contact) => {
    props.onEditContactHandler(contact);
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <NewContactForm
          id={props.editContact.id}
          name={props.editContact.name}
          email={props.editContact.email}
          phone={props.editContact.phone}
          onEditContact={onEditContactHandler}
          onSaveContact={onSaveContactHandler}
        />
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default NewContact;
