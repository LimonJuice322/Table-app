import React, { useState } from 'react';
import './AddElement.css';

export default function Add(props) {
  const [id, set_id] = useState('');
  const id_change = (event) => {
    set_id(event.target.value)
  }

  const [first_name, set_first_name] = useState('');
  const first_name_change = (event) => {
    set_first_name(event.target.value)
  }

  const [last_name, set_last_name] = useState('');
  const last_name_change = (event) => {
    set_last_name(event.target.value);
  }

  const [email, set_email] = useState('');
  const email_change = (event) => {
    set_email(event.target.value)
  }

  const [phone, set_phone] = useState('');
  const phone_change = (event) => {
    set_phone(event.target.value)
  }

  let new_person = {
    id: id,
    firstName: first_name,
    lastName: last_name,
    email: email,
    phone: phone
  }

  const show_form = (event) => {
    event.target.hidden = true;
    event.target.nextSibling.hidden = false;
    document.querySelector('.add-element__btn--close').hidden = false;
  }

  const close_form = (event) => {
    event.target.hidden = true;
    event.target.previousSibling.hidden = true;
    document.querySelector('.add-element__btn--show').hidden = false;
  }

  return (
    <div className="add-element">
      <button onClick={show_form} className="add-element__btn add-element__btn--show">Add person</button>
      <form className="add-element__form" hidden>
        <h2 className="add-element__header">Add new person to table</h2>
        <p className="add-element__data">
          <label className="add-element__label">ID</label>
          <input onChange={id_change} value={id} type="text" className="add-element__input"/>
        </p>
        <p className="add-element__data">
          <label className="add-element__label">First Name</label>
          <input onChange={first_name_change} value={first_name} type="text" className="add-element__input"/>
        </p>
        <p className="add-element__data">
          <label className="add-element__label">Last Name</label>
          <input onChange={last_name_change} value={last_name} type="text" className="add-element__input"/>
        </p>
        <p className="add-element__data">
          <label className="add-element__label">Email</label>
          <input onChange={email_change} value={email} type="text" className="add-element__input"/>
        </p>
        <p className="add-element__data">
          <label className="add-element__label">Phone</label>
          <input onChange={phone_change} value={phone} type="text" className="add-element__input"/>
        </p>
        <button disabled={!new_person.id || !new_person.firstName || !new_person.lastName || !new_person.email || !new_person.phone} onClick={() => props.add(new_person)} className="add-element__btn">Add to table</button>
      </form>
      <button onClick={close_form} hidden className="add-element__btn add-element__btn--close">Close form</button>
    </div>
  )
}
