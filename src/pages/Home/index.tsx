import { ReactNode } from "react";

import styles from "./styles.module.css";

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <>
      <h1 className={styles.h1}>Home</h1>
      {children}
    </>
  );
}

export default Home;
