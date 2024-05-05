import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import UnorderedList from '../../components/UnorderedList'
import Fragment from '../../components/Fragment'
import FigureCarousel from '../../components/FigureCarousel'
import {
  Heading1,
  RegularText,
  BoldText,
  ItalicText,
  CodeText,
  Space
} from '../../components/Typography'
import { BsFillBookmarkFill } from 'react-icons/bs'

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

const FlowchartFiguresCarousel = () => {
  const figures = [
    {
      image: StartEndFigure,
      caption: "Inicio o fin"
    },
    {
      image: ProcessFigure,
      caption: "Proceso"
    },
    {
      image: ConditionalFigure,
      caption: "Condicional"
    },
    {
      image: CycleFigure,
      caption: "Ciclo"
    },
    {
      image: DataInputFigure,
      caption: "Entrada de datos"
    },
    {
      image: ScreenDisplayFigure,
      caption: "Impresión por pantalla"
    },
    {
      image: OnPageConnectorFigure,
      caption: "Conector en misma página"
    },
    {
      image: OffPageConnectorFigure,
      caption: "Conector a otra página"
    },
    {
      image: KeyboardInputFigure,
      caption: "Entrada por teclado"
    },
    {
      image: DatabaseFigure,
      caption: "Base de datos"
    },
    {
      image: CloudFigure,
      caption: "Nube"
    }
  ]

  return (
    <FigureCarousel
      figures={figures}
    />
  )
}

const GlossarySection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Datos e Información" />

      <RegularText>
        Un <BoldText>dato</BoldText> es una <BoldText>unidad mínima</BoldText>

        <Space />

        que puede ser almacenada y <BoldText>carece de significado por sí sola</BoldText>.
        Por su parte, el término <BoldText>información</BoldText> se refiere
        a todo conjunto de datos que ya pasó por un

        <Space />

        <BoldText>proceso de interpretación</BoldText>, de manera que ya
        adquiere un significado y utilidad.
      </RegularText>

      <Heading1 text="Informática" />

      <RegularText>
        La <BoldText>informática</BoldText> es la disciplina que se encarga de
        la creación de artificios capaces de la recolección, representación,
        organización y almacenamiento de la información de sistemas naturales
        (Cañedo, Ramos y Guerrero, 2005).
      </RegularText>

      <Heading1 text="Paradigma" />

      <RegularText>
        Un <BoldText>paradigma de programación</BoldText> es un conjunto de
        principios específicos que rigen el diseño e implementación de un
        sistema informático (Spigariol, 2005).
      </RegularText>
    </SectionContainer>
  )
}

const VariablesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Variables" />

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
    </SectionContainer>
  )
}

const PointersSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Punteros" />

      <RegularText>
        Un <BoldText>puntero</BoldText> es una <BoldText>dirección en memoria</BoldText>.
        Esta dirección en memoria puede ser la dirección en memoria de una
        <Space />

        <BoldText>variable</BoldText>, entonces se dice que

        <Space />

        <ItalicText>el puntero apunta a la variable</ItalicText>. También, esta
        dirección en memoria puede ser <BoldText>nula</BoldText>, entonces se
        dice que <ItalicText>el puntero no apunta a nada</ItalicText>.
      </RegularText>

      <RegularText>
        Una <BoldText>variable puntero</BoldText> a un tipo arbitrario
        <Space />

        <CodeText>T</CodeText> es una <BoldText>variable</BoldText> que almacena
        como valor la dirección en memoria de una variabla del mismo tipo

        <Space />

        <CodeText>T</CodeText>. Es decir, el tipo de la variable y el tipo al
        que la variable puntero apunta <BoldText>coinciden</BoldText>. Cabe
        destacar que las variables puntero siguen siendo

        <Space />

        <BoldText>variables ordinarias</BoldText>, por ende, tienen su

        <Space />

        <BoldText>propia dirección en memoria</BoldText>.
      </RegularText>

      <Heading1 text="Aritmética de Punteros" />

      <RegularText>
        La <BoldText>aritmética de punteros</BoldText> es el conjunto de operaciones
        propias de los punteros y las variables puntero.
      </RegularText>

      <UnorderedList>
        <RegularText>
          <CodeText>&x</CodeText>:

          <Space/>

          La dirección en memoria de la variable <CodeText>x</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>*p</CodeText>:

          <Space />

          El valor de la variable a la que apunta la variable puntero

          <Space />

          <CodeText>p</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>*p = y</CodeText>:

          <Space />

          Se almacena el valor <CodeText>y</CodeText> en la dirección en
          memoria que almacena la variable puntero <CodeText>p</CodeText>
        </RegularText>
      </UnorderedList>

      <RegularText>
        En el siguiente ejemplo, <CodeText>p</CodeText> apunta a una dirección
        nula, luego a <CodeText>x</CodeText> y finalmente el valor de

        <Space />

        <CodeText>x</CodeText> cambia de <CodeText>5</CodeText> a

        <Space />

        <CodeText>3</CodeText>.
      </RegularText>

      <Fragment>
        <CodeText>
          int x ← 5
        </CodeText>

        <CodeText>
          int *p ← NULL
        </CodeText>

        <CodeText>
          p ← &x
        </CodeText>

        <CodeText>
          *p ← 3
        </CodeText>
      </Fragment>
    </SectionContainer>
  )
}

const AlgorithmsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Algoritmos" />

      <RegularText>
        Un <BoldText>algoritmo</BoldText> es una secuencia de acciones lógicas
        necesarias para realizar una tarea en específico.
      </RegularText>

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

      <Heading1 text="Pseudocódigo" />

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

      <Heading1 text="Diagramas de Flujo" />

      <RegularText>
        Un <BoldText>diagrama de flujo</BoldText> es una <BoldText>representación gráfica</BoldText>

        <Space />

        de un pseudocódigo. Los diagramas de flujo están compuestos por un conjunto
        estandarizado de figuras.
      </RegularText>

      <FlowchartFiguresCarousel />
    </SectionContainer>
  )
}

const attachments = [
  {
    icon: <BsFillBookmarkFill />,
    title: "Cañedo R., Ramos R. E., Guerrero J. C. (2005). La Informática, la Computación y la Ciencia de la Información: una alianza para el desarrollo. Acimed, 13(5).",
    link: "http://scielo.sld.cu/scielo.php?pid=s1024-94352005000500007&script=sci_arttext"
  },
  {
    icon: <BsFillBookmarkFill />,
    title: "Spigariol, L. (2005). Fundamentos teóricos de los Paradigmas de Programación. (1a. ed.). Buenos Aires: Universidad Tecnológica Nacional",
    link: "https://d1wqtxts1xzle7.cloudfront.net/42704971/FundamTeoricosParadigProg-libre.pdf?1455640220=&response-content-disposition=inline%3B+filename%3DFundamentos_teoricos_de_los_Paradigmas_d.pdf&Expires=1714955488&Signature=bwwhOgXlBym-wCpuPr3myYEC~NWdBz8bP6FwV2K1OBxwQSCn6f~9r88UKrfCKOWTp4vtcs6pykfwhMDhB2P8Uc~f163UT3tEw8NPdbID61xbz0d2DAfCQTHmIG1Iqq~DRe-bN6dkBQ3eA3gcnjgfFblQd5IQPTWgxtQ1mTDL48wDpQSchB8-f3LepdUTo3xG9ebe4O5joXetvHGmQbOzGGcxdVdMmOtV6vSOWxa1BqVgBuJQd3R0EBzBXFKa03-dHov0x4DitUgw3EgVwCVF50x-Fh9IDaT4XWi2oJPnRjNqVGN9U~45GEnF4Bgku~UJ2HoYsybTDBQdt1VbQFa9cA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
  }
]

const routingConfiguration = {
  defaultRoute: "glossary/",
  routes: [
    {
      title: "Glosario",
      route: "glossary/",
      component: <GlossarySection />
    },
    {
      title: "Variables",
      route: "variables/",
      component: <VariablesSection />
    },
    {
      title: "Punteros",
      route: "pointers/",
      component: <PointersSection />
    },
    {
      title: "Algoritmos, Pseudocódigo y Diagramas de Flujo",
      route: "algorithms-pseudocode-flowcharts/",
      component: <AlgorithmsSection />
    },
  ]
}

export default () => {
  return (
    <ArticleContainer
      title="Conceptos Básicos"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        El presente artículo explica algunos conceptos básicos necesarios para
        entender los fundamentos de la programación.
      </RegularText>
    </ArticleContainer>
  )
}
