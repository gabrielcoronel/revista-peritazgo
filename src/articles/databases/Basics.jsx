import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import Figure from '../../components/Figure'
import OrderedList from '../../components/OrderedList'
import {
  Heading1,
  RegularText,
  BoldText,
  CodeText,
  Space
} from '../../components/Typography'

import DataHierarchyFigure from '../../../public/databases-figures/data-hierarchy.svg'

const DataHierarchySection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Jerarquía de Datos" />

      <RegularText>
        Todo dato se puede asociar a un nivel en la

        <Space />

        <BoldText>jerarquía de datos</BoldText>. Esta abarca desde las unidades
        más pequeñas (como lo son los bits) hasta conjuntos de unidades (como
        lo son las bases de datos):
      </RegularText>

      <OrderedList>
        <RegularText>
          <BoldText>Bit</BoldText>:

          <Space />

          Un <CodeText>0</CodeText> o <CodeText>1</CodeText>.
        </RegularText>

        <RegularText>
          <BoldText>Byte</BoldText>:

          <Space />

          Un conjunto de ocho <BoldText>bits</BoldText> que representan un caracter.
        </RegularText>

        <RegularText>
          <BoldText>Campo</BoldText>:

          <Space />

          Un conjunto de <BoldText>bytes</BoldText> que representan una palabra.
        </RegularText>

        <RegularText>
          <BoldText>Registro</BoldText>:

          <Space />

          Un conjunto de <BoldText>campos</BoldText>.
        </RegularText>

        <RegularText>
          <BoldText>Tabla</BoldText>:

          <Space />

          Un conjunto de <BoldText>registros</BoldText>.
        </RegularText>

        <RegularText>
          <BoldText>Archivo</BoldText>:

          <Space />

          Un conjunto de <BoldText>tablas</BoldText>.
        </RegularText>

        <RegularText>
          <BoldText>Base de datos</BoldText>:

          <Space />

          Un conjunto de <BoldText>archivos</BoldText>.
        </RegularText>
      </OrderedList>

      <RegularText>
        Nótese que cada nivel en la jerarquía de datos consiste de un conjunto
        de unidades del nivel anterior. Por ende, la jerarquía de datos se puede
        visualizar de manera <BoldText>piramidal</BoldText>.
      </RegularText>

      <Figure
        image={DataHierarchyFigure}
        caption="La jerarquía de datos en forma de pirámide"
      />
    </SectionContainer>
  )
}

const routingConfiguration = [
  {
    title: "Jerarquía de Datos",
    route: "data-hierarchy/",
    component: <DataHierarchySection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Bases de Datos"
      routingConfiguration={routingConfiguration}
    >
      <RegularText>
        Una <BoldText>base de datos</BoldText> es un conjunto de datos relacionados
        entre sí, <BoldText>pertenecientes a un mismo contexto</BoldText>.
      </RegularText>
    </ArticleContainer>
  )
}
