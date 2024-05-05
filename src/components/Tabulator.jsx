import { useEffect } from 'react'
import { useHover } from '../utilities/hooks'
import { useLocation, useNavigate } from 'react-router-dom'

const useUrlPostfix = () => {
  const location = useLocation()
  const postfix = location.pathname.split("/").at(-2) + "/"

  return postfix
}

const doesUrlPostfixMatchAnyRoute = (urlPostfix, routingConfiguration) => {
  const availableRoutes = routingConfiguration.routes.map(({ route }) => route)
  const needsToRedirect = availableRoutes.includes(urlPostfix)

  return needsToRedirect
}

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
  const urlPostfix = useUrlPostfix()

  useEffect(() => {
    if (!doesUrlPostfixMatchAnyRoute(urlPostfix, routingConfiguration)) {
      navigate(routingConfiguration.defaultRoute)
    }
  }, [urlPostfix])

  const tabulatorTiles = routingConfiguration
    .routes
    .map(({ title, route }, index) => {
      return (
        <Tile
          key={index}
          title={title}
          isSelected={urlPostfix === route}
          onSelect={() => navigate(route)}
        />
      )
    })

  return (
    <div className="flex flex-row">
      {tabulatorTiles}
    </div>
  )
}
