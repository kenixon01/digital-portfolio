import AnimatedPage from '../components/Animations/AnimatedPage';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card'
import {projectList} from '../data/cardLists'
import Background from '../media/callout-bg.png'
import { RiInformationFill } from 'react-icons/ri'

function Projects() {
    const website = <a href='https://kenixon01.github.io/digital-portfolio-projects/' style={{ textDecoration: 'none' }}>Click Here</a>
    return(
        <AnimatedPage image={Background} title={'Projects'}>
            <Banner icon1={<RiInformationFill size={100} color={'teal'}/>} 
                icon1Text={'For more information visit '} 
                icon1TextLink={website}
                color={'#ababab'}/>
            <Card details={ projectList } />
        </AnimatedPage>
    )
}

export default Projects;