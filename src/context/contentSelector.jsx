import { createContext, useContext, useState } from 'react'

const contentSelectorContext = createContext(null)

export const useContentSelector = () => {
    const contentSelectorContextValue = useContext(contentSelectorContext)

    return contentSelectorContextValue
}

export const ContentSelectorProvider = ({ children }) => {
    const [articleComponent, setArticleComponent] = useState(null)
    const [sectionScrollId, setSectionScrollId] = useState(null)

    const contentSelectorValue = {
        articleComponent,
        sectionScrollId,
        setArticleComponent,
        setSectionScrollId
    }

    return (
        <contentSelectorContext.Provider value={contentSelectorValue}>
            {children}
        </contentSelectorContext.Provider>
    )
}