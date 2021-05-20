import styled from 'styled-components/macro'
import Button from './components/Button'

export default function App() {
  return (
    <section className="App">
      <AppGrid>
        <Button />
      </AppGrid>
    </section>
  )
}

const AppGrid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;
`
