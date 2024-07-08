import { JSX } from 'react';
import { clsx } from 'clsx';

export default function Button({ children, styles, type }
    : { children: JSX.Element | string, styles?: string, type: 'submit' | 'button' | 'reset' }) {
    if (styles === undefined) {
        styles = "bg-primaryBlue text-white hover:bg-primaryBlueHover transition-colors duration-200";
    }
    return (
        <button
            type={type}
            className={clsx("px-4 py-2 font-medium rounded-md text-sm", styles)}>
            {children}
        </button>
    )
}