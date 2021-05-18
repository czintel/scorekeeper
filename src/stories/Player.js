import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
}

export default function Player({ name, onMinus, onPlus, score }) {
  return (
    <section className="Player">
      <div className="Player__Name">{name}</div>
      <button className="Player__Score__Button" onClick={onMinus}>
        -
      </button>

      <p className="Player_Score">{score}</p>
      <button className="Player__Score__Button" onClick={onPlus}>
        +
      </button>
    </section>
  )
}
