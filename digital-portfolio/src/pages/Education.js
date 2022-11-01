import AnimatedPage from '../components/Animations/AnimatedPage';
import Card from '../components/Card/Card'
import {schoolList} from '../data/cardLists'
import Background from '../media/callout-bg.png'

function Education() {
    return(
        <AnimatedPage image={Background} title={'Education'}>
            <Card details={ schoolList }/>
        </AnimatedPage>
    )
}

export default Education;