import { useState, useEffect } from 'react'
import { useHover } from '../utilities/hooks'
import { useNavigate } from 'react-router-dom'

const Tile = ({ title, isSelected, onSelect }) => {
    const [isHovering, hoveringEvents] = useHover()

    return (
        <div
            {...hoveringEvents}
            className={
                `flex justify-center items-center rounded-t-xl px-5 w-fit flex transition-colors cursor-pointer ${isSelected || isHovering ? "bg-accent_background" : "bg-regular_background"}`
            }
            onClick={onSelect}
        >
            <span
                className={
                    `text-lg font-semibold transition-colors ${isSelected || isHovering ? "text-regular_background" : "text-accent_background"}`
                }
            >
                {title}
            </span>
        </div>
    )
}

export default ({ routingConfiguration }) => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    navigate(routingConfiguration[currentIndex].route)
  }, [currentIndex])

  const tabulatorTiles = routingConfiguration
    .map(({ title }, index) => {
      return (
        <Tile
          key={index}
          title={title}
          isSelected={index === currentIndex}
          onSelect={() => setCurrentIndex(index)}
        />
      )
    })

  return (
    <div className="flex flex-row">
      {tabulatorTiles}
    </div>
  )
}