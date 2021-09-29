import Project from "../../types/models/Project";
import ProgressBar from "../ProgressBar";

import styles from "./styles.module.css";

interface CardProps {
  project: Project;
}

function Card({ project }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <a href={`/project/${project.id}`}>
          <img
            className={styles.image}
            src={project.imageUrl}
            alt={project.title}
          />
        </a>
      </div>
      <div className={styles.card_content}>
        <div className={styles.media_content}>
          <p className={styles.title}>{project.title}</p>
          <ProgressBar
            collected={project.collected}
            goal={project.goal}
            max={100}
          />
        </div>
      </div>
      <footer className={styles.card_footer}>
        <p>{((project.collected * 100) / project.goal).toFixed(0)}%</p>
        <p>
          <span>
            {project.collected.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
            <br />
            <span>arrecadados</span>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Card;
