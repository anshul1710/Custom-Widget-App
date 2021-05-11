import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Search = () =>{


const [value,setValue]=useState('programming');
const [results,setResults]=useState([]);
console.log(results);
useEffect(()=>{
    const search = async () =>{
       const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:value
            }
        });
        setResults(data.query.search);
    }


if(value && !results.length)
{
    search();
}
else{

   const timeout= setTimeout(()=>{
        if(value){
            search();
                }
    },1000);
    return ()=>{
        clearTimeout(timeout);
        }
}
   
},[value,results.length]);


const renderedList=results.map(result=>{
    return <div key={result.pageid} className="item">
        <div className="right floated content">
            <a target="_blank" className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}> 
              Go  
            </a>
        </div>
        <div className="content">
            <div className="header">
            {result.title}
            </div>
            <p dangerouslySetInnerHTML={{__html:result.snippet}}></p>
        </div>
    </div>
})


    return(
        <div>
            <div className="ui form">
              <div className="field">
                 <label>
                        Enter Search Term
                 </label>
                 <input className="input" value={value} onChange={(event)=>setValue(event.target.value)}>
                 </input>
              </div>
            </div>
            <div className="ui celled list">
                {renderedList}
            </div>
        </div>
    );
}
export default Search;