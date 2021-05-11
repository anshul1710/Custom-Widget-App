import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
const items=[
    {
        title:'What is React?',
        content:'It is a JS Framework'
    },
    {
        title:'What use React?',
        content:'It is popular'
    },
    {
        title:'How to use React?',
        content:'use components'
    },
];

const options=[
    {
    label:'Red',
    value:'red'
    },
    {
        label:'Green',
        value:'green'
        },
        {
            label:'Blue',
            value:'blue'
            }
];

const showAccordion = () =>{
    if(window.location.pathname==='/')
    {
        return 
    }
}
const App =()=>{

    const [dropVal,setDropVal]=useState(options[0]);
    return(
        <div>
            <Header></Header>
            <Route path="/">
            <Accordion items={items}></Accordion>
            </Route>
            <Route path="/list">
            <Search></Search>
            </Route>
            <Route path="/dropdown">
            <Dropdown  dropVal={dropVal} onDropChange={setDropVal} options={options}></Dropdown>
            </Route>
            <Route path="/translate">
            <Translate></Translate>
            </Route>
        </div>
    
);
}
export default App;