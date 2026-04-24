import axios from "axios";
import { AppContextType } from "next/dist/shared/lib/utils";
import { createContext, useEffect, useState } from "react";



export const AppContent = createContext({} as AppContextType)

export const AppContextProvider = (props: any) => {

    const [user, setUser] = useState( null) ;
    const [admin, setAdmin] = useState( null) ;
    
    

    useEffect( () => {

        const userauth = async () =>{

            try {
                let res = await axios.get("/api/user", {withCredentials: true})
            console.log("this is response from api/users from app context", res.data);

            let res2 = await axios.get("/api/admin/user", {withCredentials: true})
            console.log("this is response from api/admin/users from app context", res2.data);

            
            if(res2.data.success){
                if (res2.data.userdata.role === "admin"){

                    setAdmin(res2.data.userdata);
                }
                
                // setUser(res.data.userdata);
            }
            else if (res.data.success) {
                
                setUser(res.data.userdata);
                console.log("User authentication failed, no user data found");
            }

            else {
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
        admin,
        setAdmin,
        
        

    }
 
    return (
        <AppContent.Provider value ={value} >
            {props.children}
        </AppContent.Provider>

    )
}
