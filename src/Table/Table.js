import React from 'react';
import './Table.css';

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th onClick={props.sort.bind(null, 'id')} className="table__column-name">
          ID
          {props.field == 'id' ? <span>{props.sort_dir}</span> : null}
          </th>
          <th onClick={props.sort.bind(null, 'firstName')} className="table__column-name">
          First Name
          {props.field == 'firstName' ? <span>{props.sort_dir}</span> : null}
          </th>
          <th onClick={props.sort.bind(null, 'lastName')} className="table__column-name">
          Last Name
          {props.field == 'lastName' ? <span>{props.sort_dir}</span> : null}
          </th>
          <th onClick={props.sort.bind(null, 'email')} className="table__column-name">
          Email
          {props.field == 'email' ? <span>{props.sort_dir}</span> : null}
          </th>
          <th onClick={props.sort.bind(null, 'phone')} className="table__column-name">
          Phone
          {props.field == 'phone' ? <span>{props.sort_dir}</span> : null}
          </th>
        </tr>
      </thead>
      { props.data.map(person => (
        <tbody>
          <tr key={person.id + person.phone}>
            <td className="table__cell">{person.id}</td>
            <td className="table__cell">{person.firstName}</td>
            <td className="table__cell">{person.lastName}</td>
            <td className="table__cell">{person.email}</td>
            <td className="table__cell">{person.phone}</td>
          </tr>
        </tbody>
      ))}
    </table>
  )
}
