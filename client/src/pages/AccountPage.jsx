import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage (){
    const {ready, user} = useContext(UserContext);

    let {subpage} = useParams();
    if (subpage === undefined){
        subpage = 'profile';
    }

    if (!ready){
        return <div>Loading...</div>;
    }

    if (ready && !user){
        return <Navigate to={'/login'}/>
    }

    async function logout (){
        await axios.post('/logout');
    }
    
    function linkClasses(type=null){
        let classes =  'py-2 px-6';
        if(type === subpage || (subpage === undefined && type === 'profile')){
            classes += ' bg-primary text-white rounded-full';
        } 
        return classes;
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')}  to={'/account/places'}>My accomodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
}