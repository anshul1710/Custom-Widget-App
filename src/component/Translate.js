import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options=[
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
];
const Translate = () =>{
const [lang,setLang]=useState(options[0]);
const [val,setVal]=useState('');
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={val} onChange={(event)=>setVal(event.target.value)}></input>
                </div>
            </div>

        <Dropdown  label="Select a language" options={options} dropVal={lang} onDropChange={setLang}></Dropdown>
<hr></hr>
<div className="ui header">Output: 
<Convert text={val} language={lang}></Convert></div>
        </div>
    );
}
export default Translate;