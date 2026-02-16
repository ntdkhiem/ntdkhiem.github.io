"use client";
import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    onClick: () => void;
}
export default function Button({ children, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="px-3 py-2 mb-2 bg-espresso-brown text-white rounded-md hover:bg-white hover:text-black transition-transform transform hover:scale-105 sm:px-4 lg:px-6"
        >
            {children}
        </button>
    );
}
