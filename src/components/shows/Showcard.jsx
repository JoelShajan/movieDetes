import React from 'react'
import { Link } from 'react-router-dom';
import { StyledShow } from './StyledShow';
const Showcard = ({id,name,image,summary}) => {
    const desc=summary? summary.split(" ").slice(0,10).join(" ").replace( /(<([^>]+)>)/ig, '')+"..." : 'Summary unavailable'
    return (
        <StyledShow>
          <div className='img-wrapper'>
            <img src={image} alt="show" />
          </div>
    
          <h1>{name}</h1>
    
          <p>{desc}</p>
    
          <div className='btns'>
            <Link style={{textDecoration:"none",color:"#2596be"}} to={`/show/${id}`}>Read more</Link>
            <button type="button">Star me</button>
          </div>
        </StyledShow>
      );
    };

export default Showcard;