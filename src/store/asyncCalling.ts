import { createAsyncThunk } from "@reduxjs/toolkit";
import IProduct from "../interfaces/iproduct";
export const loadProducts = createAsyncThunk(
  "ressources/loadRessources",
  async () => {
    const retourDeRequete = await fetch(
      `${process.env.EXPO_PUBLIC_RESTADR}/products`
    );
    const values = await retourDeRequete.json();
    return values;
  }
);

export const saveProductToServer = createAsyncThunk(
  "current/save",
  async (produit: IProduct) => {
    const promiseSave = await fetch(
      `${process.env.EXPO_PUBLIC_RESTADR}/products${
        undefined !== produit.id ? `/${produit.id}` : ""
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: undefined !== produit.id ? "PUT" : "POST",
        body:JSON.stringify(produit)
      }
    );
    return await promiseSave.json();
  }
);
