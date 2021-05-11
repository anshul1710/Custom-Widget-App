import React, { useEffect, useState } from 'react';
import axios from 'axios';


const KEY='AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language,text}) =>{
const [transalted,setTranslated]=useState('');
const [debouncedText,setDebouncedText]=useState(text);

useEffect(()=>{
const timer=setTimeout(()=>{
    setDebouncedText(text);
    console.log(debouncedText);

},1000);

return ()=>{
    clearTimeout(timer);
}

},[text]);
useEffect(()=>{

const trans = async ()=>{
   const {data}= await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
    params:{
        q: text,
        target:language.value,
        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    }
});
setTranslated(data.data.translations[0].translatedText);
}
trans();
},[language,debouncedText]);

    return(
        <div className="ui header">
                {transalted}
        </div>
    );
}
export default Convert;