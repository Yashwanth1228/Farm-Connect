import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // ✅ run only on client
  useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem("user");

    if (!stored) {
      setLoading(false);
      return;
    }

    const parsed = JSON.parse(stored);
    setUser(parsed);

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/get?email=${parsed.email}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user?.email) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, mounted }}>
      {children}
    </UserContext.Provider>
  );
};
