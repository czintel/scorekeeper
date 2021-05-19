import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 12px;
  border: none;
  background: ${props => (props.isActive ? 'steelblue' : '#ddd')};
  color: ${props => props.color};
  border-radius: 8px;
  &:hover {
    background-color: hotpink;
  }
`

export default Button
