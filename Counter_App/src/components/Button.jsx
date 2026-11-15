import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="btn" onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  )
}

export default Button
