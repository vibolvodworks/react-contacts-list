import "./NewContactForm.css";
import React, { useRef, useState } from "react";
import FormError from "./FormError";
import { IsEmailValid, IsPhoneValid } from "../../utils/validator";

const NewContactForm = ({
  id, name, phone, email, onEditContact, onSaveContact
}) => {
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  if (nameInputRef.current) {
    nameInputRef.current.value = name;
    phoneInputRef.current.value = phone;
    emailInputRef.current.value = email;
  }
  const isEdit = id != null;
  const onSubmitHandler = (event) => {
    let name = nameInputRef.current.value;
    let phone = phoneInputRef.current.value;
    let email = emailInputRef.current.value;
    if (FormValidation(name, phone, email)) {
      const contact = {
        id: Math.random().toString(),
        name: name,
        phone: phone,
        email: email,
        date: new Date().toLocaleString("en-GB"),
      };
      if (isEdit) {
        contact.id = id;
        onEditContact(contact);
      } else {
        onSaveContact(contact);
      }
    }
    event.preventDefault();
  };

  const FormValidation = (name, phone, email) => {
    let nameMsg = "";
    let phoneMsg = "";
    let emailMsg = "";
    if (name.length === 0) {
      nameMsg = "Phone is require!";
    } else {
      nameMsg = "";
    }
    if (phone.length === 0) {
      phoneMsg = "Phone is require!";
    } else if (!IsPhoneValid(phone)) {
      phoneMsg = "Phone is invalid ";
    }
    if (email.length === 0) {
      emailMsg = "Email is require!";
    } else if (!IsEmailValid(email)) {
      emailMsg = "Email is invalid";
    } else {
      emailMsg = "";
    }
    setErrors({
      name: nameMsg,
      phone: phoneMsg,
      email: emailMsg,
    });

    return (
      nameMsg.length === 0 && phoneMsg.length === 0 && emailMsg.length === 0
    );
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      id="contact-form"
      action="#"
      className="form-control add-form"
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="input-name"
          placeholder="Name"
          ref={nameInputRef}
        />
        {errors.name.length > 0 && <FormError message={errors.name} />}
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="input-phone"
          placeholder="Phone"
          ref={phoneInputRef}
        />
        {errors.phone.length > 0 && <FormError message={errors.phone} />}
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="input-email"
          ref={emailInputRef}
          placeholder="jonh@example.com"
        />
        {errors.email.length > 0 && <FormError message={errors.email} />}
      </div>
      <button
        type="submit"
        value=""
        id="button-submit"
        className="btn btn-success btn-lg btn-block"
      >
        Save
      </button>
    </form>
  );
};

export default NewContactForm;
