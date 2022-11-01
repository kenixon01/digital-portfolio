import React from "react";

const BannerCell = ({ icon, iconText, iconTextLink, color}) => {
    return(
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:'10%', padding:'0 100px'}}>
                <span style={{ alignSelf:'center' }}>{icon}</span>
                <span style={{ fontWeight:'500', fontSize:'24px', fontStyle:'italic', color:`${color}` }}>{iconText}{iconTextLink}</span>
            </div>
    );
}

export default BannerCell;