import 'animate.css'

export default ({ children }) => {
    return (
        <div className="h-full w-full p-5 pb-28 bg-regular_background animate__animated animate__fadeIn">
          {children}
        </div>
    )
}
