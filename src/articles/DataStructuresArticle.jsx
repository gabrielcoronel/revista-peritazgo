import ArticleContainer from '../components/ArticleContainer'
import SectionContainer from '../components/SectionContainer'
import Fragment from '../components/Fragment'
import OrderedList from '../components/OrderedList'
import UnorderedList from '../components/UnorderedList'
import {
  Heading1,
  Heading2,
  RegularText,
  BoldText,
  ItalicText,
  Space,
  CodeText
} from '../components/Typography'

import DataStructureClassificationDiagramFigure from '../../public/data-structures-figures/data-structure-classification-diagram.png'

const DataStructureClassificationDiagram = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <img
        onClick={() => window.open(DataStructureClassificationDiagramFigure)}
        className="object-fit w-2/3 rounded-md cursor-pointer"
        src={DataStructureClassificationDiagramFigure}
      />
    </div>
  )
}

const ClassificationSection = () => {
    return (
      <SectionContainer>
        <DataStructureClassificationDiagram />
      </SectionContainer>
    )
}

const StaticsSection = () => {
  return (
    <SectionContainer>
      <Heading1
        text="Estructuras de Datos Estáticas"
        scrollId="scroll-id__data-structures-static"
      />

      <RegularText>
        Una <BoldText>estructura de datos estática</BoldText> es aquella cuyo
        tamaño no puede cambiar en tiempo de ejecución. Existen dos principales
        tipos de estructuras de datos estáticas: los <BoldText>arreglos</BoldText>

        <Space />

        y los <BoldText>registros</BoldText>.
      </RegularText>

      <Heading2 text="Arreglos" />

      <RegularText>
        Los <BoldText>arreglos</BoldText> son estructuras de datos estáticas que
        almacenan datos del <BoldText>mismo tipo</BoldText> en un mismo

        <Space />

        <BoldText>bloque continuo de memoria</BoldText>. Cada dato en un
        arreglo tiene asignado una posición en cada dimensión, llamada

        <Space />

        <BoldText>índice</BoldText>, empezando en <CodeText>0</CodeText>.
        Existen dos tipos de arreglos especiales según su cantidad de
        dimensiones: los <BoldText>vectores</BoldText>

        <Space />

        y las <BoldText>matrices</BoldText>.
      </RegularText>

      <RegularText>
        Los <BoldText>vectores</BoldText> son <BoldText>arreglos unidimensionales</BoldText>.
        Es decir, para acceder a un elemento en un vector se ocupa un único índice.
      </RegularText>

      <Fragment>
        <CodeText>
          v[4] {">"} 10
        </CodeText>

        <CodeText>
          v[0] ← 3
        </CodeText>
      </Fragment>

      <RegularText>
        En el ejemplo anterior, para un vector <CodeText>v</CodeText> de enteros:
      </RegularText>

      <OrderedList>
        <RegularText>
          Se compara el quinto elemento con el número <CodeText>10</CodeText>
        </RegularText>

        <RegularText>
          Se almacena el número <CodeText>3</CodeText> en la primera posición
        </RegularText>
      </OrderedList>

      <RegularText>
        Las <BoldText>matrices</BoldText> son <BoldText>arreglos bidimensionales</BoldText>.
        Es decir, para acceder a un elemento en una matriz se ocupan dos índices,
        un índice para la <BoldText>fila</BoldText> y otro índice para la

        <Space />

        <BoldText>columna</BoldText>.
      </RegularText>

      <Fragment>
        <CodeText>
          m[3, 2] != 0
        </CodeText>

        <CodeText>
          m[0, 0] ← 5
        </CodeText>
      </Fragment>

      <RegularText>
        En el ejemplo anterior, para una matriz <CodeText>m</CodeText>:
      </RegularText>

      <OrderedList>
        <RegularText>
          Se compara el elemento en la cuarta fila y tercera columna con el
          número <CodeText>0</CodeText>
        </RegularText>

        <RegularText>
          Se almacena el número <CodeText>5</CodeText> en la primera fila y
          primera columna
        </RegularText>
      </OrderedList>

      <Heading2 text="Registros" />

      <RegularText>
        Los <BoldText>registros</BoldText> son estructuras de datos estáticas
        que almacenan datos de <BoldText>distintos tipos</BoldText> en un mismo

        <Space />

        <BoldText>bloque continuo de memoria</BoldText>. Cada dato en un registro
        tiene asignado un identificador único textual, llamado

        <Space />

        <BoldText>llave</BoldText>. Por ende, para acceder a un elemento en un
        registro de ocupa una única llave.
      </RegularText>

      <Fragment>
        <CodeText>
          r.nombre == "Gabriel"
        </CodeText>

        <CodeText>
          r.edad ← 10
        </CodeText>
      </Fragment>

      <RegularText>
        En el ejemplo anterior, para un registro <CodeText>r</CodeText>:
      </RegularText>

      <OrderedList>
        <RegularText>
          Se compara el valor asociado a la llave <CodeText>nombre</CodeText>

          <Space />

          con la cadena <CodeText>"Gabriel"</CodeText>
        </RegularText>

        <RegularText>
          Se almacena el número <CodeText>10</CodeText> bajo la llave
          <Space />

          <CodeText>edad</CodeText>
        </RegularText>
      </OrderedList>
    </SectionContainer>
  )
}

const DynamicsSection = () => {
  return (
    <SectionContainer>
      <Heading1
        text="Estructuras de Datos Dinámicas"
        scrollId="scroll-id__data-structures-dynamic"
      />

      <RegularText>
        Una <BoldText>estructura de datos dinámica</BoldText> es aquella cuyo
        tamaño puede cambiar en tiempo de ejecución. Las estructuras de datos
        dinámicas se clasifican en <BoldText>lineales</BoldText> y

        <Space />

        <BoldText>no lineales</BoldText>. A pesar de esta diferenciación,
        siempre hay un mismo protagonista en todas las estructuras de datos
        dinámicas: <BoldText>el nodo</BoldText>
      </RegularText>

      <Heading2 text="Nodos" />

      <RegularText>
        Un <BoldText>nodo</BoldText> es un <BoldText>registro</BoldText> que
        tiene al menos dos campos:
      </RegularText>

      <UnorderedList>
        <RegularText>
          Un campo para almacenar un valor de un tipo arbitrario <CodeText>T</CodeText>
        </RegularText>

        <RegularText>
          Un campo para almacenar un puntero a <CodeText>T</CodeText>
        </RegularText>
      </UnorderedList>

      <Heading2 text="Estructuras de Datos Dinámicas Lineales" />

      <RegularText>
        Las <BoldText>estructuras de datos dinámicas lineales</BoldText> son
        estructuras de datos dínamicas que cumplen la propiedad de que para
        acceder a cualquier elemento en la estructura, se tienen que

        <Space />

        <BoldText>recorrer todos los elementos anteriores a este</BoldText>.
      </RegularText>

      <Heading2 text="Listas Enlazadas" />

      <RegularText>
        Las <BoldText>listas enlazadas</BoldText> (también conocidas como
        <Space />

        <ItalicText>arreglos dinámicos</ItalicText>) son estructuras de datos
        dinámicas lineales que almacenan datos del <BoldText>mismo tipo</BoldText>.
        Las listas enlazadas son el principal tipo de estructuras de datos dinámicas
        lineales.
      </RegularText>

      <RegularText>
        Una lista enlazada se implementa como una

        <Space />

        <BoldText>secuencia de nodos</BoldText>

        donde cada nodo tiene su campo de puntero

        <Space />

        <BoldText>apuntando a otro nodo en la secuencia</BoldText>

        (que no haya sido apuntado por otro nodo anteriormente), a excepción del
        último nodo de la lista.
      </RegularText>

      <Heading2 text="Estructuras de Datos Dinámicas No Lineales" />

      <RegularText>
        Las <BoldText>estructuras de datos dinámicas no lineales</BoldText> son
        estructuras de datos dinámicas en las cuales no es necesario recorrer todos
        los elementos anteriores para acceder a un elemento cualquiera en la
        estructura.
      </RegularText>

      <Heading2 text="Árboles" />

      <RegularText>
        Los <BoldText>árboles</BoldText> son estructuras de datos dinámicas no
        lineales, donde cada nodo en la estructura tiene al menos dos campos para
        almacenar punteros a otros nodos en la estructura.
      </RegularText>

      <RegularText>
        Existen dos categorías de árboles según la cantidad de punteros que almacena
        nodo contenido en el árbol:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>
            Árboles binarios:
          </BoldText>

          <Space />

          Cada nodo almacena dos punteros
        </RegularText>

        <RegularText>
          <BoldText>
            Árboles n-arios:
          </BoldText>

          <Space />

          Cada nodo almacena más de dos punteros
        </RegularText>
      </UnorderedList>

      <Heading2 text="Grafos" />

      <RegularText>
        Los <BoldText>grafos</BoldText> son estructuras de datos dinámicas no
        lineales, donde cada nodo almacena una <BoldText>lista enlazada</BoldText>
        de punteros a otros nodes en la estructura. De esta manera, los nodos
        de un grafo pueden tener una cantidad arbitraria de hijos, a diferencia de
        los árboles.
      </RegularText>
    </SectionContainer>
  )
}

const routingConfiguration = {
  defaultRoute: "classification/",
  routes: [
      {
          title: "Clasificación",
          route: "classification/",
          component: <ClassificationSection />
      },
      {
          title: "Estáticas",
          route: "static/",
          component: <StaticsSection />
      },
      {
          title: "Dinámicas",
          route: "dynamic/",
          component: <DynamicsSection />
      },
  ]
}

export default () => {
    return (
        <ArticleContainer
            title="Estructuras de Datos"
            routingConfiguration={routingConfiguration}
        >
            <RegularText>
                Las <BoldText>estructuras de datos</BoldText> son todos aquellos
                mecanismos que permiten la <BoldText>organización de datos</BoldText>.
            </RegularText>
        </ArticleContainer>
    )
}
