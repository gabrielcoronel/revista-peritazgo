import './index.css'
import 'animate.css'
import { useState } from 'react'
import Menu from './components/Menu'
import ArticleDisplay from './components/ArticleDisplay'
import FloatingActionButton from './components/FloatingActionButton'
import BasicConceptsArticle from './components/articles/BasicConceptsArticle'
import ExpressionsArticle from './components/articles/ExpressionsArticle'
import ControlFlowStatementsArticle from './components/articles/ControlFlowStatementsArticle'
import { ContentSelectorProvider } from './context/contentSelector'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const units = [
  {
    name: "Fundamentos de Programación",
    topics: [
      {
        name: "Conceptos Básicos",
        sectionScrollId: "scroll-id__basic-concepts-title",
        subtopics: [
          {
            name: "Informática",
            sectionScrollId: "scroll-id__basic-concepts-informatics"
          },
          {
            name: "Variables",
            sectionScrollId: "scroll-id__basic-concepts-variables"
          },
          {
            name: "Punteros",
            sectionScrollId: "scroll-id__basic-concepts-pointers"
          },
          {
            name: "Algoritmos",
            sectionScrollId: "scroll-id__basic-concepts-algorithms"
          },
          {
            name: "Pseudocódigo",
            sectionScrollId: "scroll-id__basic-concepts-pseudocode"
          },
          {
            name: "Diagramas de Flujo",
            sectionScrollId: "scroll-id__basic-concepts-flowcharts"
          },
        ],
        articleComponent: <BasicConceptsArticle />
      },
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
      {
        name: "Estructuras de Control",
        sectionScrollId: "scroll-id__control-flow-statements-title",
        subtopics: [
          {
            name: "Estructuras de Control Secuenciales",
            sectionScrollId: "scroll-id__control-flow-statements-sequential"
          },
          {
            name: "Estructuras de Control Selectivas",
            sectionScrollId: "scroll-id__control-flow-statements-choice"
          },
          {
            name: "Estructuras de Control Repetitivas",
            sectionScrollId: "scroll-id__control-flow-statements-looping"
          }
        ],
        articleComponent: <ControlFlowStatementsArticle />
      }
    ]
  }
]

const Main = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false)

  return (
    <div className="flex flex-col w-full h-screen max-h-screen">
      <div className="w-full h-full flex bg-regular_background">
        {
          isShowingMenu ?
          (
            <div className="w-1/4 h-full bg-regular_background shadow-2xl animate__animated animate__slideInLeft">
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
