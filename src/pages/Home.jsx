import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
const Home = () => {
    const [input,setinput]=useState('');
    const [result,setresult]=useState(null);
    const handelInput=(ev)=>{
        
        setinput(ev.target.value)
        //console.log(document.getElementById('INP').value);
    };
    const handleSearch=(input)=>{
       apiGet(`/search/shows?q=${input}`).then(result=>{
       setresult(result); 
       console.log(result);
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
            return (result.map(item=>{
                return (
                    <div key={item.show.id}>
                        {item.show.name}
                    </div>
                );
            }
            )
            );
        }
    };
  return (
    <MainPageLayout>
        <input id='INP' type='text' onChange={(ev)=>{
            handelInput(ev);
        }} value={input} onKeyDown={keyhandle}/>
        <button onClick={()=>{handleSearch(input);}}>
            Search
        </button>

        <div>{resultRender()}</div>
    </MainPageLayout>
    
    
  )
}
export default Home;