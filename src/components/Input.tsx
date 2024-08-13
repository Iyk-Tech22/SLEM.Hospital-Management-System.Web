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
import React,{ChangeEventHandler} from 'react';


const Input = React.forwardRef(({ name,id,type,className,onChange,...rest } : {id:string,name:string,type:string,className:string,onChange:ChangeEventHandler<HTMLInputElement>,ref:string}, ref) => (
  <div>
    <input id={id} name={name}  type={type}  className={className} onChange={onChange} ref={ref} {...rest}  /> 
  </div>
));

export default Input;
