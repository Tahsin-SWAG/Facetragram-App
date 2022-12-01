import './App.css'
import Onmind from './components/Onmind';
import { useEffect, useState } from 'react';
import Massanger from './components/Massanger';
import { useAuth } from './components/Firebase';
import Leftbar from './components/Leftbar';
import Signup from './components/Signup';
 function App(){


    const currentuser = useAuth();
    const [Online , setOnline] = useState(null);


    useEffect(() => {
        window.addEventListener('online', () => setOnline(true));
        window.addEventListener('offline', () => setOnline(false));
    })

    if(currentuser === null){
        return (
            <Signup/>
        )
    }else if(currentuser === undefined){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
     ) }else if(Online === false){
            return (
                <div>
                   <h5 color='red'>please check your connection</h5>
                </div>
            )
        }
            else{
                return (
                    <div style={{display:'flex'}}>   
                    <Leftbar/>
                   <Onmind/>
                    <div style={{ display:{xs:'none' , sm:'none'}}}><Massanger/></div>
                    </div>
              )}
}

export default App;