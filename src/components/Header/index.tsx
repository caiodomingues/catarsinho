import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import styles from "./styles.module.css";

export default function Header() {
  const { contributions } = useCart();
  const [amount, setAmount] = useState<number | undefined>(0);
  const [items, setItems] = useState<number | undefined>(0);

  useEffect(() => {
    setAmount(() => {
      return contributions?.reduce((acc, { amount }) => {
        // Had some problems type checking this, sadly gotta do it this way (not a good way)
        if (typeof amount === "string") amount = parseInt(amount);
        if (typeof acc === "string") acc = parseInt(acc);

        return acc + amount;
      }, 0);
    });

    setItems(contributions?.length);
  }, [contributions]);

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <a href="/">Catarsinho</a>
      </div>
      <div className={styles.contributions}>
        <div>{items ?? 0} itens</div>
        <div>
          Total{" "}
          {amount?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }) ?? "R$ 0,00"}
        </div>
      </div>
    </nav>
  );
}
