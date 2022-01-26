import { Button } from '@mui/material';

export default function ForwardButton({ checked, pageNum, handleChange, viewForward }) {
   console.log(pageNum)
    // const containerRef = React.useRef(null);
    return (
        <>
        
            <div className='onlyOnDesktop'>
                
                    <Button 
                        checked={checked} 
                        onChange={handleChange} 
                        onClick={() => viewForward(pageNum)} 
                        sx={{ 
                            width: 20, 
                            height: 0, 
                            fontFamily: 'neue-haas-grotesk-display, sans-serif', 
                            color: 'black', 
                            fontSize: 12,  
                        }} 
                        endIcon={
                            <span style={{ width: 0, height: 0, borderBottom: '10px solid transparent', borderTop: '10px solid transparent', borderLeft: '10px solid black', padding: 0, }}></span>
                            }>  

                    Learn&nbsp;More 
                    </Button>
               
            </div>
            <div className='onlyOnMobile'>
                    <Button 
                        checked={checked} 
                        onChange={handleChange} 
                        onClick={() => viewForward(pageNum)} 
                        sx={{ 
                            width: 20, 
                            height: 0, 
                            fontFamily: 'neue-haas-grotesk-display, sans-serif', 
                            color: 'black', 
                            fontSize: 12,  
                        }} 
                        endIcon={
                            <span style={{ width: 0, height: 0, borderBottom: '10px solid transparent', borderTop: '10px solid transparent', borderLeft: '10px solid black', padding: 0, }}></span>
                            }>  

                    
                    </Button>
            </div>
        
        </>
    )
}