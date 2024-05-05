import { useState } from 'react'
import { useHover } from '../utilities/hooks.js'
import { FaBackward, FaForward } from 'react-icons/fa6'

const StepButton = ({ icon, onClick }) => {
  const [isHovering, hoveringEvents] = useHover()

  return (
    <span
      {...hoveringEvents}
      className={
        `text-4xl cursor-pointer transition-all transition-colors duration-300 ${isHovering ? "text-accent_text scale-110" : "text-regular_text"}`
      }
      onClick={onClick}
    >
      {icon}
    </span>
  )
}

export default ({ figures }) => {
  const [currentFigureIndex, setCurrentFigureIndex] = useState(0)
  const currentFigure = figures[currentFigureIndex]

  const setNextFigureIndex = () => {
    const nextFigureIndex = currentFigureIndex + 1 < 9
      ? currentFigureIndex + 1
      : 0

      setCurrentFigureIndex(nextFigureIndex)
  }

  const setPreviousFigureIndex = () => {
    const previousFigureIndex = currentFigureIndex - 1 >= 0
      ? currentFigureIndex - 1
      : figures.length - 1

      setCurrentFigureIndex(previousFigureIndex)
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center px-3 py-5 gap-y-3 bg-fragment_background rounded-md w-1/4">
        <div className="flex justify-between items-center gap-x-5 w-full">
          <StepButton
            icon={<FaBackward />}
            onClick={setPreviousFigureIndex}
          />

          <img
            className="w-full rounded-md cursor-pointer"
            src={currentFigure.image}
            onClick={() => window.open(currentFigure.image)}
          />

          <StepButton
            icon={<FaForward />}
            onClick={setNextFigureIndex}
          />
        </div>

        <span
          className="text-md italic text-regular_text"
        >
          {currentFigure.caption}
        </span>
      </div>
    </div>
  )
}
