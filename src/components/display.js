import React,{useContext} from 'react';
import cricketcontext from './cricketcontext';

const Display=()=>{
    const{cricketer, setCricketer}=useContext(cricketcontext)
    return(
        <div>
            <h1>Accesing global elements</h1>
            <p>cricketer is:{cricketer.name}</p>
            <p>Age is:{cricketer.age}</p>
            <p>country is:{cricketer.country}</p>
            <p>retire is:{cricketer.retire}</p>
            <p>wickets is:{cricketer.wickets}</p>
            <button onClick={()=>setCricketer({...cricketer,age:cricketer.age+1})}>update sachin</button>
        </div>
    )
}
export default Display;