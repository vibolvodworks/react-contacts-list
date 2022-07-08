const ContactItem = ({ id, index, name, phone, email, date, onEdit, onDelete }) => {
  const onDeleteHandler = () => {
    onDelete(id);
  };
  const onEditHandler = () => {
    onEdit({ id, index, name, phone, email, date });
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{name} </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>
        <button onClick={onEditHandler} className="btn btn-success" type="button">
          Edit
        </button>
        <button onClick={onDeleteHandler} className="btn btn-danger" type="button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
