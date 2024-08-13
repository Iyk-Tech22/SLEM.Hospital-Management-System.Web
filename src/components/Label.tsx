export default function Label({name, label,className, required}:{name: string, label:string,className:string, required:boolean}) {
    return (
      <label htmlFor={name} className="text-sm font-medium">
            {label}{required && <span className={className}>*</span>}
      </label>
    );
}