import React from 'react'
import { Link } from 'react-router-dom'
const navlist=[
    {link:'/',linkname:'home'},
    {link:'/star',linkname:'star'},
       ];
 const  Navs=() =>{

    return (
        
            <ul>
                {navlist.map(elem => {
                    return (
                        <li key={elem.link}>
                            <Link to={elem.link}>{elem.linkname}</Link>
                        </li>
                    );
                })}
            </ul>

       
    )
};
export  default Navs;

