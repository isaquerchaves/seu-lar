interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input = ({ label, type, name, disabled, placeholder }: InputProps) => {
  return (
    <label
      className={`w-full  border border-gray-300 rounded-md p-2 mt-2 shadow-md ${
        disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
      }`}
    >
      <div className="flex flex-row text-sm font-medium border-none">
        <p className="min-w-16">{label}*</p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          className={`pl-4 w-full border-none focus:outline-none`}
        />
      </div>
    </label>
  );
};

export default Input;
