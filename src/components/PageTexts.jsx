export const Heading = ({ text }) => {
    return (
        <span className="text-3xl font-bold text-heading_text bg-regular_background">
            {text}
        </span>
    )
}

export const Subheading1 = ({ text }) => {
    return (
        <span className="text-2xl font-bold text-heading_text bg-regular_background">
            {text}
        </span>
    )
}

export const Subheading = ({ text }) => {
    return (
        <span className="text-xl font-bold text-heading_text bg-regular_background">
            {text}
        </span>
    )
}

export const Line = ({ children }) => {
    return (
        <span className="text-lg text-regular_text bg-regular_background">
            {children}
        </span>
    )
}