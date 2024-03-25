export const Heading = ({ text, scrollId }) => {
    return (
        <span
          className="text-3xl font-bold text-heading_text bg-regular_background"
          id={scrollId}
        >
            {text}
        </span>
    )
}

export const Subheading1 = ({ text, scrollId }) => {
    return (
        <span
          className="text-2xl font-bold text-heading_text bg-regular_background"
          id={scrollId}
        >
            {text}
        </span>
    )
}

export const Subheading2 = ({ text }) => {
    return (
        <span className="text-xl font-bold text-heading_text bg-regular_background">
            {text}
        </span>
    )
}

export const RegularText = ({ children }) => {
    return (
        <span className="text-lg text-regular_text bg-regular_background">
            {children}
        </span>
    )
}

export const BoldText = ({ children }) => {
    return (
        <span className="text-lg font-bold text-regular_text bg-regular_background">
            {children}
        </span>
    )
}

export const ItalicText = ({ children }) => {
    return (
        <span className="text-lg italic text-regular_text bg-regular_background">
            {children}
        </span>
    )
}

export const CodeText = ({ children }) => {
    return (
        <span className="text-lg font-mono text-regular_text bg-fragment_background rounded-md px-1 py-0.5">
            {children}
        </span>
    )
}

export const Space = () => {
    return (
        <span>
            &nbsp;
        </span>
    )
}
