import 'animate.css'
import { useState } from 'react'
import { useHover } from '../utilities/hooks'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'

const GoBackButton = ({ onGoBack }) => {
    const [isHovering, hoveringEvents] = useHover()

    return (
        <span
            {...hoveringEvents}
            className={
                `text-lg p-2 h-fit w-fit rounded-full transition-colors cursor-pointer ${isHovering ? "bg-accent_background bg-opacity-20 text-accent_text" : "bg-regular_background text-regular_text"}`
            }
            onClick={onGoBack}
        >
            <MdArrowBackIosNew />
        </span>
    )
}

const Entry = ({ title, onClick, isSelected }) => {
    const [isHovering, hoveringEvents] = useHover()

    return (
        <div
            {...hoveringEvents}
            onClick={isSelected ? null : onClick}
            className={
                `bg-regular_background rounded-md`
            }
        >
            <div
                className={
                    `flex items-start px-1 rounded-md transition-colors cursor-pointer ${isHovering || isSelected ? "bg-accent_background bg-opacity-20" : "bg-regular_background"}`
                }
            >
                <span
                    className={
                        `text-lg font-medium transition-colors ${isHovering || isSelected ? "text-accent_text" : "text-regular_text"}`
                    }
                >
                    {title}
                </span>
            </div>
        </div>
    )
}

const UnitsMenu = ({ units, onSelect }) => {
    const unitsElements = units.map(({ name }, index) => {
        return (
            <Entry
                key={index}
                title={name}
                onClick={() => onSelect(index)}
            />
        )
    })

    return (
        <div className="flex flex-col gap-y-2 py-3 px-2 bg-regular_background animate__animated animate__fadeIn">
            {unitsElements}
        </div>
    )
}

const TopicsMenu = ({ unit, onGoBack }) => {
    const navigate = useNavigate()
    const [selectedTopicIndex, setSelectedTopicIndex] = useState()

    const handleSelectTopic = (index, route) => {
        setSelectedTopicIndex(index)
        navigate(route)
    }

    const topicsElements = unit.topics.map(({ name, route }, index) => {
        return (
            <Entry
                key={index}
                title={name}
                onClick={() => handleSelectTopic(index, route)}
                isSelected={index === selectedTopicIndex}
            />
        )
    })

    return (
        <div className="flex flex-col gap-y-2 py-3 px-2 bg-regular_background animate__animated animate__fadeIn">
            <GoBackButton onGoBack={onGoBack} />

            {topicsElements}
        </div>
    )
}

export default ({ units }) => {
    const [selectedUnitIndex, setSelectedUnitIndex] = useState(null)

    return (
        <div className="flex flex-col w-full h-full bg-regular_background">
            <div className="pt-3 pl-3">
                <span className="text-2xl font-semibold text-accent_text">
                    Revista Peritazgo
                </span>
            </div>

            {
                selectedUnitIndex === null ?
                    (
                        <UnitsMenu
                            units={units}
                            onSelect={setSelectedUnitIndex}
                        />
                    ) :
                    (
                        <TopicsMenu
                            unit={units[selectedUnitIndex]}
                            onGoBack={() => setSelectedUnitIndex(null)}
                        />
                    )
            }
        </div>
    )
}
