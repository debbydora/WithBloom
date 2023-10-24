import { createContext, useEffect, useState, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// Define the shape of the context
type AuthContextType = {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
};

// Initialize the context
export const AuthContext = createContext<AuthContextType | any>(undefined);

export interface AuthContextProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProps) {
  const auth = getAuth();
  const [user, setUser] = useState<User | any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) setUser(currentUser);
      else {
        setUser(null);
      }
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const contextValue: AuthContextType = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
