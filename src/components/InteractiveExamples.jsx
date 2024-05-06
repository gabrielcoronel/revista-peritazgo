import { useState } from 'react'
import { useHover } from '../utilities/hooks'
import { v4 as generateUuid } from 'uuid'
import sleep from '../utilities/sleep'
import { FaMinus, FaPlus, FaPlay, FaStop } from 'react-icons/fa6'

const LIST_INTERACTIVE_EXAMPLE_MAXIMUM = 8

const generateItem = () => {
  const number = Math.round(Math.random() * 9) + 1
  const uuid = generateUuid()
  const item = {
    number,
    uuid
  }

  return item
}

const generateItemArray = (length) => {
  const itemArray = new Array(length).fill(null).map(_ => generateItem())

  return itemArray
}

const swapPositionsInArray = (array, firstPosition, secondPosition) => {
  const swappedArray = array.slice()

  swappedArray[firstPosition] = array[secondPosition]
  swappedArray[secondPosition] = array[firstPosition]

  return swappedArray
}

const updateUuidInArray = (array, position) => {
  const newArray = array.map((item, index) => {
    if (index === position) {
      return { ...item, uuid: generateUuid() }
    } else {
      return item
    }
  })

  return newArray
}

const bubbleSortStreamer = async (initialState, updateState, finish) => {
  let currentState = initialState.slice()

  for (let lastPositionToSwap = initialState.length - 1; lastPositionToSwap >= 0; lastPositionToSwap -= 1) {
    for (let currentPositionToSwap = 0; currentPositionToSwap < lastPositionToSwap; currentPositionToSwap += 1) {
      await sleep(0.75)

      if (currentState[currentPositionToSwap + 1].number < currentState[currentPositionToSwap].number) {
        currentState = swapPositionsInArray(currentState, currentPositionToSwap, currentPositionToSwap + 1)
      } else {
        currentState = updateUuidInArray(currentState, currentPositionToSwap)
        currentState = updateUuidInArray(currentState, currentPositionToSwap + 1)
      }

      updateState(currentState)
    }
  }

  finish()
}

const selectionSortStreamer = async (initialState, updateState, finish) => {
  let currentState = initialState.slice()

  for (let currentPositionToSwap = 0; currentPositionToSwap < initialState.length; currentPositionToSwap += 1) {
    let currentMinimumPosition = currentPositionToSwap

    for (let currentTestPosition = currentPositionToSwap; currentTestPosition < initialState.length; currentTestPosition += 1) {
      if (currentState[currentTestPosition].number < currentState[currentMinimumPosition].number) {
        currentMinimumPosition = currentTestPosition
      }
    }

    await sleep(0.75)

    currentState = swapPositionsInArray(currentState, currentPositionToSwap, currentMinimumPosition)

    updateState(currentState)
  }

  finish()
}

const insertionSortStreamer = async (initialState, updateState, finish) => {
  let currentState = initialState.slice()

  for (let currentPositionToSwap = 0; currentPositionToSwap < initialState.length; currentPositionToSwap += 1) {
    for (let currentTestPosition = 0; currentTestPosition <= currentPositionToSwap; currentTestPosition += 1) {
      if (currentState[currentTestPosition].number > currentState[currentPositionToSwap].number) {
        await sleep(0.75)

        currentState = swapPositionsInArray(currentState, currentPositionToSwap, currentTestPosition)

        updateState(currentState)
      }
    }
  }

  finish()
}

const ItemList = ({ items }) => {
  const itemsElements = items.map(({ number, uuid }) => {
    return (
      <div
        key={uuid}
        className="flex justify-center items-center py-1 w-20 rounded-lg bg-accent_background animate__animated animate__fadeIn"
      >
        <span className="text-lg font-bold text-regular_background">
          {number}
        </span>
      </div>
    )
  })

  return (
    <div className="flex flex-row grow items-center gap-x-3">
      {itemsElements}
    </div>
  )
}

const Button = ({ icon, onClick, isDisabled }) => {
  const [isHovering, hoveringEvents] = useHover()

  return (
    <div
      {...hoveringEvents}
      className={
        `flex justify-center items-center h-fit w-fit p-3 rounded-full transition-colors duration-300 ${isHovering ? "bg-accent_background" : "bg-regular_background" } ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`
      }
      onClick={!isDisabled ? onClick : null}
    >
      <span
        className={
          `text-3xl ${isHovering ? "text-regular_background" : "text-accent_text"}`
        }
      >
        {icon}
      </span>
    </div>
  )
}

const ListInteractiveExample = ({ addItem, removeItem }) => {
  const [items, setItems] = useState([generateItem()])

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-between items-end gap-x-5 w-2/3">
        <Button
          icon={<FaMinus />}
          onClick={() => removeItem(items, setItems)}
          isDisabled={items.length <= 0}
        />

        <ItemList
          items={items}
        />

        <Button
          icon={<FaPlus />}
          onClick={() => addItem(items, setItems)}
          isDisabled={items.length >= LIST_INTERACTIVE_EXAMPLE_MAXIMUM}
        />
      </div>
    </div>
  )
}

const SortingInteractiveExample = ({ sortingStreamer }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [items, setItems] = useState(generateItemArray(6))

  const run = () => {
    sortingStreamer(items, setItems, () => setIsRunning(false))

    setIsRunning(true)
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-between items-center gap-x-5 w-1/2">
        <ItemList
          items={items}
        />

        <Button
          icon={isRunning ? <FaStop /> : <FaPlay />}
          onClick={run}
          isDisabled={isRunning}
        />
      </div>
    </div>
  )
}

export const StackInteractiveExample = () => {
  const addItem = (items, setItems) => {
    const newItems = [...items, generateItem()]

    setItems(newItems)
  }

  const removeItem = (items, setItems) => {
    const newItems = items.slice(0, -1)

    setItems(newItems)
  }

  return (
    <ListInteractiveExample
        addItem={addItem}
        removeItem={removeItem}
    />
  )
}

export const QueueInteractiveExample = () => {
  const addItem = (items, setItems) => {
    const newItems = [generateItem(), ...items]

    setItems(newItems)
  }

  const removeItem = (items, setItems) => {
    const newItems = items.slice(0, -1)

    setItems(newItems)
  }

  return (
    <ListInteractiveExample
        addItem={addItem}
        removeItem={removeItem}
    />
  )
}

export const BubbleSortInteractiveExample = () => {
    return (
        <SortingInteractiveExample
            sortingStreamer={bubbleSortStreamer}
        />
    )
}

export const SelectionSortInteractiveExample = () => {
    return (
        <SortingInteractiveExample
            sortingStreamer={selectionSortStreamer}
        />
    )
}

export const InsertionSortInteractiveExample = () => {
    return (
        <SortingInteractiveExample
            sortingStreamer={insertionSortStreamer}
        />
    )
}