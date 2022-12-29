import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
const Home = () => {
    const [input,setinput]=useState('');
    const [result,setresult]=useState(null);
    const [option,setoption]=useState('shows');
    const [current,setcurrent]=useState('shows');
    const handelInput=(ev)=>{
        
        setinput(ev.target.value)
        //console.log(document.getElementById('INP').value);
    };
    const handleSearch=(input)=>{
       apiGet(`/search/${option}?q=${input}`).then(result=>{
       setcurrent(option);
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
                if (current==='shows'){
                 return (
                <div key={item.show.id}>
                        {item.show.name}
                        </div>)  }
                else{
                    return (
                        <div key={item.person.id}>
                        {item.person.name}
                    </div>);
                }
            })
            )}

           
        
        
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