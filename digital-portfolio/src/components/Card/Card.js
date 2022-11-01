import React from "react"

function Card(props) {
    var output = [];
    
    function outputDetails(category) {
        var info = [];
        for (let count = 0; count < props.details[category].length; count++) {
            info.push(<p> { props.details[category][count]} </p>)
        }
        return info;
    }
    let rotate = false;
    for (const category in props.details) {
        let green = Math.floor(Math.random() * 30) + 70
        let blue = Math.floor(Math.random() * 30) + 70
        let borderRadius_h2 = '0 50% 0 50%'
        let borderRadius_div = '0 35% 0 0'

        if(rotate) {
            borderRadius_h2 = '50% 0 50% 0'
            borderRadius_div = '35% 0 0 0'
        }

        output.push(<div style={{ backgroundColor:'#fefefe', flex: '0 1 500px', borderRadius:`${borderRadius_div}`, boxShadow:'0 10px 10px #dadada',textAlign:'center', fontFamily:'Quicksand', margin:'50px' }}>
                        <h2 style={{ fontWeight:'400', borderRadius:`${borderRadius_h2}`, color:'white', backgroundColor:`rgb(50,${green},${blue})`, padding:'80px 30px 80px 30px', }}> {category} </h2>
                        <p style={{fontWeight:'500', fontSize:'21px', padding:'80px 20px'}}>{ outputDetails(category)}</p>
                    </div>)
        rotate = !rotate
        
    }

    return(
        <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'center' }}>
            { output }
        </div>
    );
    
}

export default Card;