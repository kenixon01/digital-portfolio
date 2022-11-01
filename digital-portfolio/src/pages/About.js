import AnimatedPage from '../components/Animations/AnimatedPage';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa'
import { AiTwotoneTrophy } from 'react-icons/ai'
import Banner from '../components/Banner/Banner'

function About() {
    return(
            <AnimatedPage title={'About Me'}>
                    <div style={{ display: "flex", margin:'10px 15% 0 15%', gap:'60px'}}>
                        <div style={{ alignSelf:'center', fontSize:'20px',fontFamily:'Quicksand' }}>
                            <p>
                                I am a Senior at Georgia Gwinnett College, pursuing a degree in Information Technology 
                                with a concentration in Software Development.  Programming allows me
                                to express myself creatively and be involved in the technicalities and intricasies of the 
                                growing digital world.
                            </p>
                            <p>
                                While in college, I have been involved in many team projects 
                                (research and non-research based), and worked as a virtual peer mentor, where I assist freshmen and 
                                sophomore students in professional development and programming skills.  
                                With both my projects and my position, I gained many valuable soft skills (e.g. communication and 
                                teamwork) and hard skills (e.g. coding in Java and JavaScript).
                            </p>
                            <p>
                                My goal post-graduation is to become a full-stack developer where I can work with a team to provide
                                a service to others and use my technical skills.
                            </p>
                        </div>
                        <img src={require('../media/me.jpg')} style={{ alignSelf:'center', boxShadow:'0 20px 20px #bbb', height:'600px', width:'auto', borderRadius:'50%' }}/>
                    </div>
                    <Banner icon1={<FaHandHoldingHeart size={100} color={'teal'}/>} 
                            icon2={<FaHandsHelping size={100} color={'teal'}/>} 
                            icon3={<AiTwotoneTrophy size={100} color={'teal'}/>} 
                            icon1Text={'Always be Kind'} 
                            icon2Text={'Always be Helpful'} 
                            icon3Text={'Strive for Excellence'}
                            color={'#e5e5e5'}/>
            </AnimatedPage>
    )
}

export default About;