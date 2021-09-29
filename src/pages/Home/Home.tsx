import { ReactNode, useEffect, useState } from "react";
import Card from "../../components/Card";
import Project from "../../types/models/Project";

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const data = async () => {
      const res = await fetch("http://localhost:8000/projects");
      const json = await res.json();
      setProjects(json);
    };

    data();
  }, []);

  return (
    <>
      {projects?.map((project) => (
        <div key={project.id} className="column">
          <Card project={project} />
        </div>
      ))}
    </>
  );
}

export default Home;
