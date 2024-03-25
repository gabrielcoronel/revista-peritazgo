import './index.css'
import 'animate.css'
import { useState } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import ArticleDisplay from './components/ArticleDisplay'
import FloatingActionButton from './components/FloatingActionButton'
import ExpressionsArticle from './components/articles/ExpressionsArticle'
import { ContentSelectorProvider } from './context/contentSelector'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const units = [
  {
    name: "Fundamentos de Programación",
    topics: [
      {
        name: "Expresiones",
        sectionScrollId: "scroll-id__expressions-title",
        subtopics: [
          {
            name: "Valores",
            sectionScrollId: "scroll-id__expressions-values"
          },
          {
            name: "Operadores",
            sectionScrollId: "scroll-id__expressions-operators"
          },
          {
            name: "Expresiones Aritméticas",
            sectionScrollId: "scroll-id__expressions-arithmetic-expressions"
          },
          {
            name: "Expresiones Lógicas",
            sectionScrollId: "scroll-id__expressions-logical-expressions"
          },
          {
            name: "Evaluación",
            sectionScrollId: "scroll-id__expressions-evaluation"
          },
        ],
        articleComponent: <ExpressionsArticle />
      },
    ]
  }
]

const Main = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false)

  return (
    <div className="flex flex-col w-full h-screen max-h-screen">
      <div className="w-full">
        <Header
          onAction={() => setIsShowingMenu(!isShowingMenu)}
          isActive={isShowingMenu}
        />
      </div>

      <div className="w-full h-full flex bg-regular_background">
        {
          isShowingMenu ?
          (
            <div className="w-1/5 h-full bg-regular_background shadow-2xl animate__animated animate__slideInLeft">
              <Menu units={units} />
            </div>
          ) :
          null
        }

        <div className="w-full h-full overflow-auto">
          <ArticleDisplay />
        </div>
      </div>

      <FloatingActionButton
        icon={isShowingMenu ? <IoClose /> : <FiMenu />}
        onClick={() => setIsShowingMenu(!isShowingMenu)}
        top="85dvh"
        left="92.5%"
      />
    </div>
  )
}

export default () => {
  return (
    <ContentSelectorProvider>
      <Main />
    </ContentSelectorProvider>
  )
}
