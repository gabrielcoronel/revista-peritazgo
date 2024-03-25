import { useSectionScrolling } from '../../utilities/hooks'
import ArticleContainer from '../ArticleContainer'
import {
  Heading,
  Subheading1,
  Subheading2,
  RegularText,
  BoldText,
  CodeText,
  Space
} from '../PageTexts'
import Link from '../Link'
import UnorderedList from '../UnorderedList'
import Fragment from '../Fragment'
import StartEndFigure from '../../../public/flowchart-figures/start-end.png'
import ProcessFigure from '../../../public/flowchart-figures/process.png'
import ConditionalFigure from '../../../public/flowchart-figures/conditional.png'
import CycleFigure from '../../../public/flowchart-figures/cycle.png'
import DataInputFigure from '../../../public/flowchart-figures/data-input.png'
import ScreenDisplayFigure from '../../../public/flowchart-figures/screen-display.png'
import OnPageConnectorFigure from '../../../public/flowchart-figures/on-page-connector.png'
import OffPageConnectorFigure from '../../../public/flowchart-figures/off-page-connector.png'
import KeyboardInputFigure from '../../../public/flowchart-figures/keyboard-input.png'
import DatabaseFigure from '../../../public/flowchart-figures/database.png'
import CloudFigure from '../../../public/flowchart-figures/cloud.png'
import { FaBookOpen } from 'react-icons/fa'

const InformaticsReferenceText = "Cañedo R., Ramos R. E., Guerrero J. C. (2005). La Informática, la Computación y la Ciencia de la Información: una alianza para el desarrollo. Acimed, 13(5)."
const InformaticsReferenceUrl = "http://scielo.sld.cu/scielo.php?pid=s1024-94352005000500007&script=sci_arttext"

const FlowchartFiguresTable = () => {
  const rows = [
    {
      figure: StartEndFigure,
      description: "Inicio o fin"
    },
    {
      figure: ProcessFigure,
      description: "Proceso"
    },
    {
      figure: ConditionalFigure,
      description: "Condicional"
    },
    {
      figure: CycleFigure,
      description: "Ciclo"
    },
    {
      figure: DataInputFigure,
      description: "Entrada de datos"
    },
    {
      figure: ScreenDisplayFigure,
      description: "Impresión por pantalla"
    },
    {
      figure: OnPageConnectorFigure,
      description: "Conector en misma página"
    },
    {
      figure: OffPageConnectorFigure,
      description: "Conector a otra página"
    },
    {
      figure: KeyboardInputFigure,
      description: "Entrada por teclado"
    },
    {
      figure: DatabaseFigure,
      description: "Base de datos"
    },
    {
      figure: CloudFigure,
      description: "Nube"
    }
  ]

  const tableElements = rows
    .map((row) => [row.figure, row.description])
    .flat()
    .map((item, index) => {
      if (index % 2 == 0) {
        return (
          <div
            key={index}
            className={
              `flex justify-center items-center p-5 border border-regular_text ${index === rows.length * 2 - 2 ? "rounded-bl-md" : "" }`
            }
          >
            <img
              className="w-32 object-contain h-full w-full rounded-md"
              src={item}
            />
          </div>
        )
      } else {
        return (
          <div
            key={index}
            className={
              `flex justify-center items-center p-5 border border-regular_text ${index === rows.length * 2 - 1 ? "rounded-br-md" : "" }`
            }
          >
            <span className="text-lg text-center text-regular_text bg-regular_background">
              {item}
            </span>
          </div>
        )
      }
    })

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/3">
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center border border-regular_text rounded-tl-md">
            <RegularText>
                Figura
            </RegularText>
          </div>

          <div className="flex justify-center items-center border border-regular_text rounded-tr-md">
            <RegularText>
                Uso
            </RegularText>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {tableElements}
        </div>
      </div>
    </div>
  )
}

export default () => {
  useSectionScrolling()

  return (
    <ArticleContainer>
      <Heading text="Conceptos Básicos" scrollId="scroll-id__basic-concepts-title" />

      <RegularText>
        La presente sección explica algunos conceptos básicos necesarios para
        entender los fundamentos de la programación.
      </RegularText>

      <Subheading1 text="Informática" scrollId="scroll-id__basic-concepts-informatics" />

      <RegularText>
        La <BoldText>informática</BoldText> es la disciplina que se encarga de
        la creación de artificios capaces de la recolección, representación,
        organización y almacenamiento de la información de sistemas naturales
        (Cañedo, Ramos y Guerrero, 2005).
      </RegularText>

      <Subheading1 text="Variables" scrollId="scroll-id__basic-concepts-variables" />

      <RegularText>
        Una <BoldText>variable</BoldText> es un espacio reservado en memoria que
        tiene una dirección, un tipo, un nombre y un valor.
      </RegularText>

      <RegularText>
        A una variable se le puede <BoldText>asignar un valor</BoldText> mediante
        el <BoldText>operador de asignación</BoldText>. El operador de asignación
        se puede representar con el símbolo <CodeText>←</CodeText>, o bien con el
        símbolo <CodeText>=</CodeText>, de la siguiente manera.
      </RegularText>

      <Fragment>
        <CodeText>
          A ← 0
        </CodeText>

        <CodeText>
          A = 0
        </CodeText>
      </Fragment>

      <RegularText>
        En ambos casos, la variable <CodeText>A</CodeText> tiene como valor <CodeText>0</CodeText>.
      </RegularText>

      <Subheading2 text="Nombramiento de Variables" />

      <RegularText>
        El nombre de una variable puede ser cualquier secuencia de letras y números,
        mientras que esta no viole las siguientes restricciones.

        <UnorderedList>
          <RegularText>
            No empezar con números
          </RegularText>

          <RegularText>
            No incluir caracteres especiales, excepto el guión bajo (<CodeText>_</CodeText>)
          </RegularText>

          <RegularText>
            No incluir espacios
          </RegularText>

          <RegularText>
            No usar el alfabeto español
          </RegularText>
        </UnorderedList>
      </RegularText>

      <Subheading1 text="Algoritmos" scrollId="scroll-id__basic-concepts-algorithms" />

      <RegularText>
        Un <BoldText>algoritmo</BoldText> es una secuencia de acciones lógicas
        necesarias para realizar una tarea en específico.
      </RegularText>

      <Subheading2 text="Características de los Algoritmos" />

      <RegularText>
        Todo algoritmo cumple las siguientes características.

        <UnorderedList>
          <RegularText>
            <BoldText>
              Finito:
            </BoldText>

            <Space />

            Tiene un inicio y un fin
          </RegularText>

          <RegularText>
            <BoldText>
              Preciso:
            </BoldText>

            <Space />

            Sus acciones son lógicas, por ende, no tienen ambigüedad
          </RegularText>

          <RegularText>
            <BoldText>
              Definido:
            </BoldText>

            <Space />

            Siempre produce el mismo resultado
          </RegularText>
        </UnorderedList>
      </RegularText>

      <Subheading1 text="Pseudocódigo" scrollId="scroll-id__basic-concepts-pseudocode" />

      <RegularText>
        Un <BoldText>pseudocódigo</BoldText> es una descripción <BoldText>en lenguaje humano</BoldText>

        <Space />

        de un algoritmo. El pseudocódigo contrasta con el código, el cual está
        escrito en la sintaxis de un <BoldText>lenguaje de programación</BoldText>

        <Space />

        en específico. Por ejemplo, el siguiente pseudocódigo describe cómo
        sumar dos números.
      </RegularText>

      <Fragment>
        <CodeText>
          1. Inicio
        </CodeText>

        <CodeText>
          2. A, B, C enteros
        </CodeText>

        <CodeText>
          3. A ← 0, B ← 0, C ← 0
        </CodeText>

        <CodeText>
          4. Leer A, B
        </CodeText>

        <CodeText>
          5. C ← A + B
        </CodeText>

        <CodeText>
          6. Mostrar C
        </CodeText>

        <CodeText>
          7. Fin
        </CodeText>
      </Fragment>

      <Subheading1 text="Diagramas de Flujo" scrollId="scroll-id__basic-concepts-flowcharts" />

      <RegularText>
        Un <BoldText>diagrama de flujo</BoldText> es una <BoldText>representación gráfica</BoldText>

        <Space />

        de un pseudocódigo. Los diagramas de flujo están compuestos por un conjunto
        estandarizado de figuras.
      </RegularText>

      <FlowchartFiguresTable />

      <Subheading1 text="Anexos" />

      <Link
        icon={<FaBookOpen />}
        title={InformaticsReferenceText}
        onClick={() => window.open(InformaticsReferenceUrl)}
      />
    </ArticleContainer>
  )
}
