export default function Input({ id, name, type }: { id: string, name: string, type: string }){
    return (
      <input
        id={id}
        name={name}
        type={type}
        className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
      />
    );
}