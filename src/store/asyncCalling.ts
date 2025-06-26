import { createAsyncThunk } from "@reduxjs/toolkit";

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