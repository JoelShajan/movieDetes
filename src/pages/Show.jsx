import React,{useEffect,useReducer} from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const reducer=(prevState,action)=>{
  switch(action.type){
    case 'FETCH_SUCESS':{
    return ({isLoading:false,show:action.show});
    }
    default: return prevState;
  }
}
const initialState={
  show:null,
  isloading:true,
}

const Show = () => {
    const {id}=useParams();
    const [state,dispatch] = useReducer(reducer,initialState);
    // const [show,setShow]=useState(null);
    // const [isloading,setloading]=useState(true);
    // const [error,seterror]=useState(null);
    console.log(state);
    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
           
            dispatch({type:'FETCH_SUCESS',show:results});
          
            
        })
    },[id]);
   //console.log(show);
   
  if (state.isloading){
    return (
        <div>Show data is loading</div>
      )
   }
  return (
    <div>Show data has loaded</div>
  )
}
export default Show
