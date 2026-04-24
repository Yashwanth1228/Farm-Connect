import axios from "axios";
import { createContext, useEffect, useState } from "react";

type AppContextType = {
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
};



export const AppContent = createContext<AppContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});

export const AppContextProvider = (props: any) => {

    const [user, setUser] = useState( null) ;
    const [admin, setAdmin] = useState( null) ;
    const [loading, setLoading] = useState<boolean>(true);

    
    

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
        loading,
        
        

    }
 
    return (
        <AppContent.Provider value ={value} >
            {props.children}
        </AppContent.Provider>

    )
}