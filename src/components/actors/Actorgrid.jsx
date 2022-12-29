import React from 'react';
import notfound from '../../images/not-found.png';
import ActorCard from './Actorcard';
const Actorgrid = ({data}) => {
  return (<div>{
    data.map(
        ({person})=>{
            //console.log(person.country?person.country.name:null);
         return(<ActorCard key={person.id} 
            name={person.name} 
            image={(person.image)? person.image.medium:notfound} 
            gender={person.gender}
            country={person.country? person.country.name:null}
            birthday={person.birthday}
            deathday={person.deathday}  />);  
        }
    )
    }</div>
   
  )
}
export default Actorgrid;