import { useState } from 'react'

export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false)
  const hoveringEvents = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  }

  return [isHovering, hoveringEvents]
}