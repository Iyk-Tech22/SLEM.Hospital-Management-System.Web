// export default function Input({ id, name, type,}: { id: string, name: string, type: string }){
//     return (
//       <input
//         id={id}
//         name={name}
//         type={type}
//         className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"

//       />
//     );
// }
import React from 'react';

const Input = React.forwardRef(({ name,id,type, ...rest } : {id:string,name:string,type:string,ref:string}, ref) => (
  <div>
    <input id={name} name={name} type={type} ref={ref} {...rest} className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue" /> {/* Properly attaching the ref */}
  </div>
));

export default Input;
