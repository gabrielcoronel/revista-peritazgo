import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import Fragment from '../../components/Fragment'
import OrderedList from '../../components/OrderedList'
import Figure from '../../components/Figure'
import {
  Heading1,
  RegularText,
  BoldText,
  CodeText,
  Space
} from '../../components/Typography'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'

import SimpleConditionalFigure from '../../../public/control-flow-statements-figures/simple-conditional.svg'
import DoubleConditionalFigure from '../../../public/control-flow-statements-figures/double-conditional.svg'
import MultipleConditionalFigure from '../../../public/control-flow-statements-figures/multiple-conditional.svg'
import NestedConditionalFigure from '../../../public/control-flow-statements-figures/nested-conditional.svg'
import ForCycleFigure from '../../../public/control-flow-statements-figures/for-cycle.svg'
import WhileCycleFigure from '../../../public/control-flow-statements-figures/while-cycle.svg'
import DoWhileCycleFigure from '../../../public/control-flow-statements-figures/do-while-cycle.svg'

const SequentialsSection = () => {
  return (
    <SectionContainer>
      <Heading1
        text="Estructuras de Control Secuenciales"
      />

      <RegularText>
        Las <BoldText>estructuras de control secuenciales</BoldText> ejecutan una
        secuencia de acciones en orden, una acción tras otra.
      </RegularText>

      <Fragment>
        <CodeText>
          1. NUMERO ← 0
        </CodeText>

        <CodeText>
          2. DOBLE ← 0
        </CodeText>

        <CodeText>
          3. Leer NUMERO
        </CodeText>

        <CodeText>
          4. DOBLE ← NUMERO * 2
        </CodeText>

        <CodeText>
          5. Mostrar DOBLE
        </CodeText>
      </Fragment>
    </SectionContainer>
  )
}

const ConditionalsSection = () => {
  return (
    <SectionContainer>
      <Heading1
        text="Estructuras de Control Selectivas"
      />

      <RegularText>
        Las <BoldText>estructuras de control selectivas</BoldText> ejecutan
        estructuras de control específicas si se cumplen una o más

        <Space />

        <BoldText>condiciones lógicas</BoldText> dadas. Existen tres tipos de
        estructuras de control selectivas: los condicionales simples, los
        condicionales dobles, los condicionales múltiples y los condicionales
        anidados.
      </RegularText>

      <Heading1 text="Condicionales Simples" />

      <RegularText>
        Los <BoldText>condicionales simples</BoldText> ejecutan una estructura
        de control específica si la condición lógica dada es verdadera. De lo
        contrario, el flujo de ejecución sigue naturalmente.
      </RegularText>

      <Figure
        image={SimpleConditionalFigure}
        caption="Un condicional simple"
      />

      <Heading1 text="Condicionales Dobles" />

      <RegularText>
        Los <BoldText>condicionales dobles</BoldText> ejecutan una estructura
        de control específica si la condición lógica dada es verdadera. De lo
        contrario, ejecutan otra estructura de control distinta.
      </RegularText>

      <Figure
        image={DoubleConditionalFigure}
        caption="Un condicional doble"
      />

      <Heading1 text="Condicionales Múltiples" />

      <RegularText>
        Los <BoldText>condicionales múltiples</BoldText> asocian en orden cada
        una de las <BoldText>tres o más</BoldText> distintas condiciones lógicas
        dadas con una respectiva estructura de control. Entonces, se ejecuta la
        estructura de control asociada con la primera condición lógica que
        resulte verdadera.
      </RegularText>

      <Figure
        image={MultipleConditionalFigure}
        caption="Un condicional múltiple"
      />

      <Heading1 text="Condicionales Anidados" />

      <RegularText>
        Los <BoldText>condicionales anidados</BoldText> son estructuras de
        control selectivas que tienen otras estructuras de control selectivas
        como sus <BoldText>estructuras de control a ejecutar</BoldText>.
      </RegularText>

      <Figure
        image={NestedConditionalFigure}
        caption="Un condicional anidado"
      />
    </SectionContainer>
  )
}

const CyclesSection = () => {
  return (
    <SectionContainer>
      <Heading1
        text="Estructuras de Control Repetitivas"
      />

      <RegularText>
        Las <BoldText>estructuras de control repetitivas</BoldText> repiten la
        ejecución de estructuras de control específicas mientras se cumpla una

        <Space />

        <BoldText>condición lógica</BoldText> dada. Existen tres tipos de
        estructuras de control repetitivas: los ciclos para, los ciclos mientras
        y los ciclos hacer-mientras.
      </RegularText>

      <Heading1 text="Elementos de los Ciclos" />

      <RegularText>
        Toda estructura de control repetitiva involucra tres elementos.
      </RegularText>

      <OrderedList>
        <RegularText>
          Una variable númerica con un <BoldText>valor inicial</BoldText>.
        </RegularText>

        <RegularText>
          Una <BoldText>condición lógica</BoldText> que indique cuándo terminar
          la repetición.
        </RegularText>

        <RegularText>
          Una instrucción de <BoldText>incremento o decremento</BoldText> que
          eventualmente cause que la variable con el valor el inicial cumpla
          la condición lógica.
        </RegularText>
      </OrderedList>

      <Heading1 text="Ciclos Para" />

      <RegularText>
        Los <BoldText>ciclos para</BoldText> son estructuras de control repetitivas
        que contienen la inicialización de la variable con el valor inicial,
        la condición lógica y la instrucción de incremento o decremento, todo
        en una <BoldText>única y misma cláusula</BoldText>.
      </RegularText>

      <Figure
        image={ForCycleFigure}
        caption="Un ciclo para"
      />

      <Heading1 text="Ciclos Mientras" />

      <RegularText>
        Los <BoldText>ciclos mientras</BoldText> son estructuras de control
        repetitivas que tienen la inicialización de la variable con el valor
        inicial, la condición lógica y la instrucción de incremento o decremento
        en <BoldText>distintas cláusulas</BoldText>.
      </RegularText>

      <Figure
        image={WhileCycleFigure}
        caption="Un ciclo mientras"
      />

      <Heading1 text="Ciclos Hacer-Mientras" />

      <RegularText>
        Los <BoldText>ciclos hacer-mientras</BoldText> son estructuras de control
        repetitivas que al igual que los ciclos mientras, tienen sus elementos
        en <BoldText>distintas cláusulas</BoldText>. Sin embargo, a diferencia
        de los ciclos mientras, los ciclos hacer-mientras garantizan al menos
        una ejecución de las estructuras de control a ejecutar independientemente
        del valor inicial o la condición lógica.
      </RegularText>

      <Figure
        image={DoWhileCycleFigure}
        caption="Un ciclo hacer-mientras"
      />
    </SectionContainer>
  )
}

const attachments = [
  {
    icon: <IoExtensionPuzzleSharp />,
    title: "Práctica #2: Pseudocódigo y Diagramas de Flujo",
    link: "https://drive.google.com/file/d/16LdLBhjuEYJVwATn--o0eYmB080yThVU/view?usp=sharing"
  }
]

const routingConfiguration = [
  {
    title: "Secuenciales",
    route: "sequentials/",
    component: <SequentialsSection />
  },
  {
    title: "Condicionales",
    route: "conditionals/",
    component: <ConditionalsSection />
  },
  {
    title: "Repetitivas",
    route: "cycles/",
    component: <CyclesSection />
  },
]

export default () => {
  return (
    <ArticleContainer
      title="Estructuras de Control"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        Las <BoldText>estructuras de control</BoldText> definen el

        <Space />

        <BoldText>flujo de ejecución</BoldText> de un algoritmo. Existen tres
        tipos de estructuras de control: secuenciales, selectivas y repetitivas.
      </RegularText>
    </ArticleContainer>
  )
}
