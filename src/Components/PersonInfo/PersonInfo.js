import React from 'react';
import './PersonInfo.css';

export default function PersonInfo(props) {
  return (
    <section className="person-info">
     <h2 className="person-info__header"><b>Выбран пользователь</b> {props.person.firstName + ' ' + props.person.lastName}</h2>
     <p className="person-info__description">
      Описание:
        <textarea class="person-info__textarea">
          {props.person.description}
        </textarea>
     </p>
     <p className="person-info__description">
      Адрес проживания: <b>{props.person.address.streetAddress}</b>
     </p>
     <p className="person-info__description">
      Город: <b>{props.person.address.city}</b>
     </p>
     <p className="person-info__description">
      Провинция/штат: <b>{props.person.address.state}</b>
     </p>
     <p className="person-info__description">
      Индекс: <b>{props.person.address.zip}</b>
     </p>
   </section>
  )
}
