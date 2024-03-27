import { useSectionScrolling } from '../../utilities/hooks'
import ArticleContainer from '../ArticleContainer'
import {
  Heading,
  Subheading1,
  RegularText,
  BoldText
} from '../PageTexts'
import Link from '../Link'
import DataStructureClassificationDiagramFigure from '../../../public/data-structures-figures/data-structure-classification-diagram.png'
import { SiCodereview } from 'react-icons/si'

const PseintPracticeUrl = "https://drive.google.com/file/d/1qo7tnTgENJD4GfLIV-pxIOq-QG1EHpBK/view?usp=sharing"

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

export default () => {
  useSectionScrolling()

  return (
    <ArticleContainer>
      <Heading
        text="Estructuras de Datos"
        scrollId="scroll-id__data-structures-title"
      />

      <RegularText>
        Las <BoldText>estructuras de datos</BoldText> son todos aquellos
        mecanismos que permiten la <BoldText>organización de datos</BoldText>.
        Las estructuras de datos se clasifican según el presente diagrama.
      </RegularText>

      <DataStructureClassificationDiagram />

      <Subheading1 text="Anexos" />

      <Link
        icon={<SiCodereview />}
        title="Práctica #3: Arreglos y estructuras de control en PSeint"
        onClick={() => window.open(PseintPracticeUrl)}
      />
    </ArticleContainer>
  )
}
