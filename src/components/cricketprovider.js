import React,{useState} from 'react';
import Cricketcontext from './cricketcontext';
const Cricketprovider=(props)=>{
    const[cricketer,setCricketer]=useState({
        name:"sachin",
        age:31,
        country:"india",
        retire:true,
        wickets:200
    })
    return(
     <Cricketcontext.Provider value={{
        cricketer:cricketer,
        setCricketer:setCricketer}}>
            {props.children}
        </Cricketcontext.Provider>
    )
}
export default Cricketprovider;