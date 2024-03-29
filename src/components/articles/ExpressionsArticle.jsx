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
import UnorderedList from '../UnorderedList'
import OrderedList from '../OrderedList'
import Link from '../Link'
import { SiCodereview } from 'react-icons/si'

const ExpressionsPracticeUrl = "https://drive.google.com/file/d/117ed-UnlrMOCiJnBGWOT0C4H5UYXRqlW/view?usp=sharing"

export default () => {
    useSectionScrolling()

    return (
        <ArticleContainer>
          <Heading text="Expresiones" scrollId="scroll-id__expressions-title" />

          <RegularText>
            Las expresiones son combinaciones de <BoldText>valores</BoldText>

            <Space />

            y <BoldText>operadores</BoldText>, cuya <BoldText>evaluación</BoldText>

            <Space />

            produce un <BoldText>valor resultante</BoldText>.
          </RegularText>

          <Subheading1 text="Valores" scrollId="scroll-id__expressions-values" />

          <RegularText>
            Existen dos principales tipos de valores: los literales y las variables.

            Los <BoldText>literales</BoldText> son simplemente números o cadenas. Estos
            se referencian simplemente por la representación textual de su valor. Por ejemplo,
            <CodeText>6</CodeText> para el número seis y <CodeText>"hola"</CodeText> para
            una cadena. Por su parte, las <BoldText>variables</BoldText> son referenciadas
            mediante su nombre.
          </RegularText>

          <Subheading1 text="Operadores" scrollId="scroll-id__expressions-operators" />

          <RegularText>
            De manera general, un operador es un símbolo que indica una operación.
            Específicamente, existen tres distintos tipos operadores: aritméticos,
            relacionales y lógicos.
          </RegularText>

          <Subheading2 text="Operadores Aritméticos" />

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

          <Subheading2 text="Operadores Relacionales" />

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

          <Subheading2 text="Operadores Lógicos" />

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

          <Subheading1 text="Expresiones Aritméticas" scrollId="scroll-id__expressions-arithmetic-expressions" />

          <RegularText>
            Si una expresión contiene exclusivamente <BoldText>operadores aritméticos</BoldText>,
            se dice que es una <BoldText>expresión aritmética</BoldText>. Por ende, este tipo de
            expresiones producen exclusivamente <BoldText>números</BoldText>.
          </RegularText>

          <Subheading1 text="Expresiones Lógicas" scrollId="scroll-id__expressions-logical-expressions" />

          <RegularText>
            Si una expresión contiene por lo menos un <BoldText>operador relacional</BoldText>,
            se dice que es una <BoldText>expresión lógica</BoldText>. Por ende, este tipo de
            expresiones producen exclusivamente <BoldText>verdadero o falso</BoldText>. Además,
            cabe la posibilidad de que se usen <BoldText>operadores lógicos</BoldText>.
          </RegularText>

          <Subheading2 text="Condiciones Lógicas" />

          <RegularText>
            Si una <BoldText>expresión lógica</BoldText> se usa en el contexto de una estructura
            de control condicional, se dice que es una <BoldText>condición lógica</BoldText>.
            Es decir, una expresión lógica se convierte en una condición lógica cuando dependiendo
            de esta se altera el flujo de ejecución.
          </RegularText>

          <Subheading1 text="Evaluación" scrollId="scroll-id__expressions-evaluation" />

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

          <Subheading1 text="Anexos" />

          <Link
            icon={<SiCodereview />}
            title="Práctica #1: Expresiones"
            onClick={() => window.open(ExpressionsPracticeUrl)}
          />
        </ArticleContainer>
    )
}
