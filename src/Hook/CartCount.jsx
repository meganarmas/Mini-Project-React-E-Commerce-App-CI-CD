import { useState, useContext, useEffect } from "react";
import UserContext from "../Component/UserContext";

export const useCartCount = () => {
    const [cartCount, setCartCount] = useState(0);
    const { user } = useContext(UserContext);
    useEffect(() => {

    }, [user]);

    return cartCount;
}
