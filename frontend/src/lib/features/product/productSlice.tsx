"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: number;
    name: string;
}

interface ProductState {
    product: Product | null;
}

const initialState: ProductState = {
    product: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        initializeProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },
        setProductName: (state, action: PayloadAction<string>) => {
            if (state.product) {
                state.product.name = action.payload;
            }
        },
    },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;
export type { Product };