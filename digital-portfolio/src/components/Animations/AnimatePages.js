import { AnimatePresence } from 'framer-motion';
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import Education from "../../pages/Education";
import Accomplishments from "../../pages/Accomplishments";
import Experience from "../../pages/Experience";
import { Routes, Route, useLocation } from 'react-router-dom';

function AnimatedPages() {
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/digital-portfolio' element={<Home/>}/>
            <Route path='/digital-portfolio/skills' element={<Skills/>}/>
            <Route path='/digital-portfolio/education' element={<Education/>}/>
            <Route path='/digital-portfolio/projects' element={<Projects/>}/>
            <Route path='/digital-portfolio/accomplishments' element={<Accomplishments/>}/>
            <Route path='/digital-portfolio/experience' element={<Experience/>}/>
            <Route path='/digital-portfolio/about' element={<About/>}/>
            <Route path='/digital-portfolio/contact' element={<Contact/>}/>
          </Routes>
        </AnimatePresence>
    )
}

export default AnimatedPages;