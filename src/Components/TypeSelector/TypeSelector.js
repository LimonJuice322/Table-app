import React from 'react';
import './TypeSelector.css'

export default function TypeSelector(props) {
  return (
    <section className="buttons">
      <p className="buttons__description">
        Chose dataset
      </p>
      <button onClick={props.select.bind(null, props.type.small)} className="buttons__btn buttons__btn--small">Small dataset</button>
      <button onClick={props.select.bind(null, props.type.large)} className="buttons__btn buttons__btn--large">Large dataset</button>
    </section>
  )
}
