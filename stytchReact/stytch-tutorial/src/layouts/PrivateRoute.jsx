import { Navigate } from "react-router-dom";
import { useStytchSession } from "@stytch/stytch-react";

export default function PrivateRoute(){
    const session= useStytchSession();
    if(!session){
        return<Navigate to="/Login" replace/> 
    }
    return <> </>;
}