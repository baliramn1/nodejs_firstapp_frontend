import React, { useContext } from "react";
import { Context } from "../main";
import { Loader } from "../components/Loader";


const Profile = () => {
    const {isAuthenticated, loading, user} = useContext(Context);
    console.log("user info: ", user)
    return (
        loading ? <Loader /> : (
            <div style={{textAlign: "center", marginTop: "250px", padding: "10px"}}>
                <h1 style={{fontSize: "40px", fontFamily: "helvetica"}}>{user?.name}</h1>
                <p style={{fontSize: "20px", fontFamily: "cursive"}}>{user?.email}</p>
            </div>
        )
    )
}
 

export default Profile;