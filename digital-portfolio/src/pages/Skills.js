import AnimatedPage from '../components/Animations/AnimatedPage';
import Card from '../components/Card/Card'
import {skillsList} from '../data/cardLists'
import Background from '../media/callout-bg.png'

function Skills() {
    return(
        <AnimatedPage image={Background} title={'Skills'}>
            <Card details={ skillsList }/>
        </AnimatedPage>
    )
}

export default Skills;