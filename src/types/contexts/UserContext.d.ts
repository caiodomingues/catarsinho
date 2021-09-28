import Project from "../models/Project";

export type UserContextProps = {
  projects?: Project[];
  addContribution: (project: Project) => Promise<void>;
};

export type UserProviderProps = {
  children: React.ReactNode;
};
