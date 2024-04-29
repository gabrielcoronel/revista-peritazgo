import 'animate.css'
import { useHover } from '../utilities/hooks'
import { useContentSelector } from '../context/contentSelector'
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
            onClick={onClick}
            className={
                `bg-regular_background rounded-md`
            }
        >
            <div
                className={
                    `flex items-start px-1 rounded-md transition-colors cursor-pointer ${isHovering || isSelected ? "bg-accent_background bg-opacity-20" : "bg-regular_background" }`
                }
            >
                <span
                    className={
                        `text-lg font-medium transition-colors ${isHovering || isSelected ? "text-accent_text" : "text-regular_text" }`
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
                onClick={() => onSelect(name)}
            />
        )
    })

    return (
        <div className="flex flex-col gap-y-2 py-3 px-2 bg-regular_background animate__animated animate__fadeIn">
            {unitsElements}
        </div>
    )
}

const TopicsEntry = ({ topic, isSelected, onSelect }) => {
    const { setArticleComponent, setSectionScrollId } = useContentSelector()

    const handleEntryClick = () => {
      setArticleComponent(topic.articleComponent)
      setSectionScrollId(topic.sectionScrollId)
      onSelect()
    }

    return (
        <div
          className="flex flex-col gap-y-2 bg-regular_background animate__animated animate__fadeIn"
        >
            <Entry
                title={topic.name}
                onClick={handleEntryClick}
                isSelected={isSelected}
            />
        </div>
    )
}

const TopicsMenu = ({ unit, onGoBack }) => {
    const { selectedTopicIndex, setSelectedTopicIndex } = useContentSelector()

    const topicsElements = unit.topics.map((topic, index) => {
        return (
            <TopicsEntry
                key={index}
                topic={topic}
                onSelect={() => setSelectedTopicIndex(index)}
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
    const { unitName, setUnitName } = useContentSelector()

    const getUnitByName = (unitName) => {
        const filteredUnits = units.filter(({ name }) => unitName === name)
        const unit = filteredUnits[0]

        return unit
    }

    return (
        <div className="flex flex-col w-full h-full bg-regular_background">
            <div className="pt-3 pl-3">
              <span className="text-2xl font-semibold text-accent_text">
                  Revista Peritazgo
              </span>
            </div>

            {
                unitName === null ?
                (
                    <UnitsMenu
                        units={units}
                        onSelect={setUnitName}
                    />
                ) :
                (
                    <TopicsMenu
                        unit={getUnitByName(unitName)}
                        onGoBack={() => setUnitName(null)}
                    />
                )
            }
        </div>
    )
}
