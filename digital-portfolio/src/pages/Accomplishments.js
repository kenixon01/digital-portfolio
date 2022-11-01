import AnimatedPage from '../components/Animations/AnimatedPage';
import Card from '../components/Card/Card'
import {accomplishmentList} from '../data/cardLists'
import Background from '../media/callout-bg.png'

function Accomplishments() {
    return(
        <AnimatedPage image={Background} title={'Accomplishments'}>
            <Card details={ accomplishmentList } />
        </AnimatedPage>
    )
}

export default Accomplishments;