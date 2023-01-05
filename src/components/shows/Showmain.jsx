import React from 'react'
import Star from '../../pages/Star';
import notfound from '../../images/not-found.png'
import { Headline, MainDataWrapper, TagList } from './Showmain.styled';
const Showmain = ({ name, rating, summary, tags, image }) => {
    return (
      <MainDataWrapper>
        <img src={image ? image.original : notfound} alt="show-cover" />
        <div className='text-side'>
          <Headline>
            <h1>{name}</h1>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
              <Star/>
              <span>{rating.average || 'N/A'}</span>
            </div>
          </Headline>
          <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <TagList>
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </TagList>
          </div>
        </div>
      </MainDataWrapper>
    );
  };
  
export default Showmain