import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

const Input = forwardRef(function Input(
  { label, type, disabled, placeholder, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <label
      className={`w-full border border-gray-300 rounded-md p-2 mt-2 shadow-md ${
        disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
      }`}
    >
      <div className="flex flex-row text-sm font-medium border-none">
        <p className="min-w-16">{label}*</p>
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          className={`pl-4 w-full border-none focus:outline-none`}
          {...rest}
        />
      </div>
    </label>
  );
});

export default Input;
