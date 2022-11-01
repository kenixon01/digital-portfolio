import { CDBBtn } from 'cdbreact';
import { string } from 'i/lib/util';
import React from 'react';
import Typewriter from "typewriter-effect";

function HomeInfo() {
    
    return(
        <div style={{  display:"flex", flexDirection:'column', gap:'10px', margin:"40vh 0 0 15vw" }}>
            <span style={{ fontSize: "96px", letterSpacing: "15px", fontWeight: 400 }}>Khamilah Enjoli Nixon</span>
            <div style={{ display:'flex', gap:'15px', fontSize: "36px", fontWeight: 400, letterSpacing: "4px", color:'black' }}>
                <span>I am </span>
                <Typewriter 
                    options={{
                        strings: ['a Student.', 'a Software Engineer.', 'an Intern.', 'a Gamer.', 'a Baker.', 'a Friend.'],
                        autoStart: true,
                        pauseFor: 2000,
                        loop: true,
                        
                    }}/>
            </div>
            <a href={require("../media/KENResume.docx")} style={{ textDecoration:'none', marginTop:'60px' }}>
                <CDBBtn size="xl" style={{ backgroundColor:'teal', fontSize:"24px", width:"200px", height:"60px", border: "none" }}>Download CV</CDBBtn>
            </a>
        </div>
    )
}

export default HomeInfo;