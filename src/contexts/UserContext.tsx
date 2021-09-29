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
      const res = await fetch("http://localhost:8000/projects");
      const json = await res.json();
      setContributions(json);
    };

    fetchContributions();
  }, []);

  async function addContribution(project: Project) {
    // const newContributions = [...(contributions || []), project];
    // setContributions(newContributions);

    console.log("addContribution", project);
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
    throw new Error("useUser must be used within an UserProvider.");
  }

  return context;
}

export default UserContext;
