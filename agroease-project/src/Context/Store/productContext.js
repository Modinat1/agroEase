import { createContext, useState } from "react";

export const ProductContext = createContext({
  category: "",
  changeCategory: () => {},
});

export const ProductProvider = ({ children }) => {
  const [category, changeCategory] = useState(null);
  return (
    <ProductContext.Provider
      value={{ category: category, changeCategory: changeCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
