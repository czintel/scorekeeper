import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
}

export default function Player({ name, onMinus, onPlus, score }) {
  return (
    <Wrapper>
      {name}{' '}
      <div>
        <button onClick={onMinus}>-</button>
        <output>{score}</output>
        <button onClick={onPlus}>+</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  button {
    background-color: hotpink;
  }

  output {
    width: 3ch;
    text-align: right;
  }
`
