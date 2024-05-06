import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import Fragment from '../../components/Fragment'
import OrderedList from '../../components/OrderedList'
import UnorderedList from '../../components/UnorderedList'
import {
  Heading1,
  Heading2,
  RegularText,
  BoldText,
  ItalicText,
  Space,
  CodeText
} from '../../components/Typography'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'

import DataStructureClassificationDiagramFigure from '../../../public/data-structures-figures/data-structure-classification-diagram.png'

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
      <Heading1 text="Estructuras de Datos Estáticas" />

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
        registro se ocupa una única llave.
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

const SortingSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Algoritmos de Ordenamiento de Vectores" />

      <RegularText>
        Existen tres principales algoritmos los cuáles dados un vector de números
        desordenado, ordenan el vector según un

        <Space />

        <ItalicText>criterio de ordenamiento</ItalicText>. Estos algoritmos se
        denominan:
      </RegularText>

      <UnorderedList>
        <RegularText>Ordenamiento Burbuja</RegularText>

        <RegularText>Ordenamiento por Selección</RegularText>

        <RegularText>Ordenamiento por Inserción</RegularText>
      </UnorderedList>


      <Heading1 text="Ordenamiento Burbuja" />

      <RegularText>
        El <BoldText>ordenamiento burbuja</BoldText> consiste en intercambiar
        secuencialmente los valores en posiciones adyacentes si se cumple el
        criterio dado, y repetir este proceso una vez por cada elemento en el
        vector. Específicamente para un vector <CodeText>v</CodeText> con longitud

        <Space />

        <CodeText>l</CodeText>.
      </RegularText>

      <OrderedList>
        <RegularText>
          Intercambiar <CodeText>v[i]</CodeText> con <CodeText>v[i + 1]</CodeText>

          <Space />

          por cada <CodeText>i</CodeText> tal que <CodeText>0 ≤ i ≤ (l - 2)</CodeText>

          <Space />

          en orden.
        </RegularText>

        <RegularText>
          Repetir el primer paso <CodeText>l</CodeText> veces.
        </RegularText>
      </OrderedList>

      <Heading1 text="Ordenamiento por Selección" />

      <RegularText>
        El <BoldText>ordenamiento por selección</BoldText> consiste en identificar
        la posición del <ItalicText>n-ésimo mínimo</ItalicText> del vector e
        intercambiar el valor en la posición identificada por el valor de la
        <ItalicText>n-ésima</ItalicText> posición del vector. Específicamente
        para un vector <CodeText>v</CodeText> con longitud <CodeText>l</CodeText>.
      </RegularText>

      <OrderedList>
        <RegularText>
          Sea <CodeText>posicion_actual ← 0</CodeText> inicialmente.
        </RegularText>

        <RegularText>
          Sea <CodeText>posicion_minimo ← posicion_actual</CodeText>.
        </RegularText>

        <RegularText>
          Por cada <CodeText>i</CodeText> tal que <CodeText>0 ≤ i ≤ (l - 1)</CodeText>
          
          <Space />

          actualizar <CodeText>posicion_minimo ← i</CodeText> solo si

          <Space />

          <CodeText>v[i] {"<"} v[posicion_minimo]</CodeText>.
        </RegularText>

        <RegularText>
          Intercambiar <CodeText>v[posicion_actual]</CodeText> con

          <Space />

          <CodeText>v[posicion_minimo]</CodeText>.
        </RegularText>

        <RegularText>
          Repetir los primeros cuatro pasos con
          <CodeText>posicion_actual ← posicion_actual + 1</CodeText> mientras
          que <CodeText>posiciona_actual {"<"} l</CodeText>.
        </RegularText>
      </OrderedList>

      <Heading1 text="Ordenamiento por Inserción" />

      <RegularText>
        El <BoldText>ordenamiento por inserción</BoldText> consiste en que
        por cada posición del vector, se identifica la menor posición, anterior
        o igual a la posición actual, cuyo valor sea mayor al de la posición actual.
        Seguido se intercambia el valor de la posición actual con el de la
        posición identificada. Específicamente para un vector

        <Space />

        <CodeText>v</CodeText> con longitud <CodeText>l</CodeText>.
      </RegularText>

      <OrderedList>
        <RegularText>
          Sea <CodeText>posicion_actual ← 0</CodeText> inicialmente.
        </RegularText>

        <RegularText>
          Sea <CodeText>k ← posicion_actual</CodeText>.
        </RegularText>

        <RegularText>
          Por cada <CodeText>i</CodeText> en orden tal que


          <Space />

          <CodeText>0 ≤ i ≤ posicion_actual</CodeText>
          
          <Space />

          actualizar <CodeText>k ← i</CodeText> solo si

          <Space />

          <CodeText>v[i] {">"} v[posicion_actual]</CodeText>.
        </RegularText>

        <RegularText>
          Intercambiar <CodeText>v[posicion_actual]</CodeText> con

          <Space />

          <CodeText>v[k]</CodeText>.
        </RegularText>

        <RegularText>
          Repetir los primeros cuatro pasos con
          <CodeText>posicion_actual ← posicion_actual + 1</CodeText> mientras
          que <CodeText>posiciona_actual {"<"} l</CodeText>.
        </RegularText>
      </OrderedList>
    </SectionContainer>
  )
}

const DynamicsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Estructuras de Datos Dinámicas" />

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

const attachments = [
  {
    icon: <IoExtensionPuzzleSharp />,
    title: "Ejercicio de PSeint: Estructuras de control, vectores y matrices",
    link: "https://drive.google.com/file/d/1qo7tnTgENJD4GfLIV-pxIOq-QG1EHpBK/view?usp=sharing"
  }
]

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
      title: "Ordenamiento",
      route: "sorting/",
      component: <SortingSection />
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
            attachments={attachments}
        >
            <RegularText>
                Las <BoldText>estructuras de datos</BoldText> son todos aquellos
                mecanismos que permiten la <BoldText>organización de datos</BoldText>.
            </RegularText>
        </ArticleContainer>
    )
}
