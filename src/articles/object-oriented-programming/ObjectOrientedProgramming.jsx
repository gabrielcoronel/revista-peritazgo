import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import {
  Heading1,
  Heading2,
  RegularText,
  BoldText,
  ItalicText,
  Space,
  CodeText
} from '../../components/Typography'
import UnorderedList from '../../components/UnorderedList'

const ClassesObjectsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Clases y Objetos" />

      <RegularText>
        Las clases y objetos son los aspectos mas fundamentales de la programación orientada a objetos.
        Por esta razón, se explican detalladamente estos conceptos a continuación.
      </RegularText>

      <Heading2 text="Objeto" />

      <RegularText>
        Un <BoldText>objeto</BoldText> es una entidad concreta agente del software a desarrollar. Los
        objetos poseen características (<ItalicText>atributos</ItalicText>) junto con comportamientos
        o acciones a realizar (<ItalicText>métodos</ItalicText>).
      </RegularText>

      <Heading2 text="Clase" />

      <RegularText>
        Una <BoldText>clase</BoldText> es un constructo de programación que sirve como una <ItalicText>plantilla</ItalicText>
        para crear <BoldText>objetos</BoldText>. Las clases cuentan con cuatro principales elementos.
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Nombre:</BoldText>

          <Space />

          Identifica el <BoldText><ItalicText>tipo</ItalicText></BoldText> de objetos que se van a
          generar con la clase en cuestión.
        </RegularText>

        <RegularText>
          <BoldText>Atributos:</BoldText>

          <Space />

          Se definen las características presentes en cada uno de los objetos a generar, mediante
          variables que almacenan los valores asociados.
        </RegularText>

        <RegularText>
          <BoldText>Métodos:</BoldText>

          <Space />

          Se definen las acciones a realizar o comportamientos de cada uno de los objetos a generar,
          mediante funciones que tienen acceso a los atributos de la clase.
        </RegularText>

        <RegularText>
          <BoldText>Constructor:</BoldText>

          <Space />

          Es una función responsable de inicializar los atributos de los objetos generados con valores
          específicos.
        </RegularText>
      </UnorderedList>

      <Heading2 text="Instanciamiento" />

      <RegularText>
        Al proceso de generar un <BoldText>objeto</BoldText> a partir de una <BoldText>clase</BoldText> se
        le conoce como <BoldText><ItalicText>Instanciamiento</ItalicText></BoldText>. De esta manera, para una
        clase <CodeText>A</CodeText>, si un objeto <CodeText>x</CodeText> fue generado a partir de

        <Space />

        <CodeText>A</CodeText>, se dice que <CodeText>x</CodeText> es <BoldText>una instancia</BoldText> de

        <Space />

        <CodeText>A</CodeText>.
      </RegularText>
    </SectionContainer>
  )
}

const MainFeaturesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Aspectos Principales" />

      <RegularText>
        El paradigma de la programación orientada a objetos establece cuatro principales características.
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Encapsulamiento:</BoldText>

          <Space />

          El <BoldText>encapsulamiento</BoldText> se refiere a la capacidad de restringir el acceso
          a los atributos de un objeto para otros objetos externos.
        </RegularText>

        <RegularText>
          <BoldText>Herencia:</BoldText>

          <Space />

          La <BoldText>herencia</BoldText> se refiere a la capacidad de definir nuevas clases
          a partir de clases ya existentes, reutlizando sus atributos y metodos.
        </RegularText>

        <RegularText>
          <BoldText>Polimorfismo:</BoldText>

          <Space />

          El <BoldText>polimorfismo</BoldText> se refiere a la capacidad de que un mismo método
          realice diferentes acciones dependiendo del objeto en el que vive.
        </RegularText>

        <RegularText>
          <BoldText>Abstracción:</BoldText>

          <Space />

          El <BoldText>abstracción</BoldText> se refiere a la capacidad de desarrollar algoritmos
          que solo traten con <ItalicText>la esencia</ItalicText> de los objetos, ignorando temporalmente
          los detalles y enfocándose en solo lo que se considere <ItalicText>importante</ItalicText>.
        </RegularText>
      </UnorderedList>
    </SectionContainer>
  )
}

const routingConfiguration = [
  {
    title: "Clases y Objetos",
    route: "classes-objects/",
    component: <ClassesObjectsSection />
  },
  {
    title: "Aspectos Principales",
    route: "features/",
    component: <MainFeaturesSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Programación Orientada a Objetos"
      routingConfiguration={routingConfiguration}
      attachments={[]}
    >
      <RegularText>
        La <BoldText>programación orientada a objetos (POO)</BoldText> es un paradigma de programación
        que se basa en los conceptos de <BoldText>clases y objetos</BoldText>. Esto con el fin de estructurar
        el software en piezas más simples y reutilizables.
      </RegularText>
    </ArticleContainer>
  )
}