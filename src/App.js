import styled from 'styled-components/macro'

export default function App() {
  return (
    <section className="App">
      <GridWrapper>Scorekeeper</GridWrapper>
    </section>
  )
}

const GridWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;
`
