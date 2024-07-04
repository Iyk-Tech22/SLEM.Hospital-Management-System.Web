export default function Label({name, label, required}:{name: string, label:string, required:boolean}) {
    return (
      <label htmlFor={name} className="text-sm font-medium">
            {label}{required && <span className="text-xs text-red-600">*</span>}
      </label>
    );
}