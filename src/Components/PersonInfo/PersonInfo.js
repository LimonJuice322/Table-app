import React from 'react';
import './PersonInfo.css';

export default function PersonInfo(props) {
  return (
    <section className="person-info">
     <h2 className="person-info__header"><b>Карточка пользователя:</b> {props.person.firstName + ' ' + props.person.lastName}</h2>
     <p className="person-info__description">
     <b>Адрес:</b> {
       props.person.address.state + ', '
       + props.person.address.city + ', '
       + props.person.address.streetAddress + ', '
       + props.person.address.zip
     }
     </p>
     <p className="person-info__description">
      <b>Телефон:</b> {props.person.phone}
     </p>
     <p className="person-info__description">
      <b>Email:</b> {props.person.email}
     </p>
     <p className="person-info__description">
      <b>Описание:</b> {props.person.description}
     </p>
   </section>
  )
}
