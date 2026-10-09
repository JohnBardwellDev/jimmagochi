import { useState } from "react"
import confetti from "canvas-confetti"
import Buttons from "./Buttons"
import StatBar from "./Statbar"
import jimothyImage from "../../Images/image.png"
import jimothyBurgerImage from "../../Images/jimothy-burger.png"
import jimothyHeartImage from "../../Images/jimothy-heart.png"

function App() {

  const [hunger, setHunger] = useState(50)
  const [happiness, setHappiness] = useState(50)
  const [isEating, setIsEating] = useState(false)
  const [isHappy, setIsHappy] = useState(false)

  const shootBurgerConfetti = () => {
    const scalar = 2
    const burger = confetti.shapeFromText({ text: "🍔", scalar })

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [burger],
      scalar,
    }

    confetti({
      ...defaults,
      particleCount: 30,
    })
  }

  const shootHeartConfetti = () => {
    const scalar = 2
    const heart = confetti.shapeFromText({ text: "❤️", scalar })

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [heart],
      scalar,
    }

    confetti({
      ...defaults,
      particleCount: 30,
    })
  }

const [imageSize, setImageSize] = useState(300)

const imageSrc = hunger >= 100
  ? jimothyBurgerImage
  : happiness >= 100
    ? jimothyHeartImage
    : isEating
      ? jimothyBurgerImage
      : isHappy
        ? jimothyHeartImage
        : jimothyImage

  const handleFeed = () => {
    setHunger((currentHunger) => Math.min(currentHunger + 20, 100))
    setIsEating(true)
    shootBurgerConfetti()
    setImageSize((currentSize) => currentSize + 10)

    setTimeout(() => {
      setIsEating(false)
    }, 1000)
  }

  const handlePet = () => {
    setHappiness((currentHappiness) => Math.min(currentHappiness + 20, 100))
    setIsHappy(true)
    shootHeartConfetti()

    setTimeout(() => {
      setIsHappy(false)
    }, 1000)
  }
  
  const handleReset = () => {
    setHappiness(50)
    setHunger(50)
    setImageSize(300)
  }

  return (
    <div className="app-container">
      <div className="falling-leaves">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="leaf"
            style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${5 + Math.random() * 5}s` }}
          >
            🍂
          </span>
        ))}
      </div>
      <h1>Jimothy</h1>
      <h2>Feed and play with Jimothy to keep him happy!</h2>

        
        <div id="jimothy-image">
          <img id="jimothy-basic" width={imageSize} height={imageSize} src={imageSrc} alt="Jimothy the raccoon"/>
        </div>

        <div className="stats">
          <StatBar label="Hunger" value={hunger}/>
          <StatBar label="Happiness" value={happiness}/>
        </div>

        <Buttons onFeed={handleFeed} onPet={handlePet} onReset={handleReset}/>
    </div>
  )
}

export default App

