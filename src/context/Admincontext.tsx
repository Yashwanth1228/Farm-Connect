import axios from "axios";
import { AppContextType } from "next/dist/shared/lib/utils";
import { createContext, useEffect, useState } from "react";



export const AdminContent = createContext({} as AppContextType)

export const AdminContextProvider = (props: any) => {

    const [admin, setAdmin] = useState( null) ;
    
    

    // useEffect( () => {

    //     const userauth = async () =>{

    //         try {
    //             let res = await axios.get("/api/admin/user", {withCredentials: true})
    //         console.log("this is response from api/admin/users from app context", res.data);
    //         if(res.data.success){
    //             if (res.data.role !== "user"){
    //                 setAdmin(res.data.userdata);
    //             }
    //             else {
    //                 console.log(" you are admin ");
    //             }
    //             // setUser(res.data.userdata);
    //         }
    //         else{
    //             setAdmin(null);
    //             console.log("User authentication failed, no user data found");
    //         }
    //         }
    //         catch(error) {
    //             console.log("Error during user authentication", error);
    //             setAdmin(null);
    //         }
    //     }

    //     userauth()

    // },[])


    const value : any = {
        admin,
        setAdmin
        
        

    }
 
    return (
        <AdminContent.Provider value ={value} >
            {props.children}
        </AdminContent.Provider>

    )
}
