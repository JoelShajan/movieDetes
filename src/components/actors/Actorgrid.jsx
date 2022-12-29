import React from 'react';
import notfound from '../../images/not-found.png';
import ActorCard from './Actorcard';
import {Flexgrid} from '../styled';
const Actorgrid = ({data}) => {
  return (<Flexgrid>{
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
    }</Flexgrid>
   
  )
}
export default Actorgrid;