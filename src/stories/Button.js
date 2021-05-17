import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

Button.propTypes = {
  isAchtive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button({ children, isActive, onClick }) {
  return (
    <button onClick={onClick} className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
