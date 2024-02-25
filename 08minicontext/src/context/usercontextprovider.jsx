import React from "react";
import Usercontext from "./usercontext";

const Usercontextprovider = ({children})=>{
    const [user, setuser] = React.useState(null)
    return (
        <Usercontext.Provider value={{user, setuser}}>
        {children}
        </Usercontext.Provider>
    )
}


export default Usercontextprovider