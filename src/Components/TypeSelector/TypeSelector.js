import React from 'react';

export default function TypeSelector(props) {
  return (
    <section className="buttons">
      <button onClick={props.select.bind(null, props.type.small)} className="buttons__btn buttons__btn--small">Small amount</button>
      <button onClick={props.select.bind(null, props.type.large)} className="buttons__btn buttons__btn--large">Large amount</button>
    </section>
  )
}
