import React from 'react'
import Showcard from './Showcard';
import notfound from '../../images/not-found.png';
const Showgrid = ({data}) => {
    console.log(data);
    
  return (<div>{
    data.map(
        ({show})=>{
         return(<Showcard key={show.id}
            id={show.id} 
            name={show.name} 
            image={(show.image)? show.image.medium:notfound} 
            summary={show.summary} />)  
        }
    )
    }</div>
   
  )
}
export default Showgrid;