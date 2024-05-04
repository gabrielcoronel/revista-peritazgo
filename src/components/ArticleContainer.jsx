import { useEffect } from 'react'
import { useHover } from '../utilities/hooks'
import {
  useNavigate,
  useLocation,
  Route,
  Routes,
  Outlet
} from 'react-router-dom'

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

const Heading = ({ text }) => {
    return (
        <span
          className="text-4xl font-bold text-accent_text"
        >
            {text}
        </span>
    )
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

const Tabulator = ({ routingConfiguration }) => {
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

export default ({ title, routingConfiguration, children }) => {
  const routesElements = routingConfiguration
    .routes
    .map(({ route, component }, index) => {
      return (
        <Route
          key={index}
          path={route}
          element={component}
        />
      )
    })

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-5 px-5 pt-5 bg-auxiliary_background animate__animated animate__fadeIn">
        <Heading text={title} />

        {children}

        <Tabulator routingConfiguration={routingConfiguration} />
      </div>

      <Routes>
        {routesElements}
      </Routes>

      <Outlet />
    </div>
  )
}
