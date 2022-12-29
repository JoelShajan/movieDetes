import React from 'react'
import { Link } from 'react-router-dom';
const Showcard = ({id,name,image,summary}) => {
    const desc=summary? summary.split(" ").slice(0,10).join(" ").replace( /(<([^>]+)>)/ig, '') : 'Summary unavailable'
    return (
        <div>
          <div>
            <img src={image} alt="show" />
          </div>
    
          <h1>{name}</h1>
    
          <p>{desc}</p>
    
          <div>
            <Link to={`/show/${id}`}>Read more</Link>
            <button type="button">Star me</button>
          </div>
        </div>
      );
    };

export default Showcard;