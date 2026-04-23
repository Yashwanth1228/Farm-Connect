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
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const userauth = async () => {
      try {
        let res = await axios.get("/api/user", { withCredentials: true });

        console.log("API USER RESPONSE:", res.data);

        if (res.data.success) {
          setUser(res.data.userdata);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log("Error during user authentication", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    userauth();
  }, []);

  return (
    <AppContent.Provider value={{ user, setUser, loading }}>
      {props.children}
    </AppContent.Provider>
  );
};
