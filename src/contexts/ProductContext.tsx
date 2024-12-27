import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ProductContextType {
    pModel: boolean;
    setPModel: Dispatch<SetStateAction<boolean>>;
    menu:boolean;
    setMenu: Dispatch<SetStateAction<boolean>>;
    cModel: boolean;
    setCModel: Dispatch<SetStateAction<boolean>>;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface ProductProviderProps {
    children: ReactNode;
  }

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [pModel, setPModel] = useState<boolean>(false)
    const [menu,setMenu] = useState<boolean>(false)
    const [cModel,setCModel] = useState<boolean>(false)

    

    return(
        <ProductContext.Provider value={{pModel, setPModel,menu,setMenu,cModel,setCModel}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider