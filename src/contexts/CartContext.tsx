import Cookies from "js-cookie";
import { useContext, createContext, useState, useEffect } from "react";
import {
  CartContextProps,
  CartProviderProps,
} from "../types/contexts/CartContext";
import Project from "../types/models/Project";

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [contributions, setContributions] =
    useState<{ amount: number; id: number }[]>();

  useEffect(() => {
    const contributions = Cookies.get("catarsinho_cart");

    if (contributions) {
      setContributions(JSON.parse(contributions));
    }
  }, []);

  async function addContribution(amount: number, project: Project | undefined) {
    if (amount === 0) return;

    if (contributions) {
      setContributions([...contributions, { amount, id: project?.id ?? 0 }]);
    } else {
      setContributions([{ amount, id: project?.id ?? 0 }]);
    }

    // Manually add as did at state to not trigger another render cycle
    Cookies.set(
      "catarsinho_cart",
      JSON.stringify([
        ...(contributions ?? []),
        { amount, id: project?.id ?? 0 },
      ]),
      {
        expires: 9999,
      }
    );
  }

  return (
    <CartContext.Provider
      value={{
        contributions,
        addContribution,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider.");
  }

  return context;
}

export default CartContext;
