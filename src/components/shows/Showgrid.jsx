import React from 'react'
import Showcard from './Showcard';
import notfound from '../../images/not-found.png';
import {Flexgrid} from '../styled';
const Showgrid = ({data}) => {
    console.log(data);
    
  return (<Flexgrid>{
    data.map(
        ({show})=>{
         return(<Showcard key={show.id}
            id={show.id} 
            name={show.name} 
            image={(show.image)? show.image.medium:notfound} 
            summary={show.summary} />)  
        }
    )
    }</Flexgrid>
   
  )
}
export default Showgrid;