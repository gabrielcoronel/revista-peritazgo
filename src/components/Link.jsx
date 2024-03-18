import { useHover} from '../utilities/hooks'

export default ({ icon, title, onClick }) => {
  const [isHovering, hoveringEvents] = useHover()

  return (
    <div
      {...hoveringEvents}
      onClick={onClick}
      className={
        `bg-regular_background rounded-md cursor-pointer w-fit`
      }
    >
      <div
        className={
          `flex items-start px-1 rounded-md transition-colors ${isHovering ? "bg-accent_background bg-opacity-20" : "bg-regular_background" }`
        }
      >
        <span
          className={
            `flex items-center gap-x-1.5 text-lg font-medium underline text-accent_text`
          }
        >
          {icon}

          {title}
        </span>
      </div>
    </div>
  )
}
