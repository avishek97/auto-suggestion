import React, { useState, useEffect } from 'react'
import { getSuggestions, suggestion } from './api';
import './suggestion.css'

const Suggestion = () => {
    const [searchField,setSearchField] = useState('');
    const [suggestions,setSuggestions] = useState([]);
    const [skip,setSkip] = useState(false);
    useEffect(() => {
        if(searchField==="" || skip) return "";
        getSuggestions(searchField)
        .then((foundSuggestions)=>{
            setSuggestions(foundSuggestions)
        })
    }, [searchField,skip])
     
    const onchange=(e)=>{
        const value=e.target.value
        if(value==="")
        {
            setSuggestions([])
        }
        setSearchField(value)
    }
    const onclick=(e)=>{
        setSkip(true)
        setSearchField(e)
        setSuggestions([])
        // alert(e)
    }
    const onAdd=()=>{
       var flag=0
        suggestion.map(item=>{
            if(item!==searchField)
            {
                flag=1
            }
            else{
                flag=0
            }

            
        })
        if(flag==1)
            {
                suggestion.push(searchField)
            }
    }
    const hassuggestion = suggestions.length >0
    
    return (
       

        <div className="wrapper">
            <div className="google"><span style={{color:"blue"}}>G</span ><span style={{color:"rgb(219,68,55)"}}>o</span><span style={{color:"rgb(244,160,0)"}}>o</span><span style={{color:"rgb(15,157,88)"}}>g</span><span style={{color:"rgb(15,157,88)"}}>l</span><span style={{color:"rgb(219,68,55)"}}>e</span></div>
            <input onChange={onchange} value={searchField}/>
            <button onClick={onAdd}>Search</button>
           {hassuggestion &&    ( <div className="suggestion">
                {
                    suggestions.map((suggestion)=>{
                       return <div onClick={()=>onclick(suggestion)} className="result">{suggestion} </div>
                    })
                }
            </div>)}
        </div>
        
    )
}

export default Suggestion
