import { RegularText } from './PageTexts'
import { Children } from 'react'

const Item = ({ children, number }) => {
    return (
        <div className="flex p-1.5 gap-x-2">
            <RegularText>
                {number}.
            </RegularText>

            {children}
        </div>
    )
}

export default ({ children }) => {
    const items = Children.map(children, (child, index) => {
        return (
            <Item key={index} number={index + 1}>
                {child}
            </Item>
        )
    })

    return (
        <div className="flex flex-col pl-10 gap-y-2">
            {items}
        </div>
    )
}