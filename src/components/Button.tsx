import { JSX } from 'react';

export default function Button({children}:{children:JSX.Element | string}) {
    return (
        <button className="w-full px-4 py-2 bg-primaryBlue text-white font-medium rounded-md text-sm">
            {children}
        </button>
    )
}