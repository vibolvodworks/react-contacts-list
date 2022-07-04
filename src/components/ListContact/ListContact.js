import ContactItem from "./ContactItem";

const ListContact = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <table id="list-contact" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th width="15%" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.contactDatas.map((contact, index) => {
              return (
                <ContactItem
                  onEdit={props.onEdit}
                  onDelete={props.onDelete}
                  index={index + 1}
                  id={contact.id}
                  key={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  email={contact.email}
                  date={contact.date}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListContact;
