import { useState } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import { FaBookOpenReader } from 'react-icons/fa6'
import Tabulator from './Tabulator'
import AttachmentsModal from './AttachmentsModal'
import FloatingActionButton from './FloatingActionButton'

const Heading = ({ text }) => {
    return (
        <span
          className="text-4xl font-bold text-accent_text"
        >
            {text}
        </span>
    )
}

export default ({ title, routingConfiguration, attachments, children }) => {
  const [isShowingAttachments, setIsShowingAttachments] = useState(false)

  const routesElements = routingConfiguration
    .routes
    .map(({ route, component }, index) => {
      return (
        <Route
          key={index}
          path={route}
          element={component}
        />
      )
    })

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-5 px-5 pt-5 bg-auxiliary_background animate__animated animate__fadeIn">
        <Heading text={title} />

        {children}

        <Tabulator routingConfiguration={routingConfiguration} />
      </div>

      <Routes>
        {routesElements}
      </Routes>

      <Outlet />

      {
        attachments ?
        (
          <>
            <AttachmentsModal
              attachments={attachments}
              isOpened={isShowingAttachments}
              onClose={() => setIsShowingAttachments(false)}
            />

            <FloatingActionButton
              icon={<FaBookOpenReader />}
              onClick={() => setIsShowingAttachments(true)}
              top="72.5dvh"
              left="95%"
            />
          </>
        ) :
        null
      }
    </div>
  )
}
