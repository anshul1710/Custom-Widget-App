import React from 'react';



const Link = ({className,href,children})=>{

    const onClickEvent=(event)=>{
        if(event.metaKey || event.ctrlKey)
        {
            return;
        }
        event.preventDefault();
        window.history.pushState({},'',href);


        const navState=new PopStateEvent('popstate');
        window.dispatchEvent(navState);
        }
    return(
        <a onClick={onClickEvent} className={className} href={href}>{children}</a>
    );
}

export default Link;