import React from "react";
import Display from "./components/display";
import Cricketprovider from "./components/cricketprovider";
const App=()=>{

  return(
    <div>
   <Cricketprovider>
    <Display/>
   </Cricketprovider>
    </div>
  )
}
export default App;