import React, { useState } from 'react';
import '../index.css';
export default function Title(props) {
    const [shouldChange, setShouldChange] = useState(false);
    // console.log(userLocationData)
    
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