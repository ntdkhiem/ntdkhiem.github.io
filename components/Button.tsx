"use client";
export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="px-3 py-2 border-2 text-white rounded-md hover:bg-white hover:text-black focus:outline-none transition-transform transform hover:scale-105 sm:px-4 lg:px-6"
        >
            {children}
        </button>
    );
}