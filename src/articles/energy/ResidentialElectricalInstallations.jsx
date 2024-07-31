import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import {
  Heading1,
  Heading2,
  RegularText,
  BoldText,
  CodeText,
  Space
} from '../../components/Typography'
import UnorderedList from '../../components/UnorderedList'
import Figure from '../../components/Figure'
import { RiSlideshowFill } from 'react-icons/ri'
import PhasesFigure from '../../../public/energy-figures/phases.png'

const BasicsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Conceptos Básicos" />

      <RegularText>
        Una <BoldText>instalación eléctrica residencial</BoldText> es un sistema diseñado para
        distribuir energía eléctrica de manera segura y eficiente dentro de una
        vivienda. Esta infraestructura eléctrica permite la alimentación de
        dispositivos y electrodomésticos en diferentes áreas del hogar.
      </RegularText>

      <Heading2 text="Componentes de una Instalación Eléctrica Residencial" />

      <UnorderedList>
        <RegularText>
          <BoldText>Medidor eléctrico:</BoldText>

          <Space />

          Es el dispositivo que mide la cantidad de electricidad consumida y es propiedad de la compañía eléctrica.
        </RegularText>

        <RegularText>
          <BoldText>Panel de distribución o tablero eléctrico:</BoldText>

          <Space />

          Es donde llega la electricidad desde el medidor y se distribuye a través de fusibles o disyuntores a los diferentes circuitos de la casa.
        </RegularText>

        <RegularText>
          <BoldText>Fusibles o disyuntores:</BoldText>

          <Space />

          Son dispositivos de seguridad que protegen la instalación contra sobrecargas eléctricas. Los fusibles se funden cuando hay una sobrecarga, mientras que los disyuntores se desconectan automáticamente y se pueden volver a conectar.
        </RegularText>

        <RegularText>
          <BoldText>Cableado eléctrico:</BoldText>

          <Space />

          Se compone de cables conductores (generalmente de cobre) que llevan la electricidad desde el panel de distribución a los enchufes, interruptores y aparatos en la casa.
        </RegularText>

        <RegularText>
          <BoldText>Interruptores y enchufes:</BoldText>

          <Space />

          Los interruptores permiten encender y apagar la electricidad a diferentes dispositivos o luces, mientras que los enchufes proporcionan puntos de conexión para aparatos y dispositivos eléctricos.
        </RegularText>

        <RegularText>
          <BoldText>Luminarias y accesorios eléctricos:</BoldText>

          <Space />

          Incluyen lámparas, bombillas y otros dispositivos de iluminación que están conectados al sistema eléctrico.
        </RegularText>

        <RegularText>
          <BoldText>Tomacorrientes de tierra:</BoldText>

          <Space />

          Son enchufes con conexión a tierra que proporcionan un nivel adicional de seguridad al desviar corrientes de falla hacia el suelo.
        </RegularText>

        <RegularText>
          <BoldText>Caja de conexiones:</BoldText>

          <Space />

          Es una caja metálica o plástica donde se unen y se protegen los empalmes de los cables eléctricos.
        </RegularText>

        <RegularText>
          <BoldText>Conductos eléctricos:</BoldText>

          <Space />

          Son tubos o canaletas por donde se pasa el cableado eléctrico para protegerlo mecánicamente y ocultarlo en las paredes.
        </RegularText>

        <RegularText>
          <BoldText>Tierra física:</BoldText>

          <Space />

          Es un sistema de conexión de seguridad a tierra que protege contra descargas eléctricas accidentales.
        </RegularText>
      </UnorderedList>

      <Heading2 text="Tipos de Conductores" />

      <RegularText>
        Existen tres posibles tipos de conductores presentes en una instalación eléctrica. Estos cumplen
        distintos roles según el tipo:

        <UnorderedList>
          <RegularText>
            <BoldText>Fase (<CodeText>L</CodeText>):</BoldText>

            <Space />

            Conduce la corriente eléctrica desde la fuente de alimentación hasta los dispositivos.
          </RegularText>

          <RegularText>
            <BoldText>Neutro (<CodeText>N</CodeText>):</BoldText>

            <Space />

            Regresa la corriente eléctrica desde los dispositivos hasta la fuente de alimentación.
          </RegularText>

          <RegularText>
            <BoldText>Tierra (<CodeText>T</CodeText>):</BoldText>

            <Space />

            Conecta los dispositivos a tierra para protegerlos contra cortocircuitos y descargas eléctricas.
          </RegularText>
        </UnorderedList>
      </RegularText>

      <Figure
        image={PhasesFigure}
        caption="Cable con los tres tipos de conductores"
      />
    </SectionContainer>
  )
}

const ConnectionTypesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Tipos de Conexiones" />

      <RegularText>
        En las Instalaciones eléctricas residenciales se emplean tres tipicos tipos de conexiones:

        <UnorderedList>
          <RegularText>
            <BoldText>Monofásica de 2 hilos:</BoldText>

            <Space />

            Emplea una fase y un neutro. Se utiliza cuando la protección ante los cortocircuitos y descargas eléctricas
            no es primordial.
          </RegularText>

          <RegularText>
            <BoldText>Monofásica de 3 hilos:</BoldText>

            <Space />

            Emplea una fase, un neutro y una tierra. Se utiliza en aplicaciones donde se requiere un nivel más alto de seguridad,
            como en equipos sensibles o grandes electrodomésticos.
          </RegularText>

          <RegularText>
            <BoldText>Trifásica:</BoldText>

            <Space />

            Emplea tres fases, un neutro y una tierra. Se utiliza en entornos
            industriales y comerciales donde se necesita una mayor capacidad
            energética, como en fábricas y grandes edificios.
          </RegularText>
        </UnorderedList>
      </RegularText>
    </SectionContainer>
  )
}

const attachments = [
  {
    icon: <RiSlideshowFill />,
    title: "Presentación del Grupo #1",
    link: "https://www.canva.com/design/DAGGnrTQCX4/yF54qEBGaOZR-PVvutgPUg/edit?utm_content=DAGGnrTQCX4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    icon: <RiSlideshowFill />,
    title: "Presentación del Grupo #2",
    link: "https://www.canva.com/design/DAGMVvIitR0/ert0se7SOzA8VjwewQOYEg/edit?utm_content=DAGMVvIitR0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    icon: <RiSlideshowFill />,
    title: "Presentación del Grupo #3",
    link: "https://www.canva.com/design/DAGGnhzwa5k/sa6RjJzXTtHV19ReiY-VLA/edit?utm_content=DAGGnhzwa5k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  }
]

const routingConfiguration = [
  {
    title: "Conceptos Básicos",
    route: "basics/",
    component: <BasicsSection />
  },
  {
    title: "Tipos de Conexiones",
    route: "connection-types/",
    component: <ConnectionTypesSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Instalaciones Eléctricas Residenciales"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        Una <BoldText>instalación eléctrica residencial</BoldText> es todo sistema que cumpla el propósito
        de trasladar electricidad de manera segura a una vivienda. 
      </RegularText>
    </ArticleContainer>
  )
}