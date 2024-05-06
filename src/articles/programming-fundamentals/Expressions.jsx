import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import UnorderedList from '../../components/UnorderedList'
import OrderedList from '../../components/OrderedList'
import {
  Heading1,
  RegularText,
  BoldText,
  CodeText,
  Space
} from '../../components/Typography'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'

const ValuesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Valores" />

      <RegularText>
        Existen dos principales tipos de valores: los literales y las variables.

        Los <BoldText>literales</BoldText> son simplemente números o cadenas. Estos
        se referencian simplemente por la representación textual de su valor. Por ejemplo,
        <CodeText>6</CodeText> para el número seis y <CodeText>"hola"</CodeText> para
        una cadena. Por su parte, las <BoldText>variables</BoldText> son referenciadas
        mediante su nombre.
      </RegularText>
    </SectionContainer>
  )
}

const OperatorsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Operadores" />

      <RegularText>
        De manera general, un operador es un símbolo que indica una operación.
        Específicamente, existen tres distintos tipos operadores: aritméticos,
        relacionales y lógicos.
      </RegularText>

      <Heading1 text="Operadores Aritméticos" />

      <RegularText>
        Los <BoldText>operadores aritméticos</BoldText> indican operaciones matemáticas
        entre números, produciendo un número resultante. Para dos números <CodeText>A</CodeText>

        <Space />

        y <CodeText>B</CodeText>:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <CodeText>
            A + B
          </CodeText>:

          <Space />

          Suma de <CodeText>A</CodeText> y <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A - B
          </CodeText>:

          <Space />

          Resta de <CodeText>A</CodeText> y <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            -A
          </CodeText>:

          <Space />

          Negatividad de <CodeText>A</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A * B
          </CodeText>:

          <Space />

          Producto de <CodeText>A</CodeText> y <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A / B
          </CodeText>:

          <Space />

          División de <CodeText>A</CodeText> entre <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A % B
          </CodeText>

          <Space />

          o

          <Space />

          <CodeText>
            A mod B
          </CodeText>:

          <Space />

          Residuo de la división de <CodeText>A</CodeText> entre <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A ^ B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> elevado a la potencia <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            RC(A)
          </CodeText>:

          <Space />

          Raíz cuadrada de <CodeText>A</CodeText>
        </RegularText>
      </UnorderedList>

      <Heading1 text="Operadores Relacionales" />

      <RegularText>
        Los <BoldText>operadores relacionales o comparativos</BoldText> valoran el orden o equidad
        entre números, produciendo verdadero o falso. Para dos números

        <Space />

        <CodeText>A</CodeText> y <CodeText>B</CodeText>:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <CodeText>
            A == B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> y <CodeText>B</CodeText> tienen el mismo valor
        </RegularText>

        <RegularText>
          <CodeText>
            A != B
          </CodeText>

          <Space />

          o

          <Space />

          <CodeText>
            A {'<>'} B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> y <CodeText>B</CodeText> tienen distinto valor
        </RegularText>

        <RegularText>
          <CodeText>
            A {'<'} B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> es menor que <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A {'<='} B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> es menor o igual que <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A {'>'} B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> es mayor que <CodeText>B</CodeText>
        </RegularText>

        <RegularText>
          <CodeText>
            A {'>='} B
          </CodeText>:

          <Space />

          <CodeText>A</CodeText> es mayor o igual que <CodeText>B</CodeText>
        </RegularText>
      </UnorderedList>

      <Heading1 text="Operadores Lógicos" />

      <RegularText>
        Los <BoldText>operadores lógicos</BoldText> indican operaciones lógicas
        entre valores de verdadero o falso, produciendo verdadero o falso. Para
        dos valores de verdadero o falso <CodeText>A</CodeText> y <CodeText>B</CodeText>:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <CodeText>
            A && B
          </CodeText>

          <Space />

          o

          <Space />

          <CodeText>
            A ∧ B
          </CodeText>:

          <Space />

          La conjunción de <CodeText>A</CodeText> y <CodeText>B</CodeText>, verdadero si

          <Space />

          <BoldText>ambos</BoldText> <CodeText>A</CodeText> y <CodeText>B</CodeText> son verdaderos
        </RegularText>

        <RegularText>
          <CodeText>
            A || B
          </CodeText>

          <Space />

          o

          <Space />

          <CodeText>
            A ∨ B
          </CodeText>:

          <Space />

          La disyunción de <CodeText>A</CodeText> y <CodeText>B</CodeText>, verdadero si

          <Space />

          <BoldText>al menos uno</BoldText> de <CodeText>A</CodeText> o <CodeText>B</CodeText>

          <Space />

          es verdadero
        </RegularText>

        <RegularText>
          <CodeText>
            !A
          </CodeText>

          <Space />

          o

          <Space />

          <CodeText>
            ¬A
          </CodeText>:

          <Space />

          La negación de <CodeText>A</CodeText>, verdadero si <CodeText>A</CodeText> es falso,

          <Space />

          falso si <CodeText>A</CodeText> es verdadero
        </RegularText>
      </UnorderedList>
    </SectionContainer>
  )
}

const ExpressionsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Expresiones Aritméticas" />

      <RegularText>
        Si una expresión contiene exclusivamente <BoldText>operadores aritméticos</BoldText>,
        se dice que es una <BoldText>expresión aritmética</BoldText>. Por ende, este tipo de
        expresiones producen exclusivamente <BoldText>números</BoldText>.
      </RegularText>

      <Heading1 text="Expresiones Lógicas" />

      <RegularText>
        Si una expresión contiene por lo menos un <BoldText>operador relacional</BoldText>,
        se dice que es una <BoldText>expresión lógica</BoldText>. Por ende, este tipo de
        expresiones producen exclusivamente <BoldText>verdadero o falso</BoldText>. Además,
        cabe la posibilidad de que se usen <BoldText>operadores lógicos</BoldText>.
      </RegularText>

      <Heading1 text="Condiciones Lógicas" />

      <RegularText>
        Si una <BoldText>expresión lógica</BoldText> se usa en el contexto de una estructura
        de control condicional, se dice que es una <BoldText>condición lógica</BoldText>.
        Es decir, una expresión lógica se convierte en una condición lógica cuando dependiendo
        de esta se altera el flujo de ejecución.
      </RegularText>
    </SectionContainer>
  )
}

const EvaluationSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Evaluación" />

      <RegularText>
        Para evaluar una expresión, se evalúa el uso de los distintos operadores en la
        expresión. El orden de evaluación de los operadores en la expresión es de la
        siguiente manera:
      </RegularText>

      <OrderedList>
        <RegularText>
          Se evalúa lo que está adentro de los paréntesis, de adentro hacia afuera.
        </RegularText>

        <RegularText>
          Se evalúan los operadores aritméticos, con la siguiente precedencia:

          <OrderedList>
            <RegularText>
              Potencias y raíces
            </RegularText>

            <RegularText>
              Negatividades
            </RegularText>

            <RegularText>
              Multiplicaciones, divisiones y residuos
            </RegularText>

            <RegularText>
              Sumas y restas
            </RegularText>
          </OrderedList>
        </RegularText>

        <RegularText>
          Se evalúan los operadores relacionales, con precedencia de izquierda a derecha
        </RegularText>

        <RegularText>
          Se evalúan los operadores lógicos, con la siguiente precedencia:

          <OrderedList>
            <RegularText>
              Negaciones
            </RegularText>

            <RegularText>
              Conjunciones
            </RegularText>

            <RegularText>
              Disyunciones
            </RegularText>
          </OrderedList>
        </RegularText>
      </OrderedList>
    </SectionContainer>
  )
}

const attachments = [
  {
    icon: <IoExtensionPuzzleSharp />,
    title: "Práctica #1: Expresiones",
    link: "https://drive.google.com/file/d/117ed-UnlrMOCiJnBGWOT0C4H5UYXRqlW/view?usp=sharing"
  }
]

const routingConfiguration = [
  {
    title: "Valores",
    route: "values/",
    component: <ValuesSection />
  },
  {
    title: "Operadores",
    route: "operators/",
    component: <OperatorsSection />
  },
  {
    title: "Expresiones",
    route: "expressions/",
    component: <ExpressionsSection />
  },
  {
    title: "Evaluación",
    route: "evaluation/",
    component: <EvaluationSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Expresiones"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        Las expresiones son combinaciones de <BoldText>valores</BoldText>

        <Space />

        y <BoldText>operadores</BoldText>, cuya <BoldText>evaluación</BoldText>

        <Space />

        produce un <BoldText>valor resultante</BoldText>.
      </RegularText>
    </ArticleContainer>
  )
}
