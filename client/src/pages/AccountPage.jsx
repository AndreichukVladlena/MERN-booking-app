import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

export default function AccountPage (){
    const {ready, user} = useContext(UserContext);

    if (!ready){
        return <div>Loading...</div>;
    }

    if (ready && !user){
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            'account for {user.name}'
        </div>
    );
}