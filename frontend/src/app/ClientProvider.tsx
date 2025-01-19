"use client";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import { ReactNode } from 'react';

export default function ClientProvider({ children }: { children: ReactNode }) {
    const store = makeStore();
    return <Provider store={store}>{children}</Provider>;
}
