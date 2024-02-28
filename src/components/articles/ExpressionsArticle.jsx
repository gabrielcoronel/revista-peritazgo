import 'animate.css'
import ArticleContainer from '../ArticleContainer'
import { Heading, Line, Subheading1 } from '../PageTexts'

export default () => {
    return (
        <ArticleContainer>
      {
        new Array(300).fill(null).map((_, index) => <><Heading text={index.toString()} /><br /></>)
      }
        </ArticleContainer>
    )
}
