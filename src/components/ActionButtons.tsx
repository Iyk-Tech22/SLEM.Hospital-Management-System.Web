import { FaTrash } from 'react-icons/fa6';


export default function ActionButtons() {
    return (
        <div className='flex items-center space-x-4'>
            <button className='px-2 py-1 rounded-sm border border-primaryDarkBlue'>Take up</button>
            <FaTrash size={18} className='text-primaryDarkBlue cursor-pointer' />
        </div>
    )
}