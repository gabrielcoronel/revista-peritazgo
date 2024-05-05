import { useHover } from '../utilities/hooks'
import Modal from '@mui/material/Modal'
import { Heading1 } from './Typography'
import { IoClose } from 'react-icons/io5'

const CloseButton = ({ onClose }) => {
  const [isHovering, hoveringEvents] = useHover()

  return (
    <span
      {...hoveringEvents}
      className={
        `text-3xl text-heading_text transition-all transition-colors cursor-pointer transition ease-in-out delay-300 duration-300 ${isHovering ? "scale-110" : "" }`
      }
      onClick={onClose}
    >
      <IoClose />
    </span>
  )
}

const Attachment = ({ icon, title, link }) => {
  const [isHovering, hoveringEvents] = useHover()

  return (
    <div
      {...hoveringEvents}
      onClick={link ? () => window.open(link) : null}
      className={
        `bg-regular_background rounded-md cursor-pointer w-fit`
      }
    >
      <div
        className={
          `flex items-center gap-x-1.5 px-1 rounded-md transition-colors ${isHovering ? "bg-accent_background bg-opacity-20" : "bg-regular_background" }`
        }
      >
        <span
          className={
            `text-xl font-medium text-accent_text`
          }
        >
          {icon}
        </span>

        <span
          className={
            `text-lg font-medium underline text-accent_text`
          }
        >
          {title}
        </span>
      </div>
    </div>
  )
}

export default ({ attachments, isOpened, onClose }) => {
  const attachmentsElements = attachments.map(({ icon, title, link }, index) => {
    return (
      <Attachment
        key={index}
        icon={icon}
        title={title}
        link={link}
      />
    )
  })

  return (
    <Modal
      open={isOpened}
      onClose={onClose}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col px-5 py-7 gap-y-3 w-3/4 h-fit outline-0 rounded-lg bg-regular_background">
          <div className="flex justify-between items-center w-full">
            <Heading1 text="Anexos" />

            <CloseButton onClose={onClose} />
          </div>

          <div className="flex flex-col gap-y-3 w-full">
            {attachmentsElements}
          </div>
        </div>
      </div>
    </Modal>
  )
}
