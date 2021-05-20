import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 10px 20px;
  height: 40px;
  border: none;
  background: ${button => (button.isActive ? 'steelblue' : 'lightgray')};
  color: ${button => (button.isActive ? 'white' : 'black')};
  border-radius: 20px;
`
