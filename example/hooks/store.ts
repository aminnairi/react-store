import { StoreContext } from "../store";
import { useContext } from "react";

export const useStore = () => useContext(StoreContext)