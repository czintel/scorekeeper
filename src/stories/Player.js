import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
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
        <Button onClick={onMinus}>-</Button>
        <output>{score}</output>
        <Button onClick={onPlus}>+</Button>
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
