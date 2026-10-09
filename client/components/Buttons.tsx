type ButtonsProps = {
  onFeed: () => void
  onPet: () => void
  onReset: () => void
}

function Buttons({ onFeed, onPet, onReset }: ButtonsProps) {
  return (
    <>
    <div className="buttons">
      <button onClick={onFeed}>Feed 🍔</button>
      <button onClick={onPet}>Pet ❤️</button>
    </div>
    <div className="reset-button">
      <button onClick={onReset}>Reset</button>
    </div>
  </>
  )
}

export default Buttons
