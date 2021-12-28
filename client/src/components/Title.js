import { useState } from 'react';
import '../index.css';
export default function Title({currLocation, setCurrLocation}) {
    const [shouldChange, setShouldChange] = useState(false);
    
    return (
        <div style={{backgroundColor: "#fff"}} 
        onMouseEnter={() => setShouldChange(true)}
                onMouseLeave={() => setShouldChange(false)}>
            <h1 className={shouldChange ? 'new' : 'code' }> 
            ABCDEFGHIJKLM
            </h1>
        </div>
    )
    

} 