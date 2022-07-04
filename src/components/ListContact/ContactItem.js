const ContactItem = (props) => {
  const onDeleteHandler = () => {
   props.onDelete(props.id);
  };
  const onEditHandler = () => {
   props.onEdit(props);
  };
  return (
    <tr>
      <th>{props.index}</th>
      <td>{props.name} </td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.date}</td>
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
