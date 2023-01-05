import React,{useEffect,useReducer} from 'react';
import { useParams } from 'react-router';
import Details from '../components/shows/Details';
import Showmain from '../components/shows/Showmain';
import Cast from '../components/shows/Cast';
import { apiGet } from '../misc/config';
import Seasons from '../components/shows/Seasons';
import { InfoBlock, ShowPageWrapper } from '../components/styled';

const reducer=(prevState,action)=>{
  switch(action.type){
    case 'FETCH_SUCESS':{
    return ({isloading:false,show:action.show});
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
    const [{show,isloading},dispatch] = useReducer(reducer,initialState);
    // const [show,setShow]=useState(null);
    // const [isloading,setloading]=useState(true);
    // const [error,seterror]=useState(null);
   
    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
           
            dispatch({type:'FETCH_SUCESS',show:results});
          
            
        })
    },[id]);
   //console.log(show);
   
  if (isloading){
    return (
        <div>Show data is loading</div>
      )
   }
  return (
    <ShowPageWrapper>
    <Showmain
    image={show.image}
    name={show.name}
    rating={show.rating}
    summary={show.summary}
    tags={show.genres}
    />

    <InfoBlock>
      <h2>Details</h2>
      <Details status={show.status}
      network={show.network}
      premiered={show.premiered}
      />
    </InfoBlock>
    <InfoBlock>
      <h2>Seasons</h2>
      <Seasons
      seasons={show._embedded.seasons}
      />
    </InfoBlock>
    <InfoBlock>
      <h2>Cast</h2>
      <Cast
      cast={show._embedded.cast}
      />
    </InfoBlock>
    
    </ShowPageWrapper>
  )
}
export default Show
