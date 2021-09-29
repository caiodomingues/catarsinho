import styles from "./styles.module.css";

interface ProgressBarProps {
  collected: number;
  goal: number;
  max: number;
}

function ProgressBar({ collected, goal, max }: ProgressBarProps) {
  return (
    <progress
      className={styles.progress}
      value={(collected * 100) / goal}
      max={max}
    >
      {(goal * 100) / 100}%
    </progress>
  );
}

export default ProgressBar;
