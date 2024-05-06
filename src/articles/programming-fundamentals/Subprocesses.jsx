import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import Fragment from '../../components/Fragment'
import OrderedList from '../../components/OrderedList'
import UnorderedList from '../../components/UnorderedList'
import {
  Heading1,
  RegularText,
  BoldText,
  ItalicText,
  CodeText,
  Space
} from '../../components/Typography'

const SubprocessesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Subprocesos" />

      <RegularText>
        A diferencia de los algoritmos regulares, los subprocesos requieren de
        dos etapas para poder ejecutarse:
      </RegularText>

      <OrderedList>
        <RegularText>
          <BoldText>Definición</BoldText>:

          <Space />

          Se <BoldText>crea</BoldText> el subproceso, de momento solo existe.
        </RegularText>

        <RegularText>
          <BoldText>Invocación</BoldText>:

          <Space />

          Se <BoldText>llama</BoldText> el subproceso, sus instrucciones se
          ejecutan secuencialmente.
        </RegularText>
      </OrderedList>

      <RegularText>
        Adicionalmente, los subprocesos se pueden clasificar en dos principales
        tipos. Esta clasificación se da dependiendo de sí el subproceso
        <Space />

        <BoldText>devuelve un valor al algoritmo principal</BoldText> después
        de finalizar su invocación.
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Funciones</BoldText>:

          <Space />

          Devuelven un valor al algoritmo principal.
        </RegularText>

        <RegularText>
          <BoldText>Procedimientos</BoldText>:

          <Space />

          No devuelven ningún valor al algoritmo principal.
        </RegularText>
      </UnorderedList>

      <RegularText>
        En el siguiente ejemplo se definen e invocan dos subprocesos, sin embargo
        solo <CodeText>funcion</CodeText> devuelve un valor mientras que

        <Space />

        <CodeText>procedimiento</CodeText> no. Entonces, <CodeText>resultado</CodeText>

        <Space />

        almacena el resultado de <CodeText>funcion</CodeText> antes de ser
        imprimido.
      </RegularText>

      <Fragment>
        <CodeText>
          Subproceso funcion()
        </CodeText>

        <CodeText>
          <Space /><Space />Devolver 3
        </CodeText>

        <CodeText>
          FinSubproceso
        </CodeText>

        <CodeText>
          Subproceso procedimiento()
        </CodeText>

        <CodeText>
          <Space /><Space />Imprimir 3
        </CodeText>

        <CodeText>
          FinSubproceso
        </CodeText>

        <CodeText>
          Declarar resultado Como Entero
        </CodeText>

        <CodeText>
          resultado ← funcion()
        </CodeText>

        <CodeText>
          Imprimir resultado
        </CodeText>
      </Fragment>
    </SectionContainer>
  )
}

const ParametersSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Parámetros" />
      
      <RegularText>
        Un <BoldText>parámetro de un subproceso</BoldText> es una variable
        proveniente del algoritmo principal que

        <Space />

        <BoldText>define el comportamiento</BoldText> del subproceso. Un
        subproceso puede <ItalicText>recibir</ItalicText> parámetros de dos
        maneras distintas: por valor y por referencia.
      </RegularText>

      <RegularText>
        Si un parámetro se <BoldText><ItalicText>pasa</ItalicText> por valor</BoldText>,

        <Space />

        se pasa una copia del valor, por lo que el valor de la variable original en el
        algoritmo principal <BoldText>no cambia</BoldText>. Por defecto, los
        parámetros se pasan por valor. En el siguiente ejemplo, el valor de
        <CodeText>variable</CodeText> no cambia tras la invocación del subproceso,
        entonces se imprime <CodeText>0</CodeText>.
      </RegularText>

      <Fragment>
        <CodeText>
          Subproceso cambiar(variable)
        </CodeText>

        <CodeText>
          <Space /><Space />variable ← 1
        </CodeText>

        <CodeText>
          FinSubproceso
        </CodeText>

        <CodeText>
          Declarar variable Como Entero
        </CodeText>

        <CodeText>
          variable ← 0
        </CodeText>

        <CodeText>
          cambiar(variable)
        </CodeText>

        <CodeText>
          Imprimir variable
        </CodeText>
      </Fragment>

      <RegularText>
        Si un parámetro se <BoldText><ItalicText>pasa</ItalicText> por referencia</BoldText>,

        <Space />

        se pasa una referencia a la variable original, por lo que el valor de la
        variable original en el algoritmo principal <BoldText>puede ser cambiado</BoldText>

        <Space />

        desde el subproceso. En el siguiente ejemplo, el valor de

        <Space />

        <CodeText>variable</CodeText> cambia tras la invocación del subproceso,
        entonces se imprime <CodeText>1</CodeText>.
      </RegularText>

      <Fragment>
        <CodeText>
          Subproceso cambiar(Referencia variable)
        </CodeText>

        <CodeText>
          <Space /><Space />variable ← 1
        </CodeText>

        <CodeText>
          FinSubproceso
        </CodeText>

        <CodeText>
          Declarar variable Como Entero
        </CodeText>

        <CodeText>
          variable ← 0
        </CodeText>

        <CodeText>
          cambiar(variable)
        </CodeText>

        <CodeText>
          Imprimir variable
        </CodeText>
      </Fragment>
    </SectionContainer>
  )
}

const routingConfiguration = [
  {
    title: "Subprocesos",
    route: "subprocesses/",
    component: <SubprocessesSection />
  },
  {
    title: "Parámetros",
    route: "parameters/",
    component: <ParametersSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Subprocesos"
      routingConfiguration={routingConfiguration}
    >
      <RegularText>
        Un <BoldText>subproceso, subalgoritmo o subrutina</BoldText> es un algoritmo
        que forma parte de otro algoritmo principal, sin embargo, existe
        afuera de este algoritmo principal.
      </RegularText>
    </ArticleContainer>
  )
}
