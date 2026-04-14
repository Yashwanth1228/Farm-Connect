import axios from "axios";
import { AppContextType } from "next/dist/shared/lib/utils";
import { createContext, useEffect, useState } from "react";



export const AppContent = createContext({} as AppContextType)

export const AppContextProvider = (props: any) => {

    const [user, setUser] = useState( null) ;

    useEffect( () => {

        const userauth = async () =>{

            try {
                let res = await axios.get("/api/user", {withCredentials: true})
            console.log("this is response from api/users from app context", res.data);
            if(res.data.success){
                setUser(res.data.userdata);
            }
            else{
                setUser(null);
                console.log("User authentication failed, no user data found");
            }
            }
            catch(error) {
                console.log("Error during user authentication", error);
                setUser(null);
            }
        }

        userauth()

    },[])


    const value : any = {
        user,
        setUser,

    }
 
    return (
        <AppContent.Provider value ={value} >
            {props.children}
        </AppContent.Provider>

    )
}
