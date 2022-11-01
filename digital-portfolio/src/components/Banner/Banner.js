import React from "react";
import BannerCell from './BannerCell'

const Banner = ({  icon1, icon2, icon3, icon1Text, icon2Text, icon3Text, icon1TextLink, icon2TextLink, icon3TextLink, color }) => {
    let cell1 = '';
    let cell2 = '';
    let cell3 = '';
    if(icon1 !== null && icon1 !== undefined && icon1Text !== null && icon1Text !== undefined) {
        cell1 = <BannerCell icon={icon1} iconText={icon1Text} iconTextLink={icon1TextLink} color={color}/>
    }
    if(icon2 !== null && icon2 !== undefined && icon2Text !== null && icon2Text !== undefined) {
        cell2 = <BannerCell icon={icon2} iconText={icon2Text} iconTextLink={icon2TextLink} color={color}/>
    }
    if(icon3 !== null && icon3 !== undefined && icon3Text !== null && icon3Text !== undefined) {
        cell3 = <BannerCell icon={icon3} iconText={icon3Text} iconTextLink={icon3TextLink} color={color}/>
    }
    return(
        <div style={{ borderTop:'1px solid black', borderBottom:'1px solid black', margin:'5% 10%', display:'flex', flexWrap:'wrap', height:'250px', gap:'50px',justifyContent:'center'}}>
            {cell1}{cell2}{cell3}
        </div>
    );
}

export default Banner;