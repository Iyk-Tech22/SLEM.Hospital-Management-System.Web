import { useParams } from "react-router-dom";
import { Patients } from "../data/constant";
export default function PatientProfilePage(){
    const patient = Patients;
    const { id } = useParams();
    const SelectedID = Number(id);
    return <div className='w-full md:max-w-2xl md:mx-auto'>
        <div className='w-full overflow-hidden'>
    <h1>Patient Information</h1>

<div className='bg-white shadow-md rounded-md'>
<div className='flex sm:flex-col sm:items-center px-4 md:px-6 py-4 md:py-8'> 
{patient.map((item,index)=>{
    return SelectedID === index ? <div key={index} className='flex flex-col justify-center items-center'>
          <img
        src={item.profile}
        alt={item.name}
        className='mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full'
      />
    </div>: null
})}

</div>
</div>
        </div>
    </div>
}