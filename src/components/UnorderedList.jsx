import { TbCircleDot } from 'react-icons/tb'
import { RegularText } from './PageTexts'
import { Children } from 'react'

const Item = ({ children }) => {
    return (
        <div className="flex items-center p-1.5 gap-x-2">
            <RegularText>
                <TbCircleDot />
            </RegularText>

            {children}
        </div>
    )
}

export default ({ children }) => {
    const items = Children.map(children, (child, index) => {
        return (
            <Item key={index}>
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