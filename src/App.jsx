import './index.css'
import 'animate.css'
import { useEffect } from 'react'
import {
  createBrowserRouter,
  useNavigate,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import { useState } from 'react'
import Menu from './components/Menu'
import FloatingActionButton from './components/FloatingActionButton'
import ProgrammingFundamentalsArticles from './articles/programming-fundamentals'
import DatabasesArticles from './articles/databases'
import EnergyArticles from './articles/energy'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const units = [
  {
    name: "Tecnologías de la Información (TI)",
    topics: [
      {
        name: "Introducción a las Bases de Datos",
        route: "databases/basics/"
      },
      {
        name: "Bases de Datos Relacionales",
        route: "databases/relational/"
      },
      {
        name: "Eficiencia Energética",
        route: "energy/efficiency"
      },
      {
        name: "Instalaciones Eléctricas Residenciales",
        route: "energy/housing"
      }
    ]
  },
  {
    name: "Emprendimiento e innovación",
    topics: []
  },
  {
    name: "Programación para web",
    topics: [
      {
        name: "Conceptos Básicos",
        route: "programming-fundamentals/basics/"
      },
      {
        name: "Expresiones",
        route: "programming-fundamentals/expressions/"
      },
      {
        name: "Estructuras de Control",
        route: "programming-fundamentals/control-flow/"
      },
      {
        name :"Subprocesos",
        route: "programming-fundamentals/subprocesses"
      },
      {
        name: "Estructuras de Datos",
        route: "programming-fundamentals/data-structures/"
      }
    ]
  },
  {
    name: "Diseño de software",
    topics: []
  },
  {
    name: "Soporte TI",
    topics: []
  },
  {
    name: "English Oriented To Web Development",
    topics: []
  }
]

const Root = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    /* Default route */
    navigate("programming-fundamentals/basics/glossary")
  }, [])

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
          <Outlet />
        </div>
      </div>

      <FloatingActionButton
        icon={isShowingMenu ? <IoClose /> : <FiMenu />}
        onClick={() => setIsShowingMenu(!isShowingMenu)}
        top="85dvh"
        left="95%"
      />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/revista-peritazgo/",
    element: <Root />,
    children: [
      {
        path: "programming-fundamentals/basics/*",
        element: <ProgrammingFundamentalsArticles.Basics />
      },
      {
        path: "programming-fundamentals/expressions/*",
        element: <ProgrammingFundamentalsArticles.Expressions />
      },
      {
        path: "programming-fundamentals/control-flow/*",
        element: <ProgrammingFundamentalsArticles.ControlFlow />
      },
      {
        path: "programming-fundamentals/subprocesses/*",
        element: <ProgrammingFundamentalsArticles.Subprocesses />
      },
      {
        path: "programming-fundamentals/data-structures/*",
        element: <ProgrammingFundamentalsArticles.DataStructures />
      },
      {
        path: "databases/basics/*",
        element: <DatabasesArticles.Basics />
      },
      {
        path: "databases/relational/*",
        element: <DatabasesArticles.RelationalDatabases />
      },
      {
        path: "energy/efficiency/*",
        element: <EnergyArticles.EnergeticEfficiency />
      },
      {
        path: "energy/housing/*",
        element: <EnergyArticles.ResidentialElectricalInstallations />
      }
    ]
  }
])

export default () => {
  return (
    <RouterProvider router={router} />
  )
}
