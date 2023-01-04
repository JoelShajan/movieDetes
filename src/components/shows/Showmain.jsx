import React from 'react'
import Star from '../../pages/Star';
import notfound from '../../images/not-found.png'
const Showmain = ({ name, rating, summary, tags, image }) => {
    return (
      <div>
        <img src={image ? image.original : notfound} alt="show-cover" />
        <div>
          <div>
            <h1>{name}</h1>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
              <Star/>
              <span>{rating.average || 'N/A'}</span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <div>
              {tags.map((tag, i) => (
                <span key={i}>{tag+","}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Showmain