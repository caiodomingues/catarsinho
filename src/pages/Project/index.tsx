import { ReactNode } from 'react';

import styles from './styles.module.css';

interface ProjectProps {
  children: ReactNode;
}

function Project({ children }: ProjectProps) {
  return (
    <>
      <h1>Project</h1>
      {children}
    </>
  );
};

export default Project;
