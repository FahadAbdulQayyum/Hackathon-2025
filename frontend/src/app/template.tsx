"use client";
import { ReactNode } from 'react';
import ClientProvider from './ClientProvider';

export default function Template({ children }: { children: ReactNode }) {
    return <div><ClientProvider>{children}</ClientProvider></div>
}