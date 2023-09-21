import { useState } from "react"
import { Button } from "react-bootstrap"


const GamePlayer = () => {

    const [players, setPlayers] = useState ({
        id: 1,
        player: {
            name: "Ronaldo",
            age: 38
        }
    })

    const gamePlayers = Object.keys(players)

    const gamePlayer = gamePlayers.forEach(gamePlayer => gamePlayer )

    const handleChangePlayer = () => {

        setPlayers({...players, player: {...players.player, name: "Johan"}})
    }


  return (
    <>
    <div>Game Player</div>

<div>

        {players.id}
        <hr />
        {players.player.name}
        <hr />
        {players.player.age}
</div>

    
    <Button onClick={handleChangePlayer}>Change Player</Button>
    </>
  )
}

export default GamePlayer