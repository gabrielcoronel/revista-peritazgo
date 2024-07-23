import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import {
  Heading1,
  Heading2,
  RegularText,
  BoldText,
  ItalicText,
  CodeText,
  Space
} from '../../components/Typography'
import UnorderedList from '../../components/UnorderedList'
import { RiSlideshowFill } from 'react-icons/ri'

const BasicsSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Conceptos Básicos" />

      <RegularText>
        Antes de entender la <BoldText>eficiencia energética</BoldText>, es necesario entender
        ciertos conceptos básicos. Estos se explican a continuación.
      </RegularText>

      <Heading2 text="Electricidad" />

      <RegularText>
        La <BoldText>electricidad</BoldText> se refiere al flujo de carga eléctrica a través de un
        conductor, como un cable metálico. Puede ser generado por diferentes fuentes
        de energía (como centrales hidroeléctricas, termoeléctricas, solares, etc.) y
        se utiliza para alimentar dispositivos eléctricos y electrónicos.
      </RegularText>

      <Heading2 text="Corriente eléctrica" />

      <RegularText>
        La <BoldText>corriente eléctrica</BoldText> es el flujo ordenado de electrones a través de un
        conductor, producido por una diferencia de potencial (voltaje). Se mide en
        amperios (A).
      </RegularText>

      <Heading2 text="Diferencia de potencial" />

      <RegularText>
        La <BoldText>diferencia de potencial</BoldText> (también conocida como voltaje) es la fuerza que
        impulsa a los electrones a moverse a través de un conductor. Se mide en
        voltios (V).
      </RegularText>

      <Heading2 text="Resistencia eléctrica" />

      <RegularText>
        La <BoldText>resistencia eléctrica</BoldText> es la propiedad de un material que se opone al
        flujo de corriente eléctrica. Se mide en ohmios (<CodeText>Ω</CodeText>).
      </RegularText>


      <Heading2 text="Ley de Ohm" />

      <RegularText>
        La <BoldText>Ley de Ohm</BoldText> establece que la corriente que fluye a través de un
        conductor entre dos puntos es directamente proporcional a la
        diferencia de potencial entre estos dos puntos, e inversamente
        proporcional a la resistencia del conductor. Matemáticamente, se
        expresa como que la corriente (<CodeText>I</CodeText>) es equivalente al cociente
        del voltaje (<CodeText>V</CodeText>) y la resistencia (<CodeText>R</CodeText>).
      </RegularText>

      <Heading2 text="Circuito abierto" />

      <RegularText>
        Un <BoldText>circuito abierto</BoldText> es aquel en el que no hay un camino completo para que la
        corriente fluya. Esto generalmente ocurre cuando un interruptor está abierto o
        cuando no hay un camino conductor continuo entre los polos de una fuente de
        energía.
      </RegularText>

      <Heading2 text="Corto circuito" />

      <RegularText>
        Un <BoldText>corto circuito</BoldText> es una conexión no deseada de baja resistencia entre dos
        puntos de un circuito que normalmente no estarían conectados directamente.
        Esto puede provocar un flujo de corriente muy alto, lo cual puede ser
        peligroso y causar daños en el circuito o en los dispositivos conectados.
      </RegularText>

      <Heading2 text="Tipos de circuitos" />

      <UnorderedList>
        <RegularText>
          <BoldText>Circuito serie:</BoldText>

          <Space />
      
          Es aquel en el que los componentes están conectados uno tras otro en
          un solo camino. La corriente que fluye a través de cada componente
          es la misma, pero el voltaje se divide entre los componentes.
        </RegularText>

        <RegularText>
          <BoldText>Circuito paralelo:</BoldText>

          <Space />
      
          Es aquel en el que los componentes están conectados de manera que
          cada uno de ellos está conectado directamente entre los mismos dos
          puntos. La tensión es la misma en todos los componentes, pero la
          corriente se divide entre ellos.
        </RegularText>

        <RegularText>
          <BoldText>Circuito mixto:</BoldText>

          <Space />
      
          Es una combinación de circuitos serie y paralelo. Tiene tanto ramas en serie como en paralelo.
        </RegularText>
      </UnorderedList>

      <Heading2 text="Potencia eléctrica" />

      <RegularText>
        La <BoldText>potencia eléctrica</BoldText> es la cantidad de energía que se consume o se produce
        por unidad de tiempo. Se calcula como el producto de la corriente (<CodeText>I</CodeText>) por el
        voltaje (<CodeText>V</CodeText>), y se mide en vatios (<CodeText>W</CodeText>).
      </RegularText>

    </SectionContainer>
  )
}

const EnergeticEfficiencySection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Eficiencia Energética" />

      <Heading2 text="Definición" />

      <RegularText>
       El concepto de <BoldText>eficiencia energética</BoldText> se refiere a
       la capacidad de obtener un mayor beneficio o utilidad utilizando la
       menor cantidad de energía posible. En otras palabras, se trata de hacer
       más con menos energía. Esta idea es crucial tanto a nivel individual
       como a nivel industrial y gubernamental debido a sus múltiples
       beneficios económicos, ambientales y sociales.
      </RegularText>

      <Heading2 text="Ejemplos" />

      <RegularText>
        Un ejemplo concreto de eficiencia energética es el uso de

        <Space />

        <BoldText>iluminación</BoldText> LED en lugar de lámparas
        incandescentes o fluorescentes compactas. Ya que las luces LED
        consumen significativamente menos energía y producen la misma luz.
        Este tipo de iluminación se puede utilizar en entornos tanto
        
        <Space />

        <BoldText>residenciales</BoldText> como <BoldText>comerciales</BoldText>.
      </RegularText>

      <RegularText>
        En el sector <BoldText>las tecnologías de la información</BoldText>, un ejemplo
        de eficiencia energética es la <BoldText>virtualización de equipo informático</BoldText>.
        Ya que esto reduciría la cantidad de hardware físico en uso, disminuyendo el uso energía,
        mientras se ofrecen los mismos servicios informáticos.
      </RegularText>
    </SectionContainer>
  )
}

const ConsumptionSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Consumo Eléctrico" />

      <RegularText>
        El consumo de electricidad se mide en kilovatios-hora
        (<CodeText>kWh</CodeText>). Un kWh representa la cantidad de energía
        consumida por un dispositivo que tiene una potencia de 1 kilovatio
        (kW) durante una hora.
      </RegularText>

      <RegularText>
        Los dispositivos suelen indicar en una etiqueta el consumo eléctrico que realizan.
        Esta etiqueta se conoce como <BoldText>etiqueta eléctrica</BoldText>. Las etiquetas
        eléctricas suelen indicar el consumo del dispositivo en kilovatios-hora por año
        (<CodeText>kWh/año</CodeText>), esta medidad indica cuánta energía eléctrica consumirá
        la lavadora en un <BoldText>año típico de uso</BoldText>.
      </RegularText>
    </SectionContainer>
  )
}

const attachments = [
  {
    icon: <RiSlideshowFill />,
    title: "Presentación sobre xxx",
    // link: ""
  }
]

const routingConfiguration = [
  {
    title: "Conceptos Básicos",
    route: "basics/",
    component: <BasicsSection />
  },
  {
    title: "Eficiencia Energética",
    route: "energetic-efficiency/",
    component: <EnergeticEfficiencySection />
  },
  {
    title: "Consumo Eléctrico",
    route: "consumption/",
    component: <ConsumptionSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Eficiencia Energética"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        El término <BoldText><ItalicText>eficiencia energética</ItalicText></BoldText> se refiere
        a la optimización del consumo de energía <BoldText>sin comprometer comodidad</BoldText>.
        Es decir, se trata de obtener el <BoldText>máximo rendimiento con el menor consumo posible</BoldText>.
      </RegularText>
    </ArticleContainer>
  )
}