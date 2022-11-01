import HomeInfo from '../components/HomeInfo'
import AnimatedPage from '../components/Animations/AnimatedPage';
import Background from '../media/99.jpg'

function Home() {
    return(
        <AnimatedPage image={Background}>
            <HomeInfo />
        </AnimatedPage>
    )
}

export default Home;