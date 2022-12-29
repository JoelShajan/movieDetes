import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
import Actorgrid from '../components/actors/Actorgrid.jsx';
import Showgrid from '../components/shows/Showgrid.jsx';
const Home = () => {
    const [input,setinput]=useState('');
    const [result,setresult]=useState(null);
    const [option,setoption]=useState('cshows');
    const [current,setcurrent]=useState('shows');
    const handelInput=(ev)=>{
        
        setinput(ev.target.value)
        //console.log(document.getElementById('INP').value);
    };
    const handleSearch=(input)=>{
       apiGet(`/search/${option}?q=${input}`).then(result=>{
       setcurrent(option);
        setresult(result); 
       //console.log(result);
       }); 
       
    };
    const keyhandle=(ev)=>{
        if(ev.keyCode===13){
            handleSearch(input);
        }
    };
    const resultRender=()=>{
        if(result===null){
            return null;
        }
        else if(result.length===0){
            return 'No results found';
        }
        else {
           
               return (current==='shows'?<Showgrid  data={result}/> :<Actorgrid data={result}/>) 
                        
                
           }

           
        
        
    };
    const selector=(ev)=>{
            setoption(ev.target.value)   ; 
    };
  return (
    <MainPageLayout>
        <input id='INP' type='text' 
        placeholder='Enter search key'
        onChange={(ev)=>{
            handelInput(ev);
        }} value={input} onKeyDown={keyhandle}/>
        <button onClick={()=>{handleSearch(input);}}>
            Search
        </button>
        <label>
            Shows
            <input type='radio' value='shows' name="selector" onChange={selector}/>
        </label>
        <label>
            Actors
            <input type='radio' value='people' name="selector" onChange={selector} />
        </label>
        <div>{resultRender()}</div>
    </MainPageLayout>
    
    
  )
}
export default Home;