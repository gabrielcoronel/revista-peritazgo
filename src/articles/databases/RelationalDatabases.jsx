import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import Figure from '../../components/Figure'
import FigureCarousel from '../../components/FigureCarousel'
import UnorderedList from '../../components/UnorderedList'
import {
  Heading1,
  RegularText,
  BoldText,
  ItalicText,
  CodeText,
  Space
} from '../../components/Typography'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FaAnglesDown } from 'react-icons/fa6'

import TableFigure from '../../../public/databases-figures/table.svg'
import EntityFigure from '../../../public/databases-figures/entity.svg'
import RelationshipFigure from '../../../public/databases-figures/relationship.svg'
import AttributeFigure from '../../../public/databases-figures/attribute.svg'
import PrimaryKeyFigure from '../../../public/databases-figures/primary-key.svg'
import ForeignKeyFigure from '../../../public/databases-figures/foreign-key.svg'
import OneToOneFigure from '../../../public/databases-figures/one-to-one.svg'
import OneToManyFigure from '../../../public/databases-figures/one-to-many.svg'
import ManyToManyFigure from '../../../public/databases-figures/many-to-many.svg'
import EntityRelationshipDiagramFigure from '../../../public/databases-figures/entity-relationship-diagram.svg'

const EntityRelationshipDiagram = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <img
        onClick={() => window.open(EntityRelationshipDiagramFigure)}
        className="object-fit w-2/3 rounded-md cursor-pointer"
        src={EntityRelationshipDiagramFigure}
      />
    </div>
  )
}

const EntityRelationshipFigureCarousel = () => {
  const figures = [
    {
      image: EntityFigure,
      caption: "Entidad"
    },
    {
      image: RelationshipFigure,
      caption: "Relación"
    },
    {
      image: AttributeFigure,
      caption: "Atributo común"
    },
    {
      image: PrimaryKeyFigure,
      caption: "Llave primaria"
    },
    {
      image: ForeignKeyFigure,
      caption: "Llave foránea"
    },
    {
      image: OneToOneFigure,
      caption: "Cardinalidad de uno a uno"
    },
    {
      image: OneToManyFigure,
      caption: "Cardinalidad de uno a muchos"
    },
    {
      image: ManyToManyFigure,
      caption: "Cardinalidad de muchos a muchos"
    }
  ]

  return (
    <FigureCarousel
      figures={figures}
    />
  )
}

const NormalFormsDiagram = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-7 w-3/4 p-5 bg-regular_background">
        <div className="w-full">
          <RegularText>
            <BoldText>I Formal Normal</BoldText>:

            <UnorderedList>
              <RegularText>
                Ningún dato en un campo de la tabla se puede <BoldText>dividir</BoldText>

                <Space />

                en más datos sin que este dato pierda su significado.
              </RegularText>

              <RegularText>
                Existe una <BoldText>llave primaria</BoldText> en la tabla.
              </RegularText>
            </UnorderedList>
          </RegularText>
        </div>

        <span className="text-5xl text-heading_text">
          <FaAnglesDown />
        </span>

        <div className="w-full">
          <RegularText>
            <BoldText>II Formal Normal</BoldText>:

            <Space />

            Existen exclusivamente <BoldText>dependencias funcionales</BoldText>

            <Space />

            en la tabla.
          </RegularText>
        </div>

        <span className="text-5xl text-heading_text">
          <FaAnglesDown />
        </span>

        <div className="w-full">
          <RegularText>
            <BoldText>III Formal Normal</BoldText>:

            <Space />

            No existe ninguna <BoldText>dependencia transitiva</BoldText> en la
            tabla.
          </RegularText>
        </div>
      </div>
    </div>
  )
}

const TablesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Tablas, Campos y Registros" />

      <RegularText>
        Las <BoldText>bases de datos relacionales</BoldText> organizan datos
        en estructuras llamadas <ItalicText>tablas</ItalicText>. Estas tablas
        están compuestas por <BoldText>campos</BoldText> y

        <Space />

        <BoldText>registros</BoldText>.
      </RegularText>

      <RegularText>
        Un <BoldText>campo</BoldText> de una tabla hace referencia a una

        <Space />

        <BoldText>columna</BoldText> en tal tabla. El <BoldText>ámbito</BoldText>

        <Space />

        de un campo se refiere a los posibles valores que se pueden almacenar
        bajo tal campo.
      </RegularText>

      <RegularText>
        Un <BoldText>registro</BoldText> en una tabla es una <BoldText>fila</BoldText>

        <Space />

        de tal tabla. Cada registro en una tabla almacena un valor para cada
        campo en la tabla.
      </RegularText>

      <Figure
        image={TableFigure}
        caption="Una tabla"
      />

      <Heading1 text="Llaves" />

      <RegularText>
        En una tabla pueden llegar a existir campos que cumplen un propósito
        especial de <BoldText><ItalicText>identificación</ItalicText></BoldText>

        <Space />

        de registros:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Llave primaria</BoldText>:

          <Space />

          Campo de que identifica de <BoldText>manera única</BoldText> un
          registro en una tabla. Por ejemplo, un campo <CodeText>cedula</CodeText>

          <Space />

          identifica únicamente a un registro en una tabla de personas.
        </RegularText>

        <RegularText>
          <BoldText>Llave alterna o candidata</BoldText>:

          <Space />

          Campo que es

          <Space />

          <BoldText><ItalicText>potencialmente</ItalicText> una llave primaria</BoldText>.

          <Space />

          Es decir, las llaves alternas pueden identificar de manera única un
          registro en una tabla, sin embargo, no se usan como llaves primarias
          debido a que esto no resultaría conveniente según el contexto. Aunque
          en algunos casos pueden emplearse como llaves primarias. Por ejemplo,
          un campo <CodeText>carne_empresa</CodeText> identifica únicamente a
          un registro en una tabla de empleados, sin embargo, una llave primaria
          más conveniente sería el campo <CodeText>cedula</CodeText>.
        </RegularText>

        <RegularText>
          <BoldText>Superllave</BoldText>:

          <Space />

          Conjunto de campos que identifican de <BoldText>manera única</BoldText>

          <Space />

          un registro en una tabla. Una superllave se diferencia de una llave
          primaria en que una llave primaria hace referencia a

          <Space />

          <BoldText>un solo campo</BoldText>. Por ejemplo, los campos

          <Space />

          <CodeText>piso</CodeText> y <CodeText>posicion</CodeText> identifican
          únicamente a un registro en una tabla de espacios de parqueo,

          <Space />

          <BoldText>ambos campos son necesarios para esto</BoldText>.
        </RegularText>

        <RegularText>
          <BoldText>Llave foránea</BoldText>:

          <Space />

          Un campo que hace

          <Space />

          <BoldText><ItalicText>referencia</ItalicText> a una llave primaria en otra tabla</BoldText>.
          
          <Space />

          Es decir, este campo funciona como llave primaria en otra tabla pero
          no necesariamente en la presente tabla. Por ejemplo, un campo

          <Space />

          <CodeText>cedula_persona</CodeText> identifica únicamente un registro
          en una tabla externa de personas, sin embargo esto no sucede para el
          mismo campo en la presente tabla de mascotas.
        </RegularText>
      </UnorderedList>
    </SectionContainer>
  )
}

const EntityRelationshipSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Diagramas Entidad-Relación" />

      <RegularText>
        Un <BoldText>diagrama entidad-relación</BoldText> es una representación
        gráfica de una base de datos relacional. Estos diagramas están compuestos
        por:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Entidades</BoldText>:

          <Space />

          Conjuntos de datos <BoldText>caracterizables</BoldText>.
        </RegularText>

        <RegularText>
          <BoldText>Atributos</BoldText>:

          <Space />

          Características de una <BoldText>entidad</BoldText>.
        </RegularText>

        <RegularText>
          <BoldText>Relaciones</BoldText>:

          <Space />

          Una manera en la que dos entidades se <BoldText>asocian entre sí</BoldText>.
        </RegularText>
      </UnorderedList>

      <Heading1 text="Cardinalidad" />

      <RegularText>
        La <BoldText>cardinalidad de una relación</BoldText> entre las entidades
        
        <Space />

        <CodeText>A</CodeText> y <CodeText>B</CodeText> en un diagrama
        entidad-relación indica cuántas <ItalicText>instancias</ItalicText> de

        <Space />

        <CodeText>B</CodeText> se pueden asociar con <ItalicText>cuántas</ItalicText>

        <Space />

        instancias de <CodeText>A</CodeText>. Existen tres tipos de cardinalidades:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>
            Uno a uno

            (<CodeText>1 - 1</CodeText>)
          </BoldText>:

          <Space />

          Cada una de las instancias de <CodeText>A</CodeText> se puede asociar
          a una sola instancia de <CodeText>B</CodeText>.
        </RegularText>

        <RegularText>
          <BoldText>
            Uno a muchos

            (<CodeText>1 - N</CodeText>)
          </BoldText>:

          <Space />

          Cada una de las instancias de <CodeText>A</CodeText> se puede asociar
          a una cantidad arbitraria de instancias de <CodeText>B</CodeText>.
        </RegularText>

        <RegularText>
          <BoldText>
            Muchos a muchos

            (<CodeText>N - M</CodeText>)
          </BoldText>:

          <Space />

          Una cantidad arbitraria de instancias de <CodeText>A</CodeText> se
          puede asociar a una cantidad arbitraria de instancias de <CodeText>B</CodeText>.
        </RegularText>
      </UnorderedList>

      <Heading1 text="Simbología" />

      <RegularText>
        Los diagramas entidad-relación se representan mediante una

        <Space />

        <BoldText>simbología estándar</BoldText>:
      </RegularText>

      <EntityRelationshipFigureCarousel />

      <RegularText>
        Las entidades se <BoldText>conectan</BoldText> a sus respectivos
        atributos. Las relaciones <BoldText>asocian</BoldText> dos entidades
        mediante distintos tipos de flechas dependiendo de la

        <Space />

        <BoldText>cardinalidad</BoldText> de la relación.
      </RegularText>

      <EntityRelationshipDiagram />
    </SectionContainer>
  )
}

const NormalizationSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Normalización" />

      <RegularText>
        El término <BoldText>normalización</BoldText> hace referencia al
        conjunto estandarizado de reglas que se aplican en una base de datos
        relacional con el fin de evitar <ItalicText>problemas</ItalicText>
        
        <Space />

        con los datos que se almacenen.
      </RegularText>

      <Heading1 text="Dependencias" />

      <RegularText>
        Antes de ver las principales <ItalicText>formas normales</ItalicText> es
        necesario entender el concepto de dependencia. Una

        <Space />

        <BoldText>dependencia</BoldText> es la manera en que un conjunto de campos
        en una tabla se relacionan entre sí. Existen tres principales tipos de
        dependencias:
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Dependencia funcional</BoldText>:

          <Space />

          Los valores de todos los campos de un registro (menos las llaves)
          dependen <BoldText>por completo</BoldText> del valor de la llave
          primaria en el registro.
        </RegularText>

        <RegularText>
          <BoldText>Dependencia parcial</BoldText>:

          <Space />

          Los valores de todos los campos de un registro (menos las llaves)
          dependen <BoldText>parcialmente</BoldText> del valor de la llave
          primaria en el registro.
        </RegularText>

        <RegularText>
          <BoldText>Dependencia transitiva</BoldText>:

          <Space />

          El valor de un campo que no sea una llave

          <Space />

          <BoldText>depende de otro campo</BoldText> que tampoco es una llave.
        </RegularText>
      </UnorderedList>

      <Heading1 text="Formas normales" />

      <RegularText>
        Las <BoldText>formas normales</BoldText> son las reglas que aplican
        durante el proceso de normalización. Existen tres principales formas
        normales. Estas formas normales son <BoldText>acumulativias</BoldText>,
        es decir, una tabla en segunda forma normal está en primera forma normal,
        de igual manera, una tabla en tercera forma normal está en segunda
        forma normal y por ende en primera formal normal:
      </RegularText>

      <NormalFormsDiagram />
    </SectionContainer>
  )
}

const attachments = [
  {
    icon: <BsFillBookmarkFill />,
    title: "Captain, F. A. (2015). Six-Step Relational Database Design. (2a. ed.). Fidel A. Captain."
  }
]

const routingConfiguration = [
  {
    title: "Tablas, Campos y Registros",
    route: "tables-fields-records/",
    component: <TablesSection />
  },
  {
    title: "Diagramas Entidad-Relación",
    route: "entity-relationship-diagrams/",
    component: <EntityRelationshipSection />
  },
  {
    title: "Normalización",
    route: "normalization/",
    component: <NormalizationSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Bases de Datos Relacionales"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        Una <BoldText>base de datos <ItalicText>relacional</ItalicText></BoldText>

        <Space />

        es un tipo de base de datos, donde los datos están organizados en conjuntos,
        llamados <ItalicText>tablas</ItalicText> y estos conjuntos se pueden
        <BoldText>asociar</BoldText> entre sí (Captain, 2015).
      </RegularText>
    </ArticleContainer>
  )
}
