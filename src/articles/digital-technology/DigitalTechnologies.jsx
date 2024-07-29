import ArticleContainer from '../../components/ArticleContainer'
import SectionContainer from '../../components/SectionContainer'
import {
  Heading1,
  Heading2,
  RegularText,
  BoldText,
  ItalicText,
  Space
} from '../../components/Typography'
import UnorderedList from '../../components/UnorderedList'
import { RiSlideshowFill } from 'react-icons/ri'

const VisionariesSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Tecnologías Visionarias" />

      <RegularText>
        Existen algunas tecnologías que se catalogan como <BoldText><ItalicText>visionarias</ItalicText></BoldText>.
        A continuación, se listan las principales tecnologías visionarias.
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Inteligencia Artificial:</BoldText>

          <Space />

          La <BoldText>inteligencia artificial</BoldText> se refiere a la capacidad de las máquinas y
          sistemas informáticos para realizar tareas que normalmente requieren
          inteligencia humana. Esto incluye el la percepción visual, el reconocimiento
          de voz, la toma de decisiones y la resolución de problemas, entre otras
          capacidades. Se utiliza en una amplia gama de campos, como la automatización
          industrial, los vehículos autónomos, los sistemas de recomendación en comercio
          electrónico, la atención médica, entre otros.
        </RegularText>

        <RegularText>
          <BoldText>Realidad Aumentada:</BoldText>

          <Space />


          La <BoldText>realidad aumentada</BoldText> es una tecnología que
          superpone información digital, como imágenes, vídeos o
          texto, sobre el entorno físico del usuario en tiempo real. La AR utiliza
          cámaras y sensores en dispositivos como smartphones, tabletas o gafas AR para
          detectar y analizar el entorno físico y luego superponer información digital
          relevante. Permite a los usuarios ver y interactuar con el mundo real mientras
          ven información adicional generada por computadora que mejora su experiencia y
          conocimiento del entorno. Se utiliza en aplicaciones móviles para navegación
          (por ejemplo, superposición de direcciones en mapas), marketing interactivo,
          juegos (como Pokemon Go), asistencia en el trabajo y la educación (por
          ejemplo, manuales de mantenimiento aumentados).
        </RegularText>

        <RegularText>
          <BoldText>Realidad Virtual:</BoldText>

          <Space />

          La <BoldText>realidad virtual</BoldText> es una tecnología
          informática que utiliza dispositivos como gafas o cascos
          especiales para crear un entorno virtual completamente inmersivo y
          tridimensional. Este entorno es generado por computadora y simula la presencia
          física del usuario en un entorno ficticio o recreado. El usuario puede
          interactuar con este entorno utilizando dispositivos de entrada como mandos o
          guantes sensoriales, y percibe la experiencia a través de visión
          estereoscópica y sonido envolvente. Se utiliza en juegos y entretenimiento,
          simulaciones de entrenamiento (por ejemplo, simuladores de vuelo), diseño de
          productos, medicina (por ejemplo, terapia de exposición para fobias), entre
          otros.
        </RegularText>

        <RegularText>
          <BoldText>Realidad Mixta:</BoldText>

          <Space />

          <BoldText>Realidad mixta</BoldText> es un término que combina
          elementos de la realidad virtual y la realidad
          aumentada, permitiendo a los usuarios interactuar tanto con objetos
          virtuales como con el entorno físico real. En la realidad mixta, los objetos
          virtuales pueden interactuar físicamente con el entorno real y viceversa. Esto
          se logra mediante el uso de tecnologías avanzadas de seguimiento y
          representación espacial. La realidad mixta se utiliza en aplicaciones de
          diseño y visualización 3D, entrenamiento industrial (simulaciones de
          mantenimiento y reparación), juegos y entretenimiento inmersivo, y también
          tiene aplicaciones potenciales en campos como la telepresencia y la
          colaboración remota.
        </RegularText>

        <RegularText>
          <BoldText>Tecnologías de Registro Distribuido:</BoldText>

          <Space />

          Una <BoldText>tecnología de registro distribuido</BoldText> es un sistema digital que
          registra transacciones o datos a través de una red descentralizada de
          computadoras. Utiliza criptografía para asegurar y enlazar las transacciones
          en bloques, garantizando que la información sea inmutable y transparente. Esto
          elimina la necesidad de un intermediario central y ofrece aplicaciones seguras
          y eficientes en sectores como finanzas, cadena de suministro, salud y más.
        </RegularText>

        <RegularText>
          <BoldText>Computación Cuántica:</BoldText>

          <Space />

          La <BoldText>computación cuántica</BoldText> es un campo emergente en la informática que utiliza
          principios de la física cuántica para procesar información de una manera
          radicalmente diferente a los computadores clásicos. En lugar de utilizar bits
          tradicionales (que pueden ser 0 o 1), los computadores cuánticos utilizan bits
          cuánticos o qubits, que pueden estar en estados superpuestos de 0 y 1 al mismo
          tiempo gracias al fenómeno de superposición cuántica. Esto permite realizar
          cálculos simultáneos a una velocidad y con una capacidad de procesamiento
          potencialmente mucho mayor que los computadores tradicionales para ciertas
          aplicaciones específicas. La computación cuántica tiene el potencial de
          revolucionar campos como la criptografía, la simulación de materiales y
          moléculas, la optimización de grandes conjuntos de datos y más, aunque
          actualmente se encuentra en una etapa experimental y de desarrollo activo.
        </RegularText>
      </UnorderedList>

      <RegularText>
        Con el surgmiento de la tecnologías visionarias, también se han generado dos términos
        sumamente relevantes en el contexto actual.
      </RegularText>

      <Heading2 text="Demografía Digital:" />

      <RegularText>
        Se refiere al estudio y análisis de la población en términos de sus hábitos,
        comportamientos y características en el entorno digital. Esto incluye el uso
        de tecnologías digitales, la presencia en redes sociales, las preferencias de
        consumo en línea, entre otros aspectos.
      </RegularText>

      <Heading2 text="Trabajadores Digitales" />

      <RegularText>
        Son profesionales cuyas tareas principales implican el uso intensivo de
        tecnologías digitales y sistemas informáticos para realizar su trabajo. Esto
        incluye programadores, diseñadores gráficos, analistas de datos,
        desarrolladores web, expertos en marketing digital, entre otros.
      </RegularText>
    </SectionContainer>
  )
}

const TrendingSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Tecnologías en Tendencia" />

      <RegularText>
        Existen algunas tecnologías que se consideran <BoldText><ItalicText>en tendencia</ItalicText></BoldText>.
        A continuación, se listan los principales conceptos asociados a estas tecnologías en tendencia.
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Experiencia digital:</BoldText>

          <Space />

          La experiencia digital se refiere a todas las interacciones que una persona
          tiene con una organización, marca, producto o servicio a través de canales
          digitales como sitios web, aplicaciones móviles, redes sociales y más. Incluye
          la usabilidad, el diseño, la personalización y la satisfacción del usuario en
          el entorno digital.
        </RegularText>

        <RegularText>
          <BoldText>Herramientas Analíticas:</BoldText>

          <Space />

          Son herramientas y tecnologías utilizadas para recopilar, procesar, analizar y
          visualizar datos con el fin de obtener información útil para la toma de
          decisiones empresariales. Incluyen software de análisis de datos, herramientas
          de visualización, técnicas de minería de datos y más.
        </RegularText>

        <RegularText>
          <BoldText>Realidad digital:</BoldText>

          <Space />

          Es un término amplio que abarca todo lo que existe en formato digital,
          incluyendo datos, imágenes, videos, documentos y otros contenidos digitales.
          También puede referirse a entornos virtuales creados digitalmente.
        </RegularText>

        <RegularText>
          <BoldText>Comercio electrónico:</BoldText>

          <Space />

          También conocido como e-commerce, es la compra y venta de productos o
          servicios a través de internet. Incluye plataformas de venta online, tiendas
          virtuales, pagos electrónicos y logística digital para la entrega de
          productos.
        </RegularText>

        <RegularText>
          <BoldText>Computación en la nube:</BoldText>

          <Space />

          Es la entrega de servicios de computación (como servidores, almacenamiento,
          bases de datos, redes, software) a través de internet, conocido como la nube.
          Permite acceder a recursos informáticos bajo demanda sin necesidad de
          gestionar hardware físico.
        </RegularText>

        <RegularText>
          <BoldText>Redes avanzadas:</BoldText>

          <Space />

          Son redes de comunicación de alta velocidad y capacidad que utilizan
          tecnologías avanzadas para transmitir datos de manera eficiente y confiable.
          Incluyen redes de fibra óptica, redes móviles 5G, y otras infraestructuras que
          soportan aplicaciones exigentes como el Internet de las Cosas (IoT) y la
          inteligencia artificial (IA).
        </RegularText>

        <RegularText>
          <BoldText>Robótica:</BoldText>

          <Space />

          Es el campo de la ingeniería y la ciencia que se ocupa del diseño,
          construcción, operación y uso de robots. Los robots son máquinas programables
          que pueden realizar tareas complejas o repetitivas, tanto físicas como
          computacionales, de manera autónoma o semiautónoma.
        </RegularText>

        <RegularText>
          <BoldText>CMO (Chief Marketing Officer):</BoldText>

          <Space />

          Es el director de marketing de una organización. Es responsable de desarrollar
          y ejecutar las estrategias de marketing para promover productos y servicios,
          gestionar la marca, supervisar las comunicaciones de marketing y analizar el
          rendimiento de las campañas.
        </RegularText>

        <RegularText>
          <BoldText>CIO (Chief Information Officer):</BoldText>

          <Space />

          Es el responsable de la tecnología de la información en una
          organización. Supervisa la planificación estratégica de la
          infraestructura tecnológica, la seguridad informática, la gestión de
          datos, la integración de sistemas y el cumplimiento de los objetivos
          tecnológicos de la empresa.
        </RegularText>

        <RegularText>
          <BoldText>Desarrollo cibernético:</BoldText>

          <Space />

          Se refiere al conjunto de acciones, estrategias y políticas destinadas a
          proteger sistemas informáticos, redes y datos contra ciberataques y amenazas
          cibernéticas. Incluye medidas de seguridad como cifrado, monitoreo de red,
          gestión de accesos y respuestas a incidentes de seguridad.
        </RegularText>
      </UnorderedList>
    </SectionContainer>
  )
}

const MalwarePropagationSection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Tecnologías Utilizadas para la Propagación de Malware" />

      <RegularText>
        En el contexto actual, la seguridad informática se ha vuelto de vital importancia. Por esta
        razón, a continuación se listan los principales medios por los que se suele transmitir
        software malicioso (<ItalicText>malware</ItalicText>).
      </RegularText>

      <UnorderedList>
        <RegularText>
          <BoldText>Phishing:</BoldText>

          <Space />

          Los correos electrónicos fraudulentos persuaden a los usuarios para que descarguen archivos adjuntos o hagan clic en enlaces maliciosos que descargan malware en el sistema.
        </RegularText>

        <RegularText>
          <BoldText>Sitios web comprometidos:</BoldText>

          <Space />

          Los hackers infectan sitios web legítimos con malware, lo que puede ocurrir mediante la inyección de código malicioso o la explotación de vulnerabilidades en el software del servidor.
        </RegularText>

        <RegularText>
          <BoldText>Malvertising:</BoldText>

          <Space />

          Anuncios en línea que contienen scripts o enlaces que redirigen a los usuarios a sitios web maliciosos que descargan malware automáticamente en sus dispositivos.
        </RegularText>

        <RegularText>
          <BoldText>Dispositivos USB infectados:</BoldText>

          <Space />

          Los dispositivos de almacenamiento USB (memorias USB, discos duros externos) pueden ser infectados con malware que se ejecuta automáticamente cuando se conectan a un sistema vulnerable.
        </RegularText>

        <RegularText>
          <BoldText>Redes P2P y torrents:</BoldText>

          <Space />

          Los archivos descargados de redes peer-to-peer (P2P) y sitios de torrents pueden contener malware oculto en aplicaciones, películas, música u otros archivos descargados.
        </RegularText>

        <RegularText>
          <BoldText>Redes sociales y mensajería instantánea:</BoldText>

          <Space />

          Mensajes maliciosos o enlaces distribuidos a través de plataformas de redes sociales o aplicaciones de mensajería instantánea que engañan a los usuarios para que descarguen malware.
        </RegularText>

        <RegularText>
          <BoldText>Ingeniería social:</BoldText>

          <Space />

          Los ciberdelincuentes manipulan a los usuarios para que ejecuten malware mediante técnicas persuasivas como llamadas telefónicas fraudulentas, suplantación de identidad o creación de perfiles falsos en redes sociales.
        </RegularText>

        <RegularText>
          <BoldText>Vulnerabilidades de software:</BoldText>

          <Space />

          El malware puede explotar vulnerabilidades conocidas en sistemas operativos, aplicaciones o servicios en la nube que no están correctamente parcheados o actualizados.
        </RegularText>
      </UnorderedList>
    </SectionContainer>
  )
}

const TodaySection = () => {
  return (
    <SectionContainer>
      <Heading1 text="Tecnologías de Hoy" />

      <RegularText>
        Existen unas cuantas tecnologías que son tan recientes que se consideran como las
        tecnologías de <BoldText><ItalicText>de hoy</ItalicText></BoldText>.
        Estas son el <BoldText>machine learning</BoldText> y las <BoldText>criptomonedas</BoldText>.
      </RegularText>

      <Heading2 text="Machine Learning" />

      <RegularText>
        El <BoldText>machine learning</BoldText> es un campo de la inteligencia
        artificial que se centra en el desarrollo de sistemas y algoritmos que
        permiten a las computadoras aprender y mejorar automáticamente a partir
        de la experiencia sin estar explícitamente programadas. En lugar de
        seguir estrictamente instrucciones programadas, los sistemas de
        aprendizaje automático utilizan modelos matemáticos y algoritmos para
        analizar datos, aprender patrones y tomar decisiones con mínima
        intervención humana.
      </RegularText>

      <Heading2 text="Criptomonedas" />

      <RegularText>
        Las <BoldText>criptomonedas</BoldText> son formas de dinero digital
        descentralizado que utilizan criptografía para asegurar transacciones
        financieras, controlar la creación de nuevas unidades y verificar la
        transferencia de activos
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
    title: "Tecnologías Visionarias",
    route: "visionary/",
    component: <VisionariesSection />
  },
  {
    title: "Tecnologías en Tendencia",
    route: "trending/",
    component: <TrendingSection />
  },
  {
    title: "Tecnologías de Hoy",
    route: "today/",
    component: <TodaySection />
  },
  {
    title: "Tecnologías Utilizadas para la Propagación de Malware",
    route: "malware-propagation/",
    component: <MalwarePropagationSection />
  }
]

export default () => {
  return (
    <ArticleContainer
      title="Tecnologías Digitales"
      routingConfiguration={routingConfiguration}
      attachments={attachments}
    >
      <RegularText>
        La <BoldText>tecnología digital</BoldText> se refiere al conjunto de herramientas,
        dispositivos y sistemas que utilizan señales digitales y procesamiento
        digital para operar, comunicar, almacenar y transmitir información de
        manera eficiente y precisa.
      </RegularText>
    </ArticleContainer>
  )
}