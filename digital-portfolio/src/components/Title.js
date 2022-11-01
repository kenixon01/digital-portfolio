import React from "react";

const Title = ({ text }) => {
        return(
        <div style={{ padding:'100px 0', width:'100%', backgroundImage:'linear-gradient(#eaeaea, #0000)'}}>
            <h1 style={{ textAlign:'center', letterSpacing: "15px", color:'black', fontSize:'64px', fontWeight:'200',fontFamily:'Quicksand' }}>{text}</h1>
            <div style={{ width:'50px',height:'2px', margin:'50px auto 0 auto',backgroundColor:'black'}}></div>
        </div>
    );
    
}

export default Title;