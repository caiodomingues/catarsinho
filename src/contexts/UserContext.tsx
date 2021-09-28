import { useContext, createContext, useState, useEffect } from "react";
import {
  UserContextProps,
  UserProviderProps,
} from "../types/contexts/UserContext";
import Project from "../types/models/Project";

const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [contributions, setContributions] = useState<Project[]>();

  useEffect(() => {
    const fetchContributions = async () => {
      const res = await fetch("https://localhost:3000/api/contributions");
      const json = await res.json();
      setContributions(json);
    };

    fetchContributions();
  }, [contributions]);

  async function addContribution(project: Project) {
    const newContributions = [...(contributions || []), project];
    setContributions(newContributions);
  }

  return (
    <UserContext.Provider
      value={{
        projects: contributions,
        addContribution,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider.");
  }

  return context;
}

export default UserContext;
