import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import Proj from "../../types/models/Project";

import styles from "./styles.module.css";

type ProjectParams = {
  id: string;
};

function Project() {
  const { id }: ProjectParams = useParams();
  const [project, setProject] = useState<Proj>();

  useEffect(() => {
    const data = async () => {
      const res = await fetch(`http://localhost:8000/projects/${id}`);
      const json = await res.json();
      setProject(json);
    };

    data();
  }, [id]);

  return (
    <>
      <div className={styles.left_column}>
        <img src={project?.imageUrl} alt={project?.title} />
        <div className="container">
          <h1 className={styles.title}>{project?.title}</h1>
          <h2 className={styles.subtitle}>{project?.description}</h2>
        </div>
      </div>
      <div className={styles.right_column}>
        <div className={styles.box}>
          <p>
            <span className={styles.collected}>
              {project?.collected.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </span>{" "}
            arrecadados
          </p>
          <p className={styles.pt_3}>
            <ProgressBar
              collected={project?.collected ?? 0}
              goal={project?.goal ?? 0}
              max={100}
            />
          </p>
          <p className={styles.pt_5}>
            <span>
              Meta:{" "}
              {project?.goal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
        </div>
        <div className={styles.box}>
          <form>
            <div>
              <label>
                <input type="radio" name="amount" /> R$ 10
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="amount" /> R$ 25
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="amount" /> R$ 50
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="amount" /> R$ 100
              </label>
            </div>
            <p className={styles.pt_5}>
              <button type="button">Apoiar</button>
            </p>
          </form>
        </div>
        <p>
          <a href="/">Voltar para os projetos</a>
        </p>
      </div>
    </>
  );
}

export default Project;
