import { useState } from 'react';
import search from '../utils/API';


export default function JailStat({ currLocation, queryString }) {
    const [jailCount, setJailCount] = useState(null);
    // useEffect(() => {
    //    return () => findJailData(queryString);
    // }, []);
  

    const findJailData = (query) => { 
            search(query)
            .then((res) => {
                
                
                setJailCount(res.data);
            }).catch(err => { console.log(err) });
    }

    


    return (
        <div>
            <h1> 
            {findJailData(queryString)}
            </h1>
        </div>
    )
    

} 