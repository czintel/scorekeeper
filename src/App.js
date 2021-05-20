import Player from './stories/Player'
import Button from './stories/Button'
import PlayerForm from './stories/PlayerForm'
import { useState } from 'react'

function App() {
  const [players, setPlayers] = useState([
    { name: 'Max Mustermann', score: 50 },
    { name: 'Maxine Musterfrau', score: 100 },
  ])

  return (
    <section className="App">
      {players.map((player, index) => (
        <Player
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}
      <Button color="white" isActive onClick={resetScores}>
        Reset Score
      </Button>
      <Button onClick={resetAll}>Reset All</Button>
      <PlayerForm onSubmit={createNewPlayer} />
    </section>
  )

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

  function handleMinus(index) {
    const playerUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerUpdate, score: playerUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const playerUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerUpdate, score: playerUpdate.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function createNewPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
