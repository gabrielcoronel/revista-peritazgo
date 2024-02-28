import 'animate.css'
import { useContentSelector } from '../context/contentSelector'

export default () => {
    const { articleComponent } = useContentSelector()

    const ArticleComponent = () => {
        return articleComponent
    }

    return (
        <div className="bg-regular_background">
            <ArticleComponent />
        </div>
    )
}
