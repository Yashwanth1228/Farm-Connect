import axios from "axios";
import { createContext, useEffect, useState } from "react";

type AppContextType = {
  user: any;
  setUser: (user: any) => void;
};

export const AppContent = createContext<AppContextType>({
  user: null,
  setUser: () => {},
});

export const AppContextProvider = (props: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userauth = async () => {
      try {
        let res = await axios.get("/api/user", { withCredentials: true });

        console.log("User from API:", res.data);

        if (res.data.success) {
          setUser(res.data.userdata);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log("Auth error:", error);
        setUser(null);
      }
    };

    userauth();
  }, []);

  return (
    <AppContent.Provider value={{ user, setUser }}>
      {props.children}
    </AppContent.Provider>
  );
};
