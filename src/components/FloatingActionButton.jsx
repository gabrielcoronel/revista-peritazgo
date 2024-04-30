import 'animate.css'
import { useHover } from '../utilities/hooks'

export default ({ icon, onClick, top, left }) => {
    const [isHovering, hoveringEvents] = useHover()

    return (
        <div
            {...hoveringEvents}
            className={
                `bg-accent_background text-regular_background text-3xl h-fit w-fit p-3 rounded-full transition-all transition-colors cursor-pointer transition ease-in-out delay-300 duration-300 ${isHovering ? "scale-110" : "" }`
            }
            style={{
                position: "fixed",
                top,
                left
            }}
            onClick={onClick}
        >
            <span
                className='animate__animated animate__fadeIn'
            >
                {icon}
            </span>
        </div>
    )
}