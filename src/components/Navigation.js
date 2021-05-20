import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import Button from './Button'

Navigation.propTypes = {}

export default function Navigation() {
  return (
    <Nav>
      <NavButton>Test</NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`
const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
