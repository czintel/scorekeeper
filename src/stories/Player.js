import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'
const { useState } = React

Player.propTypes = {
  onClick: PropTypes.func,
}

export default function Player({ name }) {
  const [currScore, setCurrScore] = useState('0')

  return (
    <section className="Player">
      <div className="Player__Name">Max Mustermann{name}</div>
      <button
        className="Player__Score__Button"
        onClick={() => setCurrScore(currScore - 1)}
      >
        -
      </button>

      <p className="Player_Score">{currScore}</p>
      <button
        className="Player__Score__Button"
        onClick={() => setCurrScore(currScore + 1)}
      >
        +
      </button>
    </section>
  )
}
