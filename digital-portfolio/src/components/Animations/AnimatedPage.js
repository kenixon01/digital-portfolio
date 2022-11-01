import React from "react";
import { motion } from 'framer-motion'
import Title from '../../components/Title'

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}


const AnimatedPage = ( { children, image, title } ) => {
    let text = '';
    if(title !== undefined && title !== null) {
        text = <Title text={`${title}`} />
    }
    return(
        <div style={{ backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'top center', width:'100%'}}>
          <motion.div 
                variants={animations} 
                initial='initial'
                animate='animate'
                exit='exit'
                style={{width:'100%'}}> 
                {text}
                {children}
            </motion.div>
        </div>
    )
}

export default AnimatedPage;