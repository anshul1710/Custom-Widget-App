import React, { useEffect, useRef, useState } from 'react';


const Dropdown =({label,options,dropVal,onDropChange})=>{

    const [open,setOpen]=useState(false);
    const ref=useRef();
    useEffect(()=>{
document.body.addEventListener('click',(event)=>{
    if(ref.current.contains(event.target)){
    return;
    }
    setOpen(false);
});

    });

    const getOptions=options.map(option=>{

        if(option.value===dropVal.value)
        {
            return null;
        }

        return  <div key={option.label} className="item" onClick={()=>{onDropChange(option)}}>
        {option.label}
    </div>
    });
    return(
       <div ref={ref} className="ui form">
           <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=>{setOpen(!open)}} 
                className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{dropVal.label}</div>
                        <div className={`menu ${open ? 'visible transition': ''}`}>
                            {getOptions}
                        
                    </div>
                </div>
           </div>
       </div>
    );
}
export default Dropdown;