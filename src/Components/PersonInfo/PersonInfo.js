import React from 'react';

export default function PersonInfo(props) {
  return (
    <section className="person-info">
     <h2 className="person-info__header">Карточка пользователя: {props.person.firstName + ' ' + props.person.lastName}</h2>
     <p className="person-info__description">
     Адрес: {
       props.person.address.state + ', '
       + props.person.address.city + ', '
       + props.person.address.streetAddress + ', '
       + props.person.address.zip
     }
     </p>
     <p className="person-info__description">
      Телефон: {props.person.phone}
     </p>
     <p className="person-info__description">
      Email: {props.person.email}
     </p>
     <p className="person-info__description">
      Описание: {props.person.description}
     </p>
   </section>
  )
}
