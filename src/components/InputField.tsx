interface InputFieldProps {
    title: string;
    type?: "number" | "text";
    placeholder?: string;
    value: string | number;
    autofocus?: boolean;
    handleChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>): void
}

export default function InputField({ title, value, type = "text", placeholder, autofocus, handleChange }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-2 mx-auto mb-4">
            <label className="text-nowrap font-medium text-neutral-700">{title}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                className="w-full border border-neutral-300 px-3 py-1.5 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400"
                placeholder={placeholder}
                autoFocus={autofocus}
                required
            />
        </div>
    )
}
