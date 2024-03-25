import { useState, useEffect } from 'react'
import { useContentSelector } from '../context/contentSelector'

export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false)
  const hoveringEvents = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  }

  return [isHovering, hoveringEvents]
}

export const useSectionScrolling = () => {
  const { sectionScrollId } = useContentSelector()

  useEffect(() => {
    const elementToScroll = document.getElementById(sectionScrollId)

    elementToScroll?.scrollIntoView({
      behavior: "smooth"
    })
  }, [sectionScrollId])
}
