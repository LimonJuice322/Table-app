import React from 'react';
import './Table.css';

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__column-name">ID</th>
          <th className="table__column-name">First Name</th>
          <th className="table__column-name">Last Name</th>
          <th className="table__column-name">Email</th>
          <th className="table__column-name">Phone</th>
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
