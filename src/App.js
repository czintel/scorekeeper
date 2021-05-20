import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'

export default function App() {
  return (
    <section className="App">
      <AppGrid>
        <CreatePage />
        <Navigation />
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
