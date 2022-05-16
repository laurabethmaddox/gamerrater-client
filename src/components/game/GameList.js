import React, { useEffect, useState } from "react";
import { getGames } from "./GameManager";

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    const gameState = () => {
        getGames().then(data => setGames(data))
    }

    useEffect(() => {
        gameState()
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title}</div>
                    </section>
                })
            }
        </article>
    )
}