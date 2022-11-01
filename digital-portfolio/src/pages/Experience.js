import AnimatedPage from '../components/Animations/AnimatedPage';
import Card from '../components/Card/Card'
import {workList} from '../data/cardLists'
import Background from '../media/callout-bg.png'

function Experience() {
    return(
        <AnimatedPage image={Background} title={'Experience'}>
            <Card details={ workList } />
        </AnimatedPage>
    )
}

export default Experience;