import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { useCart } from "../../contexts/CartContext";
import Proj from "../../types/models/Project";

import styles from "./styles.module.css";

type ProjectParams = {
  id: string;
};

type FormProps = {
  amount: number;
};

function Project() {
  const { register, handleSubmit } = useForm();
  const { id }: ProjectParams = useParams();
  const [project, setProject] = useState<Proj>();
  const { addContribution } = useCart();

  useEffect(() => {
    const data = async () => {
      const res = await fetch(`http://localhost:8000/projects/${id}`);
      const json = await res.json();
      setProject(json);
    };

    data();
  }, [id]);

  const handleContribute = ({ amount }: FormProps) => {
    addContribution(amount, project);
  };

  return (
    <>
      <div className={styles.left_column}>
        <img
          className={styles.image}
          src={project?.imageUrl}
          alt={project?.title}
        />
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
          <form onSubmit={handleSubmit(handleContribute)}>
            <div>
              <label>
                <input
                  {...register("amount", {
                    valueAsNumber: true,
                  })}
                  type="radio"
                  name="amount"
                  value={10}
                />{" "}
                R$ 10
              </label>
            </div>
            <div>
              <label>
                <input
                  {...register("amount", {
                    valueAsNumber: true,
                  })}
                  type="radio"
                  name="amount"
                  value={25}
                />{" "}
                R$ 25
              </label>
            </div>
            <div>
              <label>
                <input
                  {...register("amount", {
                    valueAsNumber: true,
                  })}
                  type="radio"
                  name="amount"
                  value={50}
                />{" "}
                R$ 50
              </label>
            </div>
            <div>
              <label>
                <input
                  {...register("amount", {
                    valueAsNumber: true,
                  })}
                  type="radio"
                  name="amount"
                  value={100}
                />{" "}
                R$ 100
              </label>
            </div>
            <p className={styles.pt_5}>
              <button type="submit">Apoiar</button>
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
