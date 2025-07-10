import React from 'react'
import './Projects.css'

const placeholderUrl = 'https://via.placeholder.com/240x160/eeeeee/ffffff?text=%20'

export default function Cheat_Game_Project() {
  return (
    <section className="project-section">
      <div className="container">
        <h2 className="about-title">Cheat Card Game</h2>
        <p className="about-text">
          This was one of my first projects. I implemented a simple card game using Java. The game is played with a standard deck of cards and allows players to play against each other. It includes features like shuffling, dealing cards, and determining the winner based on the rules of the game. It was a great way to learn about object-oriented programming and game logic.
        </p>

        <p>
          <a
            href="https://github.com/MakilanBala/Cheat-Card-Game"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </section>
  )
}



