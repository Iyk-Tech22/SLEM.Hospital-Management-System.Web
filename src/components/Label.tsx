export default function Label({name, label}:{name: string, label:string}) {
    return (
      <label htmlFor={name} className="text-sm font-medium">
            {label}{name !== "remember-me" && <span className="text-xs text-red-600">*</span>}
      </label>
    );
}