import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';
const Show = () => {
    const {id}=useParams();
    const [show,setShow]=useState(null);
    const [isloading,setloading]=useState(true);
    const [error,seterror]=useState(null);
    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
           setTimeout(()=>{
            setShow(results);
            setloading(false);
           },1500)
            
        }).catch(err=>{
            seterror(err.message);
            setloading(false);
        });
    },[id]);
   console.log(show);
   if(error){
    return (
      <div>
        {error}
      </div>
    )
   }
   if (isloading){
    return (
        <div>Show data is loading</div>
      )
   }
  return (
    <div>Show data has loaded</div>
  )
}
export default Show
