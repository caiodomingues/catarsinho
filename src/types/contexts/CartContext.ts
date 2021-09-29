import Project from "../models/Project";

export type CartContextProps = {
  contributions?: Array<{
    amount: number;
    id: number;
  }>;
  addContribution: (
    amount: number,
    project: Project | undefined
  ) => Promise<void>;
};

export type CartProviderProps = {
  children: React.ReactNode;
};
