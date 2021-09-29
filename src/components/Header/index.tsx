import styles from "./styles.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <a href="/">Catarsinho</a>
      </div>
      <div className={styles.contributions}>
        <div>3 itens</div>
        <div>
          Total{" "}
          {/* {data.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })} */}
          R$ 30,00
        </div>
      </div>
    </nav>
  );
}
